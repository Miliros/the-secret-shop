"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Product } from "@/types/types";

export const useInfiniteScroll = (
  products: Product[],
  itemsPerPage: number
) => {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const loadingRef = useRef(false);

  const loadMoreProducts = useCallback(() => {
    if (loadingRef.current || !products || products.length === 0) return;

    loadingRef.current = true;

    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    const nextProducts = products.slice(start, end);

    if (nextProducts.length > 0) {
      setVisibleProducts((prev) => [...prev, ...nextProducts]);
      setPage((prev) => prev + 1);
    }

    loadingRef.current = false;
  }, [products, page, itemsPerPage]);
  //console.log(page)

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        loadMoreProducts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreProducts]);

  useEffect(() => {
    if (visibleProducts.length === 0) {
      loadMoreProducts();
    }
  }, [loadMoreProducts, visibleProducts.length]);

  return { visibleProducts, loadMoreProducts };
};

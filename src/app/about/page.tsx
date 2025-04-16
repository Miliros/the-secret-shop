import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full h-screen bg-[#fbf9f7] flex flex-col items-center">
      <div className="md:h-[15%] sm:h-[8%] h-[8%] md:w-[80%] sm:w-[90%] w-full bg-[#3E2723]"></div>
      <div className="relative -mt-[3rem] flex flex-col items-center">
        <img
          className="md:w-[28rem] sm:w-[15rem] w-[28rem] h-[15rem] object-cover shadow-lg"
          alt="Profile"
          src="/images/about.jpg"
        />
      </div>
      <div className="text-center md:w-[70%] w-[80%] mt-6">
        <h2 className="sm:text-5xl text-3xl font-serif mt-10">
          SOBRE NOSOTROS
        </h2>
        <p className="text-md mt-6">
          Somos Old School Tech Shop, una tienda en línea que ofrece productos
          vintage y retro de tecnología clásica con sede en Argentina. Desde
          televisores de los años 90 hasta cámaras fotográficas de colección,
          nuestro objetivo es transportar a los clientes al pasado con piezas
          exclusivas.
        </p>
      </div>
      <div className="flex justify-center items-center py-8 space-x-6">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-black text-2xl hover:text-gray-600" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-black text-2xl hover:text-gray-600" />
        </a>
        <a
          href="https://wa.me/123456789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-black text-2xl hover:text-gray-600" />
        </a>
      </div>
      <Link
        href="/"
        className="font-semibold text-lg hover:text-[#3E2723] transition-all duration-300"
      >
        Ir a la tienda
      </Link>{" "}
    </div>
  );
}

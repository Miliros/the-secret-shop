"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { validateEmail, validatePassword } from "@/utils/validation";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor ingresa un email válido.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "La contraseña debe tener al menos 6 caracteres, una mayúscula, un número y un carácter especial."
      );
      return;
    }

    Cookies.set("userSession", JSON.stringify({ email }), { expires: 1 });

    router.push("/");
  };

  useEffect(() => {
    toast.warn(
      "Este formulario es solo para demostrar validación. Usa cualquier email y contraseña válida para probar.",
      {
        position: "top-right",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        pauseOnHover: true,
        hideProgressBar: true,
        className: "text-xs font-bold",
        style: {
          backgroundColor: "#fff3cd",
          color: "#000000",
          width: "100%",
          maxWidth: "800px",
          borderRadius: "0px",
          border: "1px solid #ffeeba",
          padding: "4px 8px",
        },
      }
    );
  }, []);

  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('images/bg.jpg')", height: "91vh" }}
    >
      <ToastContainer />

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm border border-black">
        <div className="text-center mb-6">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={95}
            height={80}
            className="mx-auto"
          />
        </div>
        <h2 className="text-3xl font-bold text-center text-[#333333]">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm text-[#333333]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-black focus:outline-none focus:border-black"
              placeholder="Tu email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm text-[#333333]"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-black focus:outline-none focus:border-black"
              placeholder="Tu contraseña"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 mt-1.5 bg-black text-white font-bold border border-black focus:outline-none hover:bg-[#3E2723] cursor-pointer"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

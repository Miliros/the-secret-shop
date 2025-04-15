"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { validateEmail, validatePassword } from "@/utils/validation";
import Cookies from "js-cookie";

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

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('images/bg.jpg')",
      }}
    >
      <div className="bg-[#f9f9f9] p-12 rounded-lg shadow-lg w-96 border border-gray-200">
        <h2 className="text-2xl font-bold text-[#333333] text-center mb-4">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-[#333333]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded border border-black focus:outline-none focus:border-black"
              placeholder="Tu email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-[#333333]"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded border border-black focus:outline-none focus:border-black"
              placeholder="Tu contraseña"
            />
          </div>
          {error && <p className="text-[#D9534F] text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-bold border border-black focus:outline-none focus:border-black hover:bg-[#3E2723] hover:text-white cursor-pointer"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

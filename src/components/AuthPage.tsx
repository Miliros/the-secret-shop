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
    <div className="flex items-center justify-center min-h-screen bg-[#ebe9e2]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
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
              className="w-full p-2 rounded bg-[#F7F7F7] border border-[#808080] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
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
              className="w-full p-2 rounded bg-[#F7F7F7] border border-[#808080] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
              placeholder="Tu contraseña"
            />
          </div>
          {error && <p className="text-[#D9534F] text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#ff6b35a2] hover:bg-[#e65100a8] text-white font-bold rounded"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

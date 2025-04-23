"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { validateEmail, validatePassword } from "@/utils/validation";
import Cookies from "js-cookie";

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(true);

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
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 6000);
  }, []);

  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('images/bg.jpg')", height: "91vh" }}
    >
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-11/12 md:w-1/3 max-w-xs border border-black">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
              </svg>
              <h2 className="ml-2 font-semibold text-2xl text-black">
                ¡Alerta de validación!
              </h2>
            </div>
            <p className="mt-2 text-sm text-gray-700">
              Este formulario es solo para demostrar validación, debes ingresar
              cualquier email y cualquier contraseña que tenga al menos 6
              caracteres, una mayúscula, un número y un carácter especial .
            </p>
            <button
              className="mt-4 w-full py-2 px-4 bg-black text-white font-bold hover:bg-[#3E2723]"
              onClick={() => setShowAlert(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <div className="bg-white p-8 rounded-lg shadow-lg w-full  max-w-sm border border-black">
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
            className="w-full py-2 px-4 mt-1.5 bg-black text-white font-bold border border-black focus:outline-none hover:bg-[#3E2723]"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

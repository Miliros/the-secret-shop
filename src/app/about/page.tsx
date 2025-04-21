import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full h-screen sm:h-[120vh] bg-[#fbf9f7] flex flex-col items-center">
      <div className="md:h-[15%] sm:h-[8%] h-[8%] md:w-[80%] sm:w-[90%] w-full bg-[#3E2723]"></div>
      <div className="relative -mt-[3rem] flex flex-col items-center">
        <Image
          className="md:w-[28rem] sm:w-[15rem] w-[28rem] h-[15rem] object-cover shadow-lg"
          alt="Profile"
          src="/images/about.jpg"
          width={500}
          height={300}
        />
      </div>
      <div className="text-center md:w-[40%] sm:w-[90%] w-full mt-6 px-4">
        <h2 className="sm:text-4xl text-3xl font-custom font-bold text-[#3E2723] mt-4">
          SOBRE NOSOTROS
        </h2>
        <p className="text-md mt-4 leading-relaxed">
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
        className="font-semibold text-sm hover:text-[#3E2723] transition-all duration-300 animate-titileo"
      >
        Ir a la tienda
      </Link>
    </div>
  );
}

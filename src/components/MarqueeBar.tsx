"use client";

const MarqueeBar: React.FC = () => {
  const text =
    "Envío gratuito en pedidos superiores a $50 · Novedades en stock · Comprar ahora";
  return (
    <div className="w-full bg-black py-2">
      <div className="overflow-hidden whitespace-nowrap relative">
        <div className="animate-marquee inline-block">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-white text-sm mx-4 uppercase tracking-wider"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBar;

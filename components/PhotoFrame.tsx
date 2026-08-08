import Image from "next/image";

export default function PhotoFrame({
  src,
  alt,
  aspect = "aspect-[4/5]",
  className = "",
  sizes,
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border-4 border-iron bg-iron shadow-brutal-lg grayscale contrast-125 transition-all duration-[400ms] hover:grayscale-0 ${aspect} ${className}`}
    >
      <Image src={src} alt={alt} fill sizes={sizes ?? "(max-width:768px) 100vw, 50vw"} className="object-cover" />
    </div>
  );
}
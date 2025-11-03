import Image from "next/image";

function Avatar({ src, alt }) {
  return (
    <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-1 ring-secondary-300 ml-2">
      <Image
        src={src || "/images/avatar.png"}
        alt={alt || "آواتار کاربر"}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
      />
    </div>
  );
}

export default Avatar;

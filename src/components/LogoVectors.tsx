import Image from "next/image";

export const LogoVectors = () => {
  return (
    <div className="min-w-[160px] w-[160px] h-[120px] md:min-w-[250px] md:w-[250px] md:h-[190px] relative">
      <Image src="/images/logo_vectors.png" layout="fill" alt="icon" priority />
    </div>
  );
};

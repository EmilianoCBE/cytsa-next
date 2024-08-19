import Image from "next/image";
import Link from "next/link";

export const Hero = ({ title, description, heroImage }) => {
  return (
    <div className='flex flex-col md:flex-row md:h-screen pt-[113px] md:pt-[133px]'>
      <div
        className='md:w-[45vw] flex gap-5 flex-col justify-start md:justify-center items-start py-11 h-[350px] md:h-full px-8'
      >
        <h1 className='text-2xl md:text-[50px] font-bold leading-10 md:leading-[56px] md:text-black'>
          {title}
        </h1>
        {description && (
          <p className='text-lg md:text-xl md:text-black'>
            {description}
          </p>
        )}
        <Link href="/contacto">
          <button className='p-3 bg-orange-500 rounded-md text-slate-100 hover:bg-white hover:text-orange-500 border-orange-500 border transition-all ease-in-out'>
            Contáctanos
          </button>
        </Link>
      </div>
      <div className='hidden md:block md:w-[55vw] h-full'>
        <div className='relative w-full h-full'>
          <Image 
            src={heroImage} 
            fill
            alt="Nosotros" 
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
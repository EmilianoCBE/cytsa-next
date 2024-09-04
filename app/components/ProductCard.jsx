import Link from 'next/link';

export const ProductCard = ({ link, title, image }) => {
  return (
    <Link href={link} className='cursor-pointer w-[345px] md:w-[660px]'>
      <div className='w-full h-full relative overflow-hidden group'>
        <div
          className="bg-center bg-cover bg-no-repeat h-[360px] md:h-[520px] transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className='absolute bottom-0 left-0 w-full px-8 py-20 bg-transparent overflow-hidden'>
          <h2 className='font-bold text-2xl md:text-[50px] text-slate-100 relative z-10'>
            {title}
          </h2>
          <div className="absolute inset-0 bg-red-700 w-0 transition-all duration-500 group-hover:w-full z-0"></div>
        </div>
      </div>
    </Link>
  );
};
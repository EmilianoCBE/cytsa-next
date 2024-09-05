import Image from 'next/image';
import Link from 'next/link';

export const ProductCardDetail = ({ title, image, titleExist = true }) => {
  return (
    <div className='w-[345px] md:w-[660px]'>
      <div className='w-full h-full relative overflow-hidden group'>
        <div
          className="h-[360px] md:h-[520px] transition-transform duration-300 group-hover:scale-105"
        >
          <Image
            src={image}
            fill={true}
            objectFit="cover"
            alt={title}
          />
        </div>
        {
          titleExist && (
            <div className='absolute bottom-0 left-0 w-full px-8 py-20 bg-transparent overflow-hidden'>
              <h2 className='font-bold text-2xl md:text-[50px] text-slate-100 relative z-10 leading-normal'>
                {title}
              </h2>
              <div className="absolute inset-0 bg-red-700 w-0 transition-all duration-500 group-hover:w-full z-0"></div>
            </div>
          )
        }
      </div>
    </div>
  );
};
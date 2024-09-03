import Link from 'next/link'

export const ProductCard = ({link, title, image}) => {
  return (
    <Link href={link} target='_blank' className='cursor-pointer w-[345px] md:w-[430px]'>
        <div className='w-full h-full relative overflow-hidden'>
          <div className="flex items-end justify-end bg-center bg-cover bg-no-repeat h-[224px] md:h-[280px] transition-all duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className='hover:text-orange-500 transition-all ease-in-out text-black '>
            <h2 className='pt-3 font-bold text-lg'>
              {title}
            </h2>
          </div> 
          </div>
        </div>
      </Link>
  )
}

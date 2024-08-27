import Image from "next/image"
import Link from "next/link"

export const ProductCard = ({href, image, title}) => {
  return (
    <Link href={href} className='border h-[340px] border-[#e2e0e0] px-4 py-4 hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100 hover:border-orange-500 hover:scale-img'>
      <div className='w-full h-full flex flex-col justify-center gap-7'>
        <Image width={350} height={200}  src={image} alt={title} />
        <h2 className='font-bold text-lg text-center'>{title}</h2>
      </div>
    </Link>
  )
}

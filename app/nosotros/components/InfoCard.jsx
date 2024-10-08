import Image from "next/image"

export const InfoCard = ({title, description, iconImage}) => {
  return (
    <div className="text-black hover:text-slate-100 border-gray-500 border py-6 md:py-10 px-8 hover:border-red-700 hover:bg-red-700 transition-all ease-in-out flex flex-col-reverse h-full md:flex-row gap-2 md:gap-20">
      <div className="flex flex-col gap-4 md:w-[80%]">
        <h2 className="text-xl md:text-[42px] font-bold py-4">
          {title}
        </h2>
        <p className="text-[16px] leading-6">
          {description}
        </p>
      </div>
      <div className="self-center ">
        <div className="bg-[#F9F9F9] rounded-full p-5 w-[100px]">
          <Image src={iconImage} alt="" width={60} height={60}/>
        </div>
      </div>
    </div>
  )
}

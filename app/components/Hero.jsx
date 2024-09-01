'use client'
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

export const Hero = ({ title, breadCrumb, heroImage }) => {
  return (
    <div 
      className='relative flex flex-col w-full md:flex-row h-[550px] pt-[113px] md:pt-[133px] bg-center bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay oscuro */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      <div
        className='relative max-w-[1440px] z-10 w-full flex flex-col justify-center items-start py-20 md:py-5 h-[350px] md:h-full px-4 md:px-8 md:mx-auto'
      >
        <h1 className='text-[30px] md:text-[60px] font-bold leading-10 md:leading-[56px] text-white mb-5'>
          {title}
        </h1>
        <Breadcrumbs size="sm">
          <BreadcrumbItem className="text-white">Home</BreadcrumbItem>
          <BreadcrumbItem className="text-white">{breadCrumb}</BreadcrumbItem>
        </Breadcrumbs>
      </div>
    </div>
  );
};
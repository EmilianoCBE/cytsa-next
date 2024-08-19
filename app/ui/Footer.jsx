import { footerContent } from '@/app/lib/data.js';

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 text-white py-10 px-4 md:px-10 text-center gap-5 flex flex-col md:flex-row md:justify-between md:items-start">
      <div>
        <ul className='text-left'>
          {
            footerContent[0].left.map((item, index) => (
              <li key={index} className='py-1'>{item.label}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <ul className='text-left'>
          {
            footerContent[1].right.map((item, index) => (
              <li key={index} className='py-1'>{item.label}</li>
            ))
          }
        </ul>
      </div>
    </footer>
  )
}

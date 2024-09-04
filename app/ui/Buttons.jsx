import Link from 'next/link'

export const MainButton = ({link, text, classNames = ''}) => {
  return (
    <Link href={link}>
      {/* <button className={`font-bold p-3 bg-red-700 text-slate-100 hover:bg-white hover:text-red-700 border-red-700 border transition-all ease-in-out ${classNames}`}>
        {text}
      </button> */}
      <button class="before:ease relative h-12 w-40 overflow-hidden bg-black  text-slate-100 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-red-700 before:duration-300 hover:text-white hover:bg-red-700 hover:before:h-64 hover:before:-translate-y-32">
        <span class="relative z-10">{text}</span>
      </button>
    </Link>
  )
}

export const SecondaryButton = ({ link, text, classNames = '' }) => {
  return (
    <Link href={link} className='pointer'>
      <button className={`flex items-center font-bold py-3 text-black hover:text-red-700 transition-all ease-in-out ${classNames}`}>
        {text}
        <svg
          className="ml-2 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:text-red-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </Link>
  )
}

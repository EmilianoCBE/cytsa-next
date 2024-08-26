import Link from 'next/link'

export const MainButton = ({link, text, classNames = ''}) => {
  return (
    <Link href={link}>
      <button className={`font-bold p-3 bg-orange-500 text-slate-100 hover:bg-white hover:text-orange-500 border-orange-500 border transition-all ease-in-out ${classNames}`}>
        {text}
      </button>
    </Link>
  )
}

export const SecondaryButton = ({ link, text, classNames = '' }) => {
  return (
    <Link href={link}>
      <button className={`flex items-center font-bold p-3 text-black hover:text-orange-500 transition-all ease-in-out ${classNames}`}>
        {text}
        <svg
          className="ml-2 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:text-orange-500"
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

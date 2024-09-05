
export const SubBreadcrumb = ({text}) => {
  return (
    <div className="flex items-center space-x-3 mb-3">
      <div className="w-2 h-2 bg-red-700 rounded-full"></div>
      <span className="text-[16px] font-medium text-gray-800">{text}</span>
    </div>
  )
}

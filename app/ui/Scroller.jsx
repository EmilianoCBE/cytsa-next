export const Scroller = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap h-full bg-orange-500 flex items-center">
      <div className="inline-block animate-marquee">
        <span className="mx-4 text-3xl md:text-[250px] font-semibold text-slate-100 leading-none">
          CYTSA
        </span>
        <span className="mx-4 text-3xl md:text-[250px] font-semibold text-slate-100 leading-none">
          CONEXIONES FABRICADAS A LA MEDIDA
        </span>
        <span className="mx-4 text-3xl md:text-[250px] font-semibold text-slate-100 leading-none">
          CYTSA
        </span>
        <span className="mx-4 text-3xl md:text-[250px] font-semibold text-slate-100 leading-none">
          CONEXIONES FABRICADAS A LA MEDIDA
        </span>
      </div>
    </div>
  );
}
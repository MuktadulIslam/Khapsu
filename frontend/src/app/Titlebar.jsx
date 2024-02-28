import Link from "next/link";

export default function Titlebar({title, discription, link}) {
    return(<>
        <div className="w-full h-20 md:h-24 lg:h-32 bg-slate-900 my-2 flex flex-col items-center justify-center text-center p-2">
            <Link href="/"><h3 className="max-md:hidden text-[10px] lg:text-xs font-semibold text-indigo-600">VISIT THE PAGE TO GET MORE</h3></Link>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-50">{title}</h1>
            <p className="text-xs md:text-sm lg:text-base text-stone-200 md:pt-2">{discription}</p>
        </div>
    </>)
}
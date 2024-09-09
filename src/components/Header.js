import SessionComponent from "./SessionComponent"
import Image from "next/image"

export default function Header(){

    return(
<header className="bg-slate-500 dark:text-white h-24">
      <div className="container mx-auto h-full flex items-center">
        <div className="flex-grow">
        <div className="text-center">
      <Image
        src="/img/asafe.png"
        alt="Asafe IT Logo"
        width={200}
        height={200}
        className="object-contain"
      />
    </div>
        </div>
        <SessionComponent />
      </div>
      
    </header>
    )
}
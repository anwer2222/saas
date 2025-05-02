import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const icons = [
    {
        src: "/footer/1.svg",
        href: "",
    },
    {
        src: "/footer/2.svg",
        href: "",
    },
    {
        src: "/footer/3.svg",
        href: "",
    },
    {
        src: "/footer/4.svg",
        href: "",
    },
    {
        src: "/footer/5.svg",
        href: "",
    },
    {
        src: "/footer/6.svg",
        href: "",
    },
    {
        src: "/footer/7.svg",
        href: "",
    },
]

const Footer = () => {
    return (
        <footer className="bg-[#ceaf67] my-24">
            <div className="container mx-auto  ">
                <div className="flex flex-col xl:flex-row items-center gap-12 xl:justify-between">
                    {/* socials */}
                    <div className="flex-1 flex gap-8 mt-20 xl:mt-0">
                        {icons.map((icon,index) => {
                            return (
                                <Link href={icon.href} key={index}>
                                    <div className="relative w-6 h-6">
                                        <Image src={icon.src} fill alt="" className="object-contain"/>
                                    </div>
                                </Link>
                            )
                        })}

                    </div>
                    {/* logo */}
                    <div className="flex-1 flex justify-center">
                       <Link href="/" className="relative w-[150px] h-[350px] flex">
                           <Image src="/foc/logo_05.png" fill alt="" className="object-contain"/>
                       </Link>
                    </div>
                    {/* copyright */}
                    <p className="flex-1 flex text-black justify-end font-light mb-8 xl:mb-0"> &copy; 2025 FUTURE OF CREATIVITY. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="relative w-[150px] h-[150px] flex">
            <Image src="/foc/logo_06.png" fill alt="" className="object-contain"/>
        </Link>
    )
}

export default Logo;
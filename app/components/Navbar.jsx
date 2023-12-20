import Image from "next/image";
import Link from "next/link";
import Logo from "./dojo-logo.png";

function Navbar() {
    return (
        <nav>
            <Image
            src={Logo}
            alt="Dojo Logo"
            className="w-[70px]"
            quality={100}
            placeholder="blur"
            />
            <span>Helpdesk</span>
            <Link href={"/"}>Home</Link>
            <Link href={"/tickets"}>Tickets</Link>
        </nav>
    )
}

export default Navbar

import Link from "next/link";

const Header = () => {
    return ( 
        <div className="header">
            <Link href="/">
                <img src="/aclogo.png" />
            </Link>
        </div>
     );
}
 
export default Header;
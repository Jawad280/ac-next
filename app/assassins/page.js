import Card from "../components/Card";
import assassins from "../../data/assassins.json"
import Link from "next/link";

const Assassins = () => {
    return ( 
        <div className="assassin-container">
            {assassins.map(x => (
                <Link href={`/assassins/${x.title}`} key={x.title}>
                    <Card 
                        name={x.name} 
                        path={x.path} 
                    />
                </Link>
            ))}
        </div>
     );
}
 
export default Assassins;
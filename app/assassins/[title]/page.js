import assassins from "../../../data/assassins.json";

const AssassinDetail = ({params}) => {

    const current = assassins.find(x => x.title === params.title);

    return ( 
        <div className="assassin-detail">
            <div className="assassin-detail-name">{current.name}</div>
            <img src={current.path} />
            <div>{current.content}</div>
        </div>
     );
}
 
export default AssassinDetail;
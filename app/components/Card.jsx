const Card = ({ name, path }) => {
    return ( 
        <div className="card">
            <img 
                src={path} 
                className="card-pic"
            />
            <div className="card-name">
                {name}
            </div>
        </div>
     );
}
 
export default Card;
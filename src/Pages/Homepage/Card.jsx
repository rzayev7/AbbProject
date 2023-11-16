
import "../Homepage/trending/trending.css"

const Card = ({ item }) => {
  return (
    <div className="card-1">
        <img src={item.photo} alt="" />
        <div className="description">
            <div className="sp-trip">
                <p>{item.country} TRIP</p>
                <p className="mainT">{item.title}</p>
            </div>
            <div className="sp-cost">
                <p>{item.days} days</p>
                <p>From ${item.price}</p>
            </div>
        </div>
    </div>
  );
};

export default Card;

import img1 from "../../../assets/homepage/I1.svg"
import "../trending/trending.css"
import { trendingItems } from '../../../constants/index.js'
import { useEffect, useState } from "react"
import Card from "../Card.jsx"


const Trending=()=>{
    const [items, setItems] = useState([])

    useEffect(() => {
        //api call if real case
        setItems(trendingItems)
    }, []);

    return(
    <div className="contain">
        <div className="container2">
            <h1>Trending now</h1>
            <div className="cards">
                {
                    items.map((item) => 
                    <Card key={item.id} item={item} />
                    )
                }
            </div>
        </div>
    </div>
        
    )
}
export default Trending;
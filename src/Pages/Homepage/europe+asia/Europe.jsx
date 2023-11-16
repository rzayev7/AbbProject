import { useEffect, useState } from "react";
import Card from "../Card";
import "../trending/trending.css"

import { trendingItems } from '../../../constants/index.js'
function Europe(){

    const [items,setItems]=useState([]);
    useEffect(() => {
        // Set the trending items after the component mounts
        setItems(trendingItems);
    }, []); 
    return (
        <div className="contain">
            <div className="container2">
                    <h1>Europe</h1>
                    <div className="cards">
                        {
                            items.map((item) => 
                            <Card key={item.id} item={item} />
                            )
                        }
                    </div>
                    <section className="looking">
                        <div>
                            <p>Looking to go elsewhere?</p>
                            <button>Our destinations</button>
                        </div>
                    </section>
                    <section className="join">
                        <div className="join-container">
                            <div className="upper-join">
                                <p id="up1">Join our travel revolution</p>
                                <p id="up2">Sign up to stay in the know - hot new travel spots,
                                how we strive to make the world a better place, and all sorts of surprises.
                                </p>
                            </div>
                            <div className="lower-join">
                                <input type="text" name="Email" id="" />
                                <button>Sign up</button>
                            </div>
                        </div>
                    </section>
            </div>
        </div>
    );
}

export default Europe;
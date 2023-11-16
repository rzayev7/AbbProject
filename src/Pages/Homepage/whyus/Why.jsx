import "../whyus/why.css";
import icon1 from "../../../assets/homepage/Icon1.svg"
import icon2 from "../../../assets/homepage/Icon2.svg"
import icon3 from "../../../assets/homepage/Icon3.svg"


function Why() {
    return (
        <div className='why'> 
                <div className="why-container">
                    <p id="p-why">Why us?</p>
                    <div className="why-answer">
                        <div className="answer">
                            <div>
                                <img src={icon1} alt="" />
                            </div>
                            <p>More than 149 travel titles currently in print</p>
                        </div>
                        <div className="answer">
                            <div>
                                <img src={icon1} alt="" />
                            </div>
                            <p>More than 149 travel titles currently in print</p>
                        </div>
                        <div className="answer">
                            <div>
                                <img src={icon1} alt="" />
                            </div>
                            <p>More than 149 travel titles currently in print</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Why;
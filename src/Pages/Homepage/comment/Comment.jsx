import "../../../Pages/Homepage/comment/comment.css"
import img from "../../../assets/homepage/Image.svg"
function Comment() {
    return (
        <div className="comment-section">
            <div className="upper-board">
                <p>
                    “Tiago put together an epic itinerary for me and my friends. He
                    showed us some hidden hiking trails and amazing local food spots. He
                    even met us for a coffee to make sure we had everything we needed.
                </p>
                <h5>Thanks Tiago!”</h5>
                <p>Charlie, rappelling down a 370-foot waterfall</p>
                <p>The Azores</p>
            </div>
            <div className="down-board">
                <div className="icon-div">
                    <img src={img} alt="" />
                </div>
                <div className="crafted-div">
                    <p>Trip crafted by</p>
                    <h5>Tiago <span>|</span> <span>Local expert in Portugal</span></h5>
                </div>
                
            </div>                
        </div>
    );
}

export default Comment;
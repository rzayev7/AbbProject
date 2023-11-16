import "../localExperts/local.css"
import img1 from "../../../assets/homepage/Callcenter.svg"
import img2 from "../../../assets/homepage/Callcenter1.svg"
import dialog1 from "../../../assets/homepage/Vector.svg"
import dialog2 from "../../../assets/homepage/Vector1.svg"

function LocalExperts() {
    return (
        <section className='local-section'>
            <h1>Our Local Experts</h1>
            <div className="experts-container">
                <div className="left-call">
                    <img src={img2} alt="" />
                    <div className="left-dialog">
                        <img src={dialog1} alt="" />
                        <p>Why trust Gary in Florida to
                            plan your trip to South Africa?</p>
                    </div>
                </div>
                <div className="right-call">
                    <img src={img1} alt="" />
                    <div className="right-dialog">
                        <img src={dialog2} alt="" />
                        <p>Why trust Gary in Florida to
                            plan your trip to South Africa?</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocalExperts;
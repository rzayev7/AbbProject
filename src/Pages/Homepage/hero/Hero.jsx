
import video from "../../../assets/homepage/2dd9fbc11b91af4be64524dc6be9b1d3.mp4"
import "../hero/hero.css"
import img from "../../../assets/hero/Search_Magnifying_Glass.svg"
const Hero=()=>{

    return (
        <div>
            <section className="hero">
                <div className='video-container'>
                    <video  id="background-video" muted >
                        <source src={video} type='video/mp4'/>
                    </video>
                </div>
                
                <div className='text-container'>
                    <h1>We create trips you love</h1>
                    <p>Trips you couldn't plan, even if you wanted to.</p>
                    <div className='searchIconContainer'>
                        <input type="text" placeholder='Where do you want to go?' />
                        <div className="a">
                            <img src={img} alt="" />
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
} 
export default Hero;
import "../css/main.css"
import img1 from "../Images/Imageplaceholder.png"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import img2 from "../Images/01 align center.png"
import img3 from "../Images/Frame (1).png"
import img4 from "../Images/Frame (2).png"
import img5 from "../Images/Frame.png"
import img6 from "../Images/Group2.png"
const Main=()=>{

    return(
        <div className="page-divide">
            <section className="left-side">
                <img src={img1} alt=''></img>
            </section>
            <section className="right-side">
                <Header/>
                <form>
                    <div className="Sign-in">
                        <p>Sign in for your exciting journey</p>
                        <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
                            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                                <label htmlFor='email'>Email</label>
                                <div className="div-input">
                                    <input type="email" id="email" value="someone@example.com"/> 
                                </div>
                            
                                <label htmlFor='password'>Password</label>
                                <div className="div-input">
                                    <input type="password" id="password" value="someonessome"/>
                                    <img src={img2}/>
                                </div>
                                    
                                <div className="forgot-password" style={{display:'flex',justifyContent:'end',padding: '16px 0px 8px 0px'}}>
                                    <p>Forgot password?</p>
                                </div>
                            </div>
                            <button>
                                <p>Sign in</p>
                            </button>
                        </div>
                    </div>
                </form>
                <section className="social-section">
                    <div className="sub-social">
                        <p>or use one of this</p>
                        <div className="div-social">
                            <button><img src={img5}/></button>
                            <button><img src={img3}/></button>
                            <button><img src={img4}/></button>
                        </div>
                    </div>
                    
                </section>
                <Footer/>
            </section>
        </div>        
    )
}
export default Main;
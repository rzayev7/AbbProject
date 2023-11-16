import "../css/main.css"
import img1 from "../../../assets/login/Imageplaceholder.svg"
import "../css/header.css"
import "../css/footer.css"
import logo from "../../../assets/login/Group.svg"
import img2 from "../../../assets/login/01.svg"
import img5 from "../../../assets/login/Frame (1).svg"
import img4 from "../../../assets/login/Frame (2).svg"
import img3 from "../../../assets/login/Frame.svg"
import { Link } from "react-router-dom"

const Login=()=>{

    return(
        <div className="page-divide">
            <section className="left-side">
                <img src={img1} style={{height:'100%'}} alt=''></img>
            </section>
            <section className="right-side">
            <div className="logo-section" style={{ position: 'relative' }}>
                <img src={logo} />
            </div>
                <form>
                    <div className="Sign-in">
                        <p>Sign in for your exciting journey</p>
                        <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
                            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                                <label htmlFor='email'>Email</label>
                                <div className="div-input">
                                    <input style={{outline:'none'}} type="email" id="email" value="someone@example.com"/> 
                                </div>
                            
                                <label htmlFor='password'>Password</label>
                                <div className="div-input">
                                    <input style={{outline:'none'}} type="password" id="password" value="someonessome"/>
                                    <img src={img2}/>
                                </div>
                                    
                                <div className="forgot-password" style={{display:'flex',justifyContent:'end',padding: '16px 0px 8px 0px'}}>
                                    <p><Link to='/forgotpassword'>Forgot password?</Link></p>
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
                <div className="footer-div">
                    <p>Don't have an account? <span><Link to='/createaccount'>Create one for new adventure!</Link></span></p>
                </div>
            </section>
        </div>        
    )
}
export default Login;
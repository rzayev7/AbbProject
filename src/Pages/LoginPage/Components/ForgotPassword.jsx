import "../css/main.css"
import img1 from "../../../assets/login/Imageplaceholder.svg"
import "../css/header.css"
import "../css/footer.css"
import logo from "../../../assets/login/Group.svg"
import img2 from "../../../assets/login/01.svg"
import img5 from "../../../assets/login/Frame (1).svg"
import img4 from "../../../assets/login/Frame (2).svg"
import img3 from "../../../assets/login/Frame.svg"

const ForgotPassword=()=>{
    return(
        <div className="page-divide">
            <section className="left-side">
                <img src={img1} style={{height:'100%'}} alt=''></img>
            </section>
            <section className="right-side">
            <div className="logo-section" style={{ position: 'relative' }}>
                <img src={logo} />
            </div>
                <form id="changePsForm">
                    <div className="changePsContainer">
                        <div className="changePassword">
                            <h1>Looking to change your password?</h1>
                            <p>Enter your email below and we'll send you instructions on how to reset your password.</p>
                        </div>
                        <label htmlFor='email'>Email</label>
                        <div className="div-input">
                            <input style={{outline:'none'}} type="email" id="email" value="someone@example.com"/> 
                        </div>
                        <button>
                                <p>Sign in</p>
                        </button>
                    </div>
                </form>
            </section>
        </div>     
    )
}

export default ForgotPassword;
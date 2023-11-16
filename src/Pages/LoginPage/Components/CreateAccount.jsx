import "../css/main.css"
import img1 from "../../../assets/login/Imageplaceholder.svg"
import "../css/header.css"
import "../css/footer.css"
import logo from "../../../assets/login/Group.svg"
import img2 from "../../../assets/login/01.svg"
import img5 from "../../../assets/login/Frame (1).svg"
import img4 from "../../../assets/login/Frame (2).svg"
import img3 from "../../../assets/login/Frame.svg"

const CreateAccount=()=>{

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
                        <p>Create an account to start trip planning</p>
                        <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
                            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                                <label htmlFor='email'>Email</label>
                                <div className="div-input">
                                    <input style={{outline:'none'}} type="email" id="email" value="someone@example.com"/> 
                                </div>
                            </div>
                            <button>
                                <p>Start trip planning</p>
                            </button>
                        </div>
                    </div>
                </form>
                <section className="social-section">
                    <div className="sub-social">
                        <p>Sign up with</p>
                        <div className="div-social">
                            <button><img src={img5}/></button>
                            <button><img src={img3}/></button>
                            <button><img src={img4}/></button>
                        </div>
                    </div>
                    
                </section>
                <div className="footer-div">
                    <p style={{width:'338px',textAlign:'center'}}>By creating an account, you agree to elsewhere's {' '}
                    <a href="">Terms of Use</a>
                    {' '}
                    and
                    {' '}
                    <a href="">Privacy Policy</a>
                    {' '}
                    </p>
                    
                </div>
            </section>
        </div>        
    )
}
export default CreateAccount;
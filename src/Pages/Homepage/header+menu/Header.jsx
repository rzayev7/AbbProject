
import img from "../../../assets/homepage/Unfold_More.svg"
import logo2 from "../../../assets/login/Group.svg"
import "../header+menu/header.css"
const Header = () => {
    return (
        <header>
            <section className="topheader">
            <nav className="navbar">
                <ul>
                    <li>About us</li>
                    <li style={{color:"blue"}}>FAQ</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                </ul>
                <div className="right">
                    <li>US$</li>
                    <img src={img}/>
                </div>
            </nav>
            </section>
            <section className="bottomHeader">
                <div className="container">
                    <div className="leftButtons">
                        <li style={{color:"blue"}}>Destinations</li>
                        <li>Private trips</li>
                    </div>
                    <img src={logo2} alt="logo" />
                    <div className="rightButtons">
                        <button style={{color:'white',fontSize:"16px"}}>I'm Feeling Lucky</button>
                        <button style={{fontSize:"16px"}} id="b2">
                            Login
                        </button>
                    </div>
                </div>
                
            </section>
            
        </header>
    );
}

export default Header;
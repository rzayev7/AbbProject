
import "../css/header.css"
import logo from "../Images/Group.png"
import logo2 from "../Images/Group2.png"
const Header=()=>{
    return (
        <div className="logo-section" style={{ position: 'relative' }}>
          <img src={logo} />
          <img
            style={{
              position: 'absolute',
              left: '300px', // Move right 20px over the first image
              zIndex: '1',
              width: '41.648px',
              height: '18.523px',
              flexShrink: '0'
            }}
            src={logo2}
          />
        </div>
      );
      
}

export default Header;
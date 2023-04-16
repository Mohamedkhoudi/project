import "./Navbar.css"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navcontainer">
        <span className="logo">DiscoveryTrip</span>
        <div className="NavItems">
            <button className="Navbutton">Register</button>
            <button className="Navbutton">Login</button>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar

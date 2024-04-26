import logo from "../assets/logo.png"
const Header = () => {
  return (
    <header className="header">
        <div className="logo_container">
          <img className="logo" src={logo} alt="logo" role="img"/>
          <h1>Chat</h1>
        </div>
    </header>
  )
}

export default Header
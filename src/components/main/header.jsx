import "./headerStyle.css"
import { ReactComponent as Logo } from '../../images/logo.svg';
import { useNavigate  } from "react-router-dom";

function Header(){

    const navigate =  useNavigate()

return(
    <div className="header">
                <Logo className="logo"/>
        <div className="headerMain">
            <ul>
                <li>Pussies</li>
                <li>About as</li>
            </ul>
        </div>
    
        <div className="entraces">
            <ul>
                <li onClick={(e) => navigate("signIn")}>Sign-in</li>
                <li onClick={(e) => navigate("signUp")}>Sign-up</li>
            </ul>
        </div>
    </div>
)
}

export default Header
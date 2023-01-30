import "./headerStyle.css"
import { ReactComponent as Logo } from '../../images/logo.svg';

function Header(){
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
                <li>Sign-in</li>
                <li>Sign-up</li>
            </ul>
        </div>
    </div>
)
}

export default Header
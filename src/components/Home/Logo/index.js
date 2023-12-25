import './index.scss';
import logo from '../../../public/logo.svg.png';


export default function Logo() {

    return (
        <div className="logo-container">
          <img className="solid-logo" src={logo}></img>
        </div>
    )
}
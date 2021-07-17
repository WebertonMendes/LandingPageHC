import SearchIcon from "../../assets/icons/search.svg";
import BasketIcon from "../../assets/icons/basket.svg";
import PersonIcon from "../../assets/icons/person.svg";
import Logo from "../../assets/logo.svg";

import { HeaderContainer, Menu } from "./styles";

export default function Header() {
    return (
        <HeaderContainer>
            <div className="header-left">
                <img src={Logo} alt="Logo Caped" />
                
                <div className="search">
                    <img src={SearchIcon} alt="Search Form Icon" />
                    <input type="text" placeholder="Search store" />
                </div>
            </div>

            <Menu className="menu">
                <a href="/">products</a>
                <a href="/">story</a>
                <a href="/">manufacturing</a>
                <a href="/">packaging</a>

                <img src={BasketIcon} alt="Basket Icon" />
                <img src={PersonIcon} alt="Person Icon" />
            </Menu>
        </HeaderContainer>
    )
}
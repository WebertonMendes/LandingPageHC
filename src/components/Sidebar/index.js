import { SidebarContainer } from "./styles";

import newInIcon from "../../assets/icons/new-in.svg";
import clothing from "../../assets/icons/clothing.svg";
import shoes from "../../assets/icons/shoes.svg";
import accessories from "../../assets/icons/accessories.svg";
import activewear from "../../assets/icons/activewear.svg";
import giftsLiving from "../../assets/icons/gifts-living.svg";
import inspiration from "../../assets/icons/inspiration.svg";

export default function Sidebar() {
    return (
        <SidebarContainer>
            <h2>Explore</h2>

            <div className="categoryList">
                <div className="category">
                    <img src={newInIcon} alt="New In" />
                    <a href="/">New In</a>
                </div>

                <div className="category">
                    <img src={clothing} alt="Clothing" />
                    <a href="/">Clothing</a>
                </div>

                <div className="category">
                    <img src={shoes} alt="Shoes" />
                    <a href="/">Shoes</a>
                </div>

                <div className="category">
                    <img src={accessories} alt="Accessories" />
                    <a href="/">Accessories</a>
                </div>

                <div className="category">
                    <img src={activewear} alt="Activewear" />
                    <a href="/">Activewear</a>
                </div>

                <div className="category">
                    <img src={giftsLiving} alt="Gifts & Living" />
                    <a href="/">Gifts & Living</a>
                </div>

                <div className="category">
                    <img src={inspiration} alt="Inspiration" />
                    <a href="/">Inspiration</a>
                </div>
            </div>
        </SidebarContainer>
    )
}
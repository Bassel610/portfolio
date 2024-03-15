import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import H1Com from "./H1Com";

function Footer () {
    return (
        <>
            <div className="Footer">
                <H1Com  
                FirTx="Contact"
                ScoTx="Me"
                />
            <div className="FooterIcons">
                <FaFacebook className="Icon" />
                <FaInstagram className="Icon" />
                <FaWhatsapp className="Icon" />
                <FaYoutube className="Icon"  />
                <FaGithub  className="Icon"/>
            </div>
            </div>
        </>
    )
}
export default Footer;
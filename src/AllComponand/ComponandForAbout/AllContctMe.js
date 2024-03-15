import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function AllContctMe () {
    let Style = {
        fontSize: "37px"
    }
    return (
        <>
        <div className="AllContcMe">
            <div className="SocialMedia">
                <div className="IcoContactMe">
                    <FaFacebook className="Icon" style={Style}/>
                </div>
                <div className="TextContactMe ">
                facebook
                </div>
                {/* <div className="LinkContactMe">
                <a href="url" className="colorWhi">link text</a>
                </div> */}
            </div>
            <div className="SocialMedia">
            <div className="IcoContactMe">
                <FaInstagram className="Icon" style={Style}/>
            </div>
                <div className="TextContactMe">
                instagram
                </div>
                {/* <div className="LinkContactMe">
                <a href="url" className="colorWhi">link text</a>
                </div> */}
            </div>
            <div className="SocialMedia">
            <div className="IcoContactMe">
                <FaWhatsapp className="Icon" style={Style}/>
            </div>
                <div className="TextContactMe">
                WhatsApp
                </div>
                {/* <div className="LinkContactMe">
                <a href="url" className="colorWhi">link text</a>
                </div> */}
            </div>
            <div className="SocialMedia">
            <div className="IcoContactMe">
                <FaYoutube className="Icon"style={Style} />
            </div>
                <div className="TextContactMe">
                youtube
                </div>
                {/* <div className="LinkContactMe">
                <a href="url" className="colorWhi">link text</a>
                </div> */}
            </div>
            <div className="SocialMedia">
            <div className="IcoContactMe">
                <FaGithub  className="Icon" style={Style}/>
            </div>
                <div className="TextContactMe">
                github
                </div>
                {/* <div className="LinkContactMe">
                <a href="url" className="colorWhi">link text</a>
                </div> */}
            </div>
            <div className="SocialMedia">
            <div className="IcoContactMe">
                <FaGithub  className="Icon" style={Style}/>
            </div>
                <div className="TextContactMe">
                linkedin
                </div>
                {/* <div className="LinkContactMe">
                <a href="url" className="colorWhi">link text</a>
                </div> */}
            </div>
        </div>
        </>
    )
}
export default AllContctMe 
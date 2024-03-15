import H1Com from "../../AllComponand/H1Com";

function AboutUs() {
    let StyleForAbotUs = {
        position : "relative",
        top: "80px"
    }
    return(
        <>
        <div className="AboutUsSection">
            <H1Com 
                FirTx = "About"
                ScoTx = "Me"
            />
        <div className="TextAndImagAbout" style={StyleForAbotUs}>
            <div className="TextAbout">
                <span className="TheText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru</span>
            </div>
            {/* <div className="TheImage">
                <div className="ImgAbout"> Image</div>
            </div> */}
        </div>
        </div>
        </>
    )
}
export default AboutUs;
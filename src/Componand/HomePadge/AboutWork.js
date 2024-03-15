import Main1 from "../../Images/AboutImges/Main1.jpg" ;
import Main6 from "../../Images/AboutImges/Main6.jpg"
import Main7 from "../../Images/AboutImges/Main7.jpg"
import Main8 from "../../Images/AboutImges/Main8.jpg"
import Mai11 from "../../Images/AboutImges/Main11.jpg"
import H1Com from "../../AllComponand/H1Com";


function AboutWork () {
    return (
        <>
        <div className="AboutWorkSection">
            <H1Com 
            FirTx = "About"
            ScoTx = "Our Work"
            />
        <div className="ImgesForAbout">
            <img className="IMG1 BorderAboImg" src={Main1} alt="1"/>
            <img className="IMG2 BorderAboImg" src={Main6} alt="2"/>
            <img className="IMG3 BorderAboImg" src={Main7} alt="3"/>
            <img className="IMG4 BorderAboImg" src={Main8} alt="4"/>
            <img className="IMG5 BorderAboImg" src={Mai11} alt="5"/>
        </div>
        </div>
        </>
    )
}
export default AboutWork;
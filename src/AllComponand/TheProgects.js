import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
function TheProgect () {

    let [projectDeti, setprojectDeti] = useState({})
    let parms = useParams()
    let Api1 = "https://bes0610.github.io/AllProjectsPortfolio";
    let api2 = ".json/ProjectsProtf.json"
    
    // "https://bes0610.github.io/AllProjectsPortfolio-11.json/ProjectsProtf.json"

    let getAllProject = () => {
        fetch(`${Api1}-${parms.ProjectId}${api2}`)
        .then((res) => res.json())
        .then((projectDeti) => {
            console.log(projectDeti);
            setprojectDeti(projectDeti)
        });
    };

    useEffect(() => {
        getAllProject()
    }, [])

    let [AllImgesForProject, setAllImgesForProject] = useState([])
        // [
        //     {
        //         "id":"1",
        //         AllSrc : 
        //                 [
        //                     {
        //                         "src": "https://bes0610.github.io/imPortofilo2/Main2.jpg"
        //                     },
        //                     {
        //                         "src": "https://bes0610.github.io/imPortofilo3/Main3.jpg"
        //                     },
        //                     {
        //                         "src": "https://bes0610.github.io/imPortofilo4/Main4.jpg"
        //                     },
        //                     {
        //                         "src": "https://bes0610.github.io/imPortofilo6/Main6.jpg"
        //                     }
        //                 ]
        //     }
        // ]

        let Apiimg1= "https://bes0610.github.io/AllProjectIMG"; 
        let ApiImg2= ".json/AllProjectDetil.json"; 

        // "https://bes0610.github.io/AllProjectIMG-11.json/AllProjectDetil.json"

    let getAllImges = () => {
        fetch(`${Apiimg1}-${parms.ProjectId}${ApiImg2}`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            setAllImgesForProject(res)
        }); 
    };

    useEffect(() => {
        getAllImges()
    }, [])


    let [toggleImeg, settoggleImeg] = useState(false);
    let toggleOverlayFun = () => {
        toggleImeg ? settoggleImeg(false) : settoggleImeg(true)
    }
    let toggImageFun1 = (index) =>  {
        settoggleImeg((prev) => {
            return prev === index ? false : index
        });
        console.log("clicked", index )
    }
    return (
        <>
        <div className={toggleImeg? "OverLine" : "OverLine DisplayNon"}>
        </div>
            <div className="TheProject">
                <div className="TheDetils">
                    <img src={projectDeti.src} alt="Detils" className="Imageproject" />
                    <div className="Titleproject"> {projectDeti.title} </div>
                </div>
                    <div className="AllImgesProject">
                            <FaWindowClose 
                            className={toggleImeg ? "BTNCLOSE" : "BTNCLOSEnone"}  
                            onClick={toggleOverlayFun}
                            />
                    {AllImgesForProject.map((AllImgesForProject ) => {
                            return (
                                <>
                                    {AllImgesForProject.AllSrc.map((TheImage, index) => {
                                        return (
                                            <>
                                                <img  src={TheImage.src} alt="aa"  
                                                className={toggleImeg === index ? "ImagesDetilsOverLay" : " ImagesDetils"}
                                                onClick={() => toggImageFun1(index)}
                                                />
                                            </>
                                        )
                                    })}
                                </>
                            )
                        })}
                    </div>
            </div>
        </>
    )
}
export default TheProgect;
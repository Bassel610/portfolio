import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function AllProjects () {

    let [AllProjectsstate, setAllProjectsstate] = useState([]);
    let getAllProjectsFun = () => {
        fetch(('https://bes0610.github.io/AllProjectsPortofilo.json/ProhectsPortf.json'))
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            setAllProjectsstate(res)
        });
    };

    useEffect(() => {
        getAllProjectsFun()
    }, [])

    return (
        <>
        <div className="AllCards"> 

            {AllProjectsstate.map((AllProjects) => {
                return (
                <>
                    <div className="AllProject">
                        <div className="Cards">
                            <img src={AllProjects.src} alt="Img" className="ImageForCards" />
                            <div className="TitleForCards">{AllProjects.title}</div>
                            <Link to={`/Lena/${AllProjects.id}`}>
                                <div className="ViewForCards">View</div>
                            </Link>
                        </div>
                    </div>
                </>
                )
            })}

        </div>
        </>
    )
}
export default AllProjects;
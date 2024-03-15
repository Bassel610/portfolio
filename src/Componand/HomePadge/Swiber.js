import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useEffect, useState} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
SwiperCore.use([Pagination, Navigation])
function Swiber () {

    let [swiperstate, setswiperstate] = useState([]);
    let getProjectswiperFun = () => {
        fetch(('https://bes0610.github.io/AllProjectsPortofilo.json/ProhectsPortf.json'))
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            setswiperstate(res)
        });
    };

    useEffect(() => {
        getProjectswiperFun()
    }, [])


    return (
        <div className="Swiber" >
            <Swiper
                className="SWIPER"
                spaceBetween={50}
                slidesPerView={6}
                navigation
                >
            <div className="AllCard">
            {swiperstate.map((swiperstate) =>{
        return (
                <SwiperSlide className="Card" key={swiperstate.id}>
                <div className="DetiCard">
                    <img className="ImgCard" src={swiperstate.src} alt="a" />
                    <p className="P1Crd"> {swiperstate.title}</p>
                    <Link to={`/Lena/${swiperstate.id}`}>
                    <p className="P1Crd"> viwe</p>
                    </Link>
                </div>
                </SwiperSlide>
        )
    })}
            </div>
            </Swiper>
        </div>
    )
}
export default Swiber;
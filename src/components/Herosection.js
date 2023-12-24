import herosection1 from '../images/herosection1.jpg'
import { HerosectionData } from './WebsiteData';



function Herosection() {
    return (
        <div className="Herosection container-  ">

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={herosection1} className="d-block w-100" alt="..." />
                    </div>

                    {HerosectionData.map((HerosectionDataImported, index) => {
                        return (

                            <div className="carousel-item">
                                <img src={HerosectionDataImported.img} className="d-block w-100" alt="..." />
                            </div>
                        )
                    })}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
}

export default Herosection;

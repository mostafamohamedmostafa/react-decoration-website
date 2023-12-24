import { ServicessectionData } from "./WebsiteData";

function Servicessection() {
  return (
    <section >   
       <div className="Servicessection container-fluid">
<h3>Service</h3>

      <div className="row row-cols-1 row-cols-md-4">
        {ServicessectionData.map((ServicessectionDataImported, index) => {
          return (
            <div className="col">
              <div className="card h-100">
                <img src={ServicessectionDataImported.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{ServicessectionDataImported.name} </h5>
                </div>

              </div>
            </div>
          )
        })}



      </div>


    </div></section>


  );
}

export default Servicessection;

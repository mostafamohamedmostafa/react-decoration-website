import { ServicessetpssectionData } from "./WebsiteData";

function Servicessetpssection() {
  return (
    <section  >
      <div className="Servicessetpssection container-fluid">

<h3> Services Steps</h3>

      <div className="row row-cols-1 row-cols-md-3">
        {ServicessetpssectionData.map((ServicessetpssectionDataImported, index) => {
          return (
            <div className="col">
              <div className="card h-100">
                <img src={ServicessetpssectionDataImported.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{ServicessetpssectionDataImported.name} </h5>
                </div>

              </div>
            </div>
          )
        })}



      </div>
      </div>
    </section>

  );
}

export default Servicessetpssection;

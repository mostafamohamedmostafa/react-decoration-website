import { CustomersectionData } from "./WebsiteData";

function Customersection() {
  return (
    <section  >
      <div className="Customersection container-fluid">

<h3> Services </h3>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {CustomersectionData.map((CustomersectionDataImported, index) => {
          return (
            <div className="col" key={index}>
              <div className="card h-100">
                <img src={CustomersectionDataImported.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{CustomersectionDataImported.name} </h5>
                  <p className="card-title">{CustomersectionDataImported.opinion} </p>

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

export default Customersection;

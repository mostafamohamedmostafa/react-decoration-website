import { HistorysectionData } from "./WebsiteData";

function Historysection() {
  return (
    <section>    
      <div className="Historysection container-fluid">
<h3>History</h3>
      <div className="card-group">


        {HistorysectionData.map((HistorysectionDataImported, index) => {
          return (
            <div className="card" key={index}>
              <img src={HistorysectionDataImported.img} className="card-img-top  " alt="..." />
              <div className="card-body">
                <p className="card-title">{HistorysectionDataImported.name} </p>
              </div>

            </div>
          )
        })}

      </div>

    </div></section>
  );
}

export default Historysection;

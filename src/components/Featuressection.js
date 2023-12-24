import featuresimg from '../images/herosection3.jpg'
import { FeaturessectionData } from './WebsiteData';


function Featuressection() {
  return (
    <section >
      <div className="Featuressection container-fluid">
        <h3>Our Features</h3>
        <div className="card-group">
          <div className="card">
            <img src={featuresimg} className="card-img-top skewed" alt="..." />

          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Our Features</h5>
              <ul class="list-group list-group-flush">

                {FeaturessectionData.map((FeaturessectionDataImported, index) => {
                  return (

                    <li class="list-group-item" key={index}> {FeaturessectionDataImported} </li>



                  )
                })}

              </ul>

            </div>
          </div>

        </div>

      </div>
    </section>



  );
}

export default Featuressection;

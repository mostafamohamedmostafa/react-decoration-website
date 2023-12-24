import { WhyussectionData } from "./WebsiteData";

function Whyussection() {
  return (
    <section >
      <div className="Whyussection container-fluid">
        <h2> Why US</h2>

        <div className="row row-cols-1 row-cols-md-3">


          {WhyussectionData.map((WhyussectionDataImported, index) => {
            return (

              <div className="col" key={index}>
                <div className="card  glass-effect " data-aos="zoom-in" data-aos-duration="2000">
                  <img src={WhyussectionDataImported.img} className="card-img-top " alt="..." />
                  <div className="card-body">

                    <figure>
                      <blockquote class="blockquote">
                        <p>{WhyussectionDataImported.name}.</p>

                      </blockquote>

                    </figure>


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

export default Whyussection;

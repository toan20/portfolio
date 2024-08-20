import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="row mt-6">
          <p className="title mb-5">Experience</p>

          <div className="col-md-6">
            <div style={{ borderRadius: "15px", border: "1px solid #ddd" }}>
              <p
                style={{ fontWeight: "bold", fontSize: "30px" }}
                className="d-flex align-items-center justify-content-center"
              >
                Frontend Development
              </p>
              <div className="row mt-5 mb-5 ms-5">
                <div className="col-md-6 d-flex align-items-center ">
                  <div>
                    <FontAwesomeIcon
                      icon={faHtml5}
                      size="2x"
                      style={{ marginRight: "20px" }}
                    />
                    <p className="title-language"> HTML</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center ">
                  <div>
                    <FontAwesomeIcon
                      icon={faCss3Alt}
                      size="2x"
                      style={{ marginRight: "20px" }}
                    />
                    <p className="title-language"> CSS</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center ">
                  <div>
                    <FontAwesomeIcon
                      icon={faBootstrap}
                      size="2x"
                      style={{ marginRight: "20px" }}
                    />
                    <p className="title-language"> Bootstrap</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center ">
                  <div>
                    <FontAwesomeIcon
                      icon={faJs}
                      size="2x"
                      style={{ marginRight: "20px" }}
                    />
                    <p className="title-language">JavaScript</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center ">
                  <div>
                    <FontAwesomeIcon
                      icon={faReact}
                      size="2x"
                      style={{ marginRight: "20px" }}
                    />
                    <p className="title-language">ReactJS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              style={{
                height: "100%",
                borderRadius: "15px",
                border: "1px solid #ddd",
              }}
            >
              <p
                style={{ fontWeight: "bold", fontSize: "30px" }}
                className="d-flex align-items-center justify-content-center"
              >
                Backend Development
              </p>
              <div className="row mt-5 mb-5 ms-5">
                <div className="col-md-6 d-flex align-items-center ">
                  <div>
                    <FontAwesomeIcon
                      icon={faNode}
                      size="2x"
                      style={{ marginRight: "20px" }}
                    />
                    <p className="title-language">
                      {" "}
                      NodeJS &lang; ExpressJs &rang;
                    </p>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center ">
                  <div>
                    <FontAwesomeIcon
                      icon={faJs}
                      size="2x"
                      style={{ marginRight: "20px" }}
                    />
                    <p className="title-language">JavaScript</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center ">
                  <div>
                    <FontAwesomeIcon
                      icon={faDatabase}
                      size="2x"
                      style={{ marginRight: "20px" }}
                    />
                    <p className="title-language">MongoDB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
function Contract() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row mt-6">
          <p className="title mb-5">Contract</p>
          <div className="col-md-12 d-flex align-items-center justify-content-center">
            <div>
              <p>
                <FontAwesomeIcon icon={faPhone} /> 0582489368
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                nguyenhuutoan20201@gmail.com
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <a
                  style={{ fontSize: "30px" }}
                  href="https://www.facebook.com/toan.h.nguyen.90281"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contract;

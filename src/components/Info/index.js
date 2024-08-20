import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import img from "./cv.jpg";
function Info() {
  return (
    <div className="container">
      <div className="row mt-6">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            style={{ width: "300px", height: "300px" }}
            className="info-img rounded-circle"
            src={img}
            alt="Detail"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div>
            <h1>Nguyễn Hữu Toàn</h1>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "larger",
              }}
            >
              Web Developer
            </span>
            <div className="info-btn">
              <a href="https://www.topcv.vn/xem-cv/AgBXAA8PVVxQBlcOAlpXAQRQAg5fAwFWA1dSVQ3410">
                <Button variant="outline-secondary btnDownload">
                  Download CV
                </Button>
              </a>
              <Button variant="outline-secondary">Contract Info</Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a href="https://github.com/toan20">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  style={{ marginTop: "20px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import img from "./290919408_1436560286784745_5736718566552135448_n.jpg";
function AboutMe() {
  return (
    <section id="about">
      <div className="container">
        <div className="row mt-6">
          <p className="title mb-5">About Me</p>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "15px",
                border: "1px solid #ddd",
              }}
              className="info-img "
              src={img}
              alt="Detail"
            />
          </div>
          <div className="col-md-8 d-flex align-items-center justify-content-center">
            <div className="education">
              <FontAwesomeIcon
                icon={faSchool}
                size="2x"
                style={{ marginTop: "20px" }}
              />
              <p style={{ fontWeight: "bold", fontSize: "larger" }}>
                Education
              </p>
              <p>Duy Tan University</p>
              <p>Major : Software Technology</p>
              <p>GPA : 2.9</p>
            </div>
            <div className="row mt-5">
              <p className="text">
                <em>
                  I'm person who wants to learn and improve my knowledge to
                  develop myself more and more who can work well in a team and
                  independently <br /> Currently, I aspire to become a Web Front
                  End Developer, with the long-term goal of advancing to a
                  Fullstack Developer.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

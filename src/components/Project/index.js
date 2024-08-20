import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import imgMovie from "./screencapture-toan20-github-io-movie-2024-08-20-12_40_28.png";
import imgGamePoint from "./screencapture-toan20-github-io-GamePoint-2024-08-20-12_45_51.png";
import imgEcono from "./300f4886-d243-4c03-a005-d64eb4ca41d5.png";
function Project() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row mt-6">
          <p className="title mb-5">Project</p>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imgGamePoint} />
              <Card.Body>
                <Card.Title>Game Point</Card.Title>
                <Card.Text>
                  Using React to work with algorithms and build user interfaces.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>HTML , CSS , ReactJS</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://toan20.github.io/GamePoint/">
                  Link Demo
                </Card.Link>
                <Card.Link href="https://github.com/toan20/GamePoint">
                  Link Github
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imgMovie} />
              <Card.Body>
                <Card.Title>Website Moive</Card.Title>
                <Card.Text>
                  Using React to work with APIs and build user interfaces
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>HTML , CSS , Boostrap , ReactJS</ListGroup.Item>

                <ListGroup.Item>RESTful API : GET </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://toan20.github.io/movie/">
                  Link Demo
                </Card.Link>
                <Card.Link href="https://github.com/toan20/movie">
                  Link Github
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imgEcono} />
              <Card.Body>
                <Card.Title>Website Ecommerce</Card.Title>
                <Card.Text>
                  Build a sales website and a management page.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  HTML , CSS , Boostrap , JavaScript
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  NodeJS &lang; ExpressJs &rang; , MongoDB{" "}
                </ListGroup.Item>

                <ListGroup.Item>
                  RESTful API : GET , POST , PUT , DELETE{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  JWT (JSON Web Tokens): Authenticate and secure APIs using JWT,
                  manage user sessions with access token and refresh token.{" "}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://github.com/toan20/ecommerce">
                  Link Github
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

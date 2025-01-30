import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../../assets/person-on-computer.svg";

export const Home = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center"
      style={{ minHeight: "calc(100vh - 56px)" }}>
      <Row className="d-flex align-items-center align-middle">
        <Col className="pe-0" md={6}>
          <h1 className="display-6 fw-bold">Hi, I am Harleen</h1>
          <h1 className="display-6 fw-bold">Full Stack Developer</h1>
          <p>
            I am a Full-Stack Developer. Crafting seamless digital experiences,
            one line of code at a time!
          </p>
          <div>
            <Row xs="auto">
              <Col>
                <a href="https://www.linkedin.com/in/harleenk-sekhon/">
                  <FaLinkedin size={20} className="me-2" />
                </a>
              </Col>
              <Col>
                <a href="https://github.com/dev-harleen">
                  <FaGithub size={20} className="me-2" />
                </a>
              </Col>
            </Row>
          </div>
          <Button
            className="mt-4"
            onClick={() => console.log("Button clicked")}>
            Resume
          </Button>
        </Col>
        <Col className="px-0 text-md-end">
          <Image
            src={img}
            rounded
            style={{
              objectFit: "cover",
              objectPosition: "center",
              height: "350px",
              width: "400px",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

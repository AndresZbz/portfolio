import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";

import "./index.css";

const Main = () => {
  return (
    <>
      <div className="container-xl">
        <Container>
          <Row style={{ marginTop: "15%" }}>
            <Col
              sm={12}
              lg={6}
              className="d-flex align-items-center justify-content-center"
            >
              <Container>
                <div className="justify-content-center items-align-center ">
                  <h1 className="h1" style={{ fontSize: 50 }}>
                    Juan Bouza
                  </h1>
                  <p className="h4 text-secondary">
                    Frontend Web Developer & Game Dev hobbyist
                  </p>

                  <div className="d-flex gap-3 mt-3">
                    <Button
                      variant="dark"
                      className="btn text-white border-white hover-overlay"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="mx-2"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="24"
                        height="24"
                        strokeWidth="2"
                      >
                        {" "}
                        <path d="M8 9l3 3l-3 3"></path>{" "}
                        <path d="M13 15l3 0"></path>{" "}
                        <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>{" "}
                      </svg>
                      Github
                    </Button>
                  </div>
                </div>
              </Container>
            </Col>
            <Col sm={12} lg={6} className="text-center">
              fsdfds
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <About />
        </Container>
        <Container className="mt-5">
          <Skills />
        </Container>
        <Container className="mt-5">
          <Projects />
        </Container>
      </div>
    </>
  );
};

export default Main;

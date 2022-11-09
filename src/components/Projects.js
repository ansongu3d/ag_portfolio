import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import proj2Img1 from "../assets/img/project2-img1.png";
import proj2Img2 from "../assets/img/project2-img2.png";
import proj2Img3 from "../assets/img/project2-img3.png";
import proj2Img4 from "../assets/img/project2-img4.png";
import proj2Img5 from "../assets/img/project2-img5.png";
import proj2Img6 from "../assets/img/project2-img6.png";
import proj3Img1 from "../assets/img/project3-img1.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "Transformer Collection",
      description: "Design & Development",
      imgUrl: projImg1,
      clickLink: "https://rocky-headland-06164.herokuapp.com/",
    },
    {
      title: "Sydney Fishing Herald",
      description: "Design & Development",
      imgUrl: projImg2,
      clickLink: "https://fast-tor-14073.herokuapp.com/",
    },
    {
      title: "Trivia Lab",
      description: "Design & Development",
      imgUrl: projImg3,
      clickLink: "https://trivia-night01-app.herokuapp.com/",
    },
  ];
  const projects2 = [
    {
      title: "Puma 50 Yrs Window Display",
      description: "Industrial Design",
      imgUrl: proj2Img1,
    },
    {
      title: "Samsung JBHIFI Display",
      description: "Industrial Design",
      imgUrl: proj2Img2,
    },
    {
      title: "Helly Hansen Display",
      description: "Industrial Design",
      imgUrl: proj2Img3,
    },
    {
      title: "Kinder Xmas Tree Display",
      description: "Industrial Design",
      imgUrl: proj2Img4,
    },
    {
      title: "Kinder Train Display",
      description: "Industrial Design",
      imgUrl: proj2Img5,
    },
    {
      title: "Kinder Castle Display",
      description: "Industrial Design",
      imgUrl: proj2Img6,
    },
  ];
  const projects3 = [
    {
      title: "JS Wordle Game",
      description: "Game Development",
      imgUrl: proj3Img1,
      clickLink: "https://ansongu3d.github.io/wordler/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>My Recent Design & App Development!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Industrial Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Game Development</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};

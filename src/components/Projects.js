import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Nia Adventures Travel Agency",
      imgUrl: projImg1,
      URL:"https://niaadventuresk.onrender.com/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      URL:"https://niaadventuresk.onrender.com/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      URL:"https://niaadventuresk.onrender.com/"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                       <h2>Dear clients,</h2>
                       <p>I want to share the incredible journey of building Nia Adventure's travel agency website with you, as an inspiration to pursue your dreams. With unwavering passion and determination, we transformed an idea into a captivating online platform that connects souls with extraordinary destinations.</p>
                       <p> Amidst challenges and doubts, we persevered, believing in the power of travel to ignite the human spirit. We crafted an immersive experience, blending stunning visuals, seamless navigation, and personalized itineraries, ensuring unforgettable adventures for every traveler.</p>
                       <p>So, dear clients, let Nia Adventure be a beacon of hope, reminding you that with courage, creativity, and a dash of audacity, you too can turn your dreams into reality. Embrace the unknown, explore the uncharted, and let your spirit soar. Your next adventure awaits!</p>
                       <h2>Warm regards,</h2>
                       <h2>Brett Migwi</h2>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background showcase"></img>
    </section>
  )
}

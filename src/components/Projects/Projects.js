import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodapp from "../../Assets/Projects/foodapp.jpg";
import chatapp from "../../Assets/Projects/chatapp.jpg";
//import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodapp}
              isBlog={false}
              title="Multi Vendor Food App"
              description="A marketplace where vendors register, add firms & products, while customers browse and order food items without login."
              ghLink="https://github.com/sujaytumu/Yummy-Food-App"
              demoLink="https://yummy-food-app-customer-frontend.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Real Time Chat-App"
              description="A full-stack messaging platform enabling instant communication with online/offline status, theme toggle, and seamless chat experience."
              ghLink="https://github.com/sujaytumu/Chat-App"
              demoLink="https://chat-app-jjcg.onrender.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Real Time Chat-App"
              description="A full-stack messaging platform enabling instant communication with online/offline status, theme toggle, and seamless chat experience."
              ghLink="https://github.com/sujaytumu/Chat-App"
              demoLink="https://chat-app-jjcg.onrender.com/"
            />
          </Col> */}
      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, clickLink, gitLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>
            <a className="project-link" href={clickLink}>
              {title}
            </a>
          </h4>
          <span><a className="project-link" href={gitLink}>{description}</a></span>
        </div>
      </div>
    </Col>
  );
};

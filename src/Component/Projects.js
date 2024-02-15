import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import pizza from "../assets/img/pizza.jpg"
import urlShort from "../assets/img/urlShortner.jpeg"
import projImg2 from "../assets/img/project-img2.png";
import resume from "../assets/img/resume.jpg";
import book from "../assets/img/books.webp";
import booksSd from "../assets/img/booksSd.jpeg"
import stock from "../assets/img/stocks.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const WebProjects = [
    {
      title: "Shoe Store",
      description: "Design & Development",
      imgUrl: projImg1,
      link:"https://a3s0h.github.io/shoe_com/shoe_com/index.html",
    },
    {
       title: "Chat App",
       description : "Web Dev",
       imgUrl: projImg2,
       link:"https://github.com/a3s0h/chatApp",
    },
    {
      title: "Weather App",
      description : "Web Dev",
      imgUrl: projImg2,
      link:"https://a3s0h.github.io/shoe_com/shoe_com/index.html",
   },
  ];

  const SystemProjects = [
    {
      title: "Pizza Outlet",
      description: "System Design",
      imgUrl: pizza,
      link:"https://github.com/a3s0h/systemDesigns/blob/main/h/pizzaShop.cpp",
    },
    {
       title: "Url Shortner",
       description : "System Design",
       imgUrl: urlShort,
       link:"https://github.com/a3s0h/systemDesigns/blob/main/h/url/main.cpp",
    },
    {
      title: "Book Shop",
      description : "System Design",
      imgUrl: booksSd,
      link:"https://github.com/a3s0h/BookStore/blob/main/books.cpp",
   },
  ];

  const MachineLearningProjects = [
    {
      title: "Book recommendation system",
      description: "a book recommendation system using collaborative filtering nad flask for frontend",
      imgUrl: book,
      link:"https://github.com/a3s0h/bookReccomendtionSytem",
    },
    {
       title: "Stock Price Prediction",
       description : "Get your stocks predicted with LSTM model",
       imgUrl: stock,
       link:"https://github.com/a3s0h/stock_price_predictions/blob/main/StockPricePredictions.ipynb",
    },
    {
      title: "Resume Parser",
      description : "Scan your resume to get your category wise skills",
      imgUrl: resume,
      link:"https://github.com/a3s0h/resumeParse",
   },
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
                <p>Here are some of my projects that i've made thru my learing journey . For more projects plz visite my <a href ="https://github.com/a3s0h" target ="_blank">GitHub</a> account</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">System Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">ML/AI</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          WebProjects.map((project, index) => {
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
                    <Row>
                        {
                          SystemProjects.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          MachineLearningProjects.map((project, index) => {
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
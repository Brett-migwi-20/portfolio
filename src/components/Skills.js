import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>As a front-end web developer, I possess a strong skill set in HTML, CSS, and JavaScript. With expertise in responsive design and user interface development, I am capable of creating visually appealing and interactive websites that provide seamless user experiences.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="RectJs" />
                                <h5>RectJs</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="NodeJs" />
                                <h5>NodeJs</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Webpack" />
                                <h5>Webpack</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="SCSS" />
                                <h5>SCSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Babel" />
                                <h5>Babel</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Mysql" />
                                <h5>Mysql</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

import "./About.css";
import Award from "../../img/award.png";
import One from "../../img/78.png";
import two from "../../img/03.png";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg">
        <img src={One} alt="" className="a-img"/>
        </div>
        <div className="a-card">
          <img
            src={two}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
          
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        In today’s world everything runs through the internet, In order
        to promote a business it is important to have a smart website with unique features for every purpose.
        </p>
        <p className="a-desc">
        I have a background in design. 
        During the past 10 years I have been involved in graphic,product and interior design.
        Today I'm a junior web designer and developer with rich technical knowledge.
        
        
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Bachelor's degree and training course </h4>
            <p className="a-award-desc">
            Graduated with a bachelor's degree in Interior Design ,Also gained experience for Website development.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default About;

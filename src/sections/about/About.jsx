import AboutImage from "../../assets/aboutimage5.jpg";
import CV1 from "../../assets/AB_CV_Full.pdf";
import CV2 from "../../assets/AB_CV_Lite.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <h2> ♊ 🎬 💊 📺 📷 📚 🎮 📻 🛹 🏕️ 🐕 </h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            My name is Andres Bolivar and I was born under the Gemini moon in
            Queens, NY. I have a Bachelors degree in Film Studies, a Masters in
            Public Health, and a burning passion and knowledge of all things
            technology. I'm a creative minded software engineer with a drive for
            developing efficient projects that integrate seamlessly into a
            variety of platforms and operations. I am intensely curious about
            how things work and have found that software development perfectly
            synthesizes the unique skill-set I’ve cultivated throughout my
            professional career.
          </p>
          <p>
            I also have an array of interests that include:<br></br>
            Film and Television, Photography, Reading (actual books, comics
            books, & manga), Anime, Video Games, Music, Skateboarding, Hiking +
            Camping, and most importantly rescuing and fostering dogs like my
            baby Bucky (pictured all throughout my instagram)
          </p>
          <a href={CV1} download className="btn primary">
            Download Resume (Full)
            <HiDownload />
          </a>
          <a href={CV2} download className="btn primary">
            Download Resume (Lite)
            <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

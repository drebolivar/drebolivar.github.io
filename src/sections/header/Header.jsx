import { useEffect } from 'react'
import HeaderImage from '../../assets/header1.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">Andres 'Dre' Bolivar (@dredose)</h3>
        <h4 data-aos="fade-up">Full-Stack Software Engineer</h4>
        <p data-aos="fade-up">
          Welcome! Make yourself comfortable, feel free to change the aesthetic
          of this site with the paint can above, and let's get to know each
          other a little better.
        </p>
        {/* <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Contact
          </a>
          <a href="#portfolio" className="btn light">
            Portfolio
          </a>
        </div> */}
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      return isDarkTheme ? (
        <>
          <Navbar />
          <div className="darkContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
              className="about"
            />
            <h1 className="darkHead">About</h1>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="lightContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
              className="about"
            />
            <h1 className="lightHead">About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About

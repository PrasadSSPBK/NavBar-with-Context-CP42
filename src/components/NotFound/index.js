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
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="about"
              className="home"
            />
            <h1 className="darkHead">Lost Your Way?</h1>
            <p className="darkPara">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="lightContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="home"
            />
            <h1 className="lightHead">Lost Your Way?</h1>
            <p className="lightPara">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About

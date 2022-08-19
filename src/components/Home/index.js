import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      return isDarkTheme ? (
        <>
          <Navbar />
          <div className="darkContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
              className="home"
            />
            <h1 className="darkHead">Home</h1>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="lightContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
              className="home"
            />
            <h1 className="lightHead">Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home

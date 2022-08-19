import {Link, withRouter} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      console.log(isDarkTheme)

      const onClickButton = () => {
        toggleTheme()
      }
      return isDarkTheme ? (
        <div className="darkNavContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            alt="website logo"
            className="homeNav"
          />
          <ul className="centerNav">
            <Link to="/" className="link">
              <li className="darkNavHead">Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className="darkNavHead">About</li>
            </Link>
          </ul>
          <button
            testid="theme"
            type="button"
            className="btn"
            onClick={onClickButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="theme"
              className="darkBtnNav"
            />
          </button>
        </div>
      ) : (
        <div className="lightNavContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            alt="website logo"
            className="homeNav"
          />
          <ul className="centerNav">
            <Link to="/" className="link">
              <li className="lightNavHead">Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className="lightNavHead">About</li>
            </Link>
          </ul>
          <button
            testid="theme"
            type="button"
            className="btn"
            onClick={onClickButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
              className="lightBtnNav"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Navbar)

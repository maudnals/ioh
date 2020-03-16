import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    className="header"
    style={{
      marginBottom: `1rem`,
    }}
  >
    <div
      className="wrapped"
      style={{
        padding: `1rem`,
      }}
    >
      <h4 style={{ margin: 0, display: "flex", alignItems: "center" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          > {siteTitle}
        </Link>
        <div className="header-cursor"></div>
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

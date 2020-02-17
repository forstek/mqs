import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'

import mqs from '../images/mqs.webp'

const Header = ({ siteTitle, siteSubtitle }) => (
  <header
    style={{
      background: `firebrick`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', marginRight: '24px', border: '2px solid white' }}>
            <img src={mqs} />
          </div>
          <div style={{flex: '1'}}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
            <div style={{
              color: `white`,
              fontSize: '16px',
              marginTop: '8px'
            }}>
            {siteSubtitle}
            <div style={{ display: 'flex', fontSize: '20px', marginTop: '8px', verticalAlign: 'center' }}>
              <a  style={{ color: 'white', marginRight: '8px' }} 
                href="https://goo.gl/maps/j8zqri9L2kC4YBwp9"
                target='_blank'
                rel='noreferrer noopener'
              >
                <FaMapMarkerAlt/>
              </a>
              <a  style={{ color: 'white' }} 
                href="https://www.instagram.com/qolbun.saliim/"
                target='_blank'
                rel='noreferrer noopener'
              >
                <FaInstagram/>
              </a>
            </div>
            </div>
          </div>
        </div>
      </h1>
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

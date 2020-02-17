import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { 
  FaEnvelope,
  FaInstagram, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaWhatsapp 
} from 'react-icons/fa'

import mqs from '../images/mqs.webp'
import contacts from '../constants/contacts' 

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
          <div style={{ width: '116px', height: '116px', borderRadius: '50%', overflow: 'hidden', marginRight: '24px', border: '2px solid white' }}>
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
            <div style={{ display: 'flex', fontSize: '20px', marginTop: '20px', verticalAlign: 'center' }}>
              <a  style={{ color: 'white', marginRight: '16px' }} 
                href={contacts.gmaps}
                target='_blank'
                rel='noreferrer noopener'
              >
                <FaMapMarkerAlt/>
              </a>
              <a  style={{ color: 'white', marginRight: '16px' }} 
                href={`mailto: ${contacts.email}`}
              >
                <FaEnvelope/>
              </a>
              <a  style={{ color: 'white', marginRight: '16px' }} 
                href={`tel:${contacts.phone}`}
              >
                <FaPhone/>
              </a>
              <a  style={{ color: 'white', marginRight: '16px' }} 
                href={`https://wa.me/${contacts.wa}?text=${contacts.waDefaultText}`}
                target='_blank'
                rel='noreferrer noopener'
              >
                <FaWhatsapp/>
              </a>
              <a  style={{ color: 'white', marginRight: '16px' }} 
                href={contacts.ig}
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

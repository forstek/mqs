/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'
import { Menu, SubMenu, Icon } from 'antd';
import { navigate } from '@reach/router'

import Header from "./header"
import "./layout.css"
import favicon from '../images/favicon.png'

import config from '../../gatsby-config.js'
const { siteMetadata } = config

class Layout extends React.Component {
  state = {
    current: null,
  }

  componentDidMount () {
    const currentLocation = window.location.pathname.substr(1)
    console.log('currentLocation: ', currentLocation)

    this.setState({
      current: currentLocation || 'home'
    })
  }

  handleClick = e => {
    switch (e.key) {
      case 'home': {
        navigate('/')
        break
      }

      case 'transfer': {
        navigate('/transfer')
        break
      }

      case 'report': {
        navigate('/report')
        break
      }

      case 'docs': {
        navigate('/docs')
        break
      }

      default:
    }
  }

  render () {
    const { children } = this.props

    return (
      <>
        {/*<Helmet>
          <link rel="icon" href={favicon} />
        </Helmet>*/}
        <Header siteTitle={siteMetadata.title} siteSubtitle={siteMetadata.subtitle}/>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="home">
            <Icon type="home" />
            Home
          </Menu.Item>
          <Menu.Item key="transfer">
            <Icon type="swap" />
            Waqaf
          </Menu.Item>
          <Menu.Item key="report">
            <Icon type="project" />
            Progress
          </Menu.Item>
          <Menu.Item key="docs">
            <Icon type="file-text" />
            Dokumen
          </Menu.Item>
        </Menu>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main style={{ minHeight: '45vh', fontSize: '16px' }}>{children}</main>
          <footer style={{ marginTop: '100px', fontSize: '11px', textAlign: 'center', color: 'lightGrey' }}>
            Built with 🧡 by
            {` `}
            <a href="https://forstek.co" style={{color: '#FC6F20'}}>forstek</a>
          </footer>
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

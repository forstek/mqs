import React from "react"
import { Icon } from 'antd'

import Layout from "../components/layout"
import SEO from "../components/seo"

const DocsPage = () => (
  <Layout>
    <SEO title="Dokumen" />
    <h1 style={{ textAlign: 'center', margin: '60px auto' }}>Dokumen</h1>
    <p style={{ marginBottom: '0.5rem' }}>
    	<span style={{marginRight: '8px'}}><Icon type="link" /></span>
      <a href="https://drive.google.com/file/d/1LXtpKEg_5ZC205GYbINfwsWh_ExiVxvS/view?usp=sharing" 
        target="_blank" 
        rel="noreferer noopener"
      >
        Surat Keputusan Panitia Pengembangan Masjid
      </a>
    </p>
    <p style={{ marginBottom: '0.5rem' }}>
    	<span style={{marginRight: '8px'}}><Icon type="link" /></span>
      <a href="https://drive.google.com/file/d/1wO_RjGrWnPzLVR9_m5MpgysPXmzeAs6M/view?usp=sharing" 
        target="_blank" 
        rel="noreferer noopener"
      >
        Proposal Pengembangan Masjid
      </a>
    </p>
    <p style={{ marginBottom: '0.5rem' }}>
    	<span style={{marginRight: '8px'}}><Icon type="link" /></span>
      <a href="https://drive.google.com/drive/folders/1tqUeZ5de4_i3o6PwElfR7qpLR5MIAGXy?usp=sharing" 
        target="_blank" 
        rel="noreferer noopener"
      >
        Laporan Pengembangan Masjid
      </a>
    </p>
  </Layout>
)

export default DocsPage

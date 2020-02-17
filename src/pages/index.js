import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import img1 from "../images/pengembangan.webp"
import SEO from "../components/seo"

const salam = 'السلام عليكم ورحمة الله وبركاته'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ textAlign: 'center', margin: '60px auto' }}>Pengembangan Masjid Qolbun Saliim</h1>
    <div style={{ textAlign: 'center', paddingRight: '24px' }}>
      <p style={{textAlign: 'center', fontSize: '1.5rem'}}>{salam}</p>
      <p>Sehubungan dengan akan dilaksanakannya pengembangan pembangunan Masjid Qolbun Saliim Topindo Buah Batu Residence Bandung, kami dari DKM Qolbun Saliim ingin memberitahukan kepada jamaah bahwa mulai Kamis 13 Februari 2020 akan dimulai aktivitas pembangunan masjid. </p>
      <div style={{ marginBottom: `1.45rem` }}>
        <img src={img1} width={600} />
      </div>
      <p>Untuk itu kami memohon maaf jika selama proses pembangunan akan mengganggu kenyamanan jamaah dalam beribadah. Dan kami juga memohon do’a dan support dari jamaah sekalian, semoga Allah mudahkan ikhtiar kita dalam memakmurkan masjid kita tercinta. Aamiin. </p>
      <p>Atas perhatiannya kami mengucapkan terima kasih, jazaakumullaahu khairan. </p>
      <hr/>
      <p>Dokumen: </p>
      <p style={{ marginBottom: '0.5rem' }}>
        <a href="https://drive.google.com/file/d/1LXtpKEg_5ZC205GYbINfwsWh_ExiVxvS/view?usp=sharing" 
          target="_blank" 
          rel="noreferer noopener"
        >
          Surat Keputusan Panitia Pengembangan Masjid
        </a>
      </p>
      <p style={{ marginBottom: '0.5rem' }}>
        <a href="https://drive.google.com/file/d/1wO_RjGrWnPzLVR9_m5MpgysPXmzeAs6M/view?usp=sharing" 
          target="_blank" 
          rel="noreferer noopener"
        >
          Proposal Pengembangan Masjid
        </a>
      </p>
      <p style={{ marginBottom: '0.5rem' }}>
        <a href="https://drive.google.com/drive/folders/1tqUeZ5de4_i3o6PwElfR7qpLR5MIAGXy?usp=sharing" 
          target="_blank" 
          rel="noreferer noopener"
        >
          Laporan Pengembangan Masjid
        </a>
      </p>
    </div>

    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage

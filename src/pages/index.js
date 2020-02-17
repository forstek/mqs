import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import img1 from "../images/pengembangan.webp"
import img2 from "../images/dana.webp"
import img3 from "../images/waqaf.webp"
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
        <img src={img1} width={400} />
      </div>
      <p>Untuk itu kami memohon maaf jika selama proses pembangunan akan mengganggu kenyamanan jamaah dalam beribadah. Dan kami juga memohon do’a dan support dari jamaah sekalian, semoga Allah mudahkan ikhtiar kita dalam memakmurkan masjid kita tercinta. Aamiin. </p>
      <p>Atas perhatiannya kami mengucapkan terima kasih, jazaakumullaahu khairan. </p>
      <hr/>
      <p>NB: <a href="https://drive.google.com/file/d/1LXtpKEg_5ZC205GYbINfwsWh_ExiVxvS/view?usp=sharing">Surat Keputusan</a></p> 
    </div>
    <img src={img3} />
    <div style={{ textAlign: 'center', width: '100%'}}>
      <img src={img2} />
    </div>

    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage

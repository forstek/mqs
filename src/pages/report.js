import React from "react"
import { Carousel } from 'antd'

import Layout from "../components/layout"
import SEO from "../components/seo"

import plan1 from '../images/tampak_depan.jpg'
import plan2 from '../images/lantai_1.jpg'
import plan3 from '../images/lantai_2.jpg'

import prev1 from '../images/prev1.jpg'
import prev2 from '../images/prev2.jpg'
import prev3 from '../images/prev3.jpg'
import prev4 from '../images/prev4.jpg'
import prev5 from '../images/prev5.jpg'
import prev6 from '../images/prev6.jpg'

import post1 from '../images/post1.jpg'
import post3 from '../images/post3.jpg'
import post4 from '../images/post4.jpg'
import post5 from '../images/post5.jpg'

const ReportPage = () => (
  <Layout>
    <SEO title="Progress" />
    <h1 style={{ textAlign: 'center', margin: '60px auto' }}>Proses pengembangan masjid</h1>
    <h3>Rencana renovasi</h3>
    <div style={{ margin: '40px auto 0 auto', width: '90vw', maxWidth: '800px', overflow: 'hidden' }}>
	    <Carousel autoplay>
	      <img src={plan1} />
	      <img src={plan2} />
	      <img src={plan3} />
		  </Carousel>
    </div>

    <h3 style={{ marginTop: '60px' }}>Sebelum renovasi</h3>
    <div style={{ margin: '40px auto 0 auto', width: '90vw', maxWidth: '800px', overflow: 'hidden' }}>
	    <Carousel autoplay>
		    <img src={prev1} />
	      <img src={prev2} />
	      <img src={prev3} />
	      <img src={prev4} />
	      <img src={prev5} />
	      <img src={prev6} />
		  </Carousel>
		</div>

    <h3 style={{ marginTop: '40px' }} >Dalam masa renovasi</h3>
    <div style={{ margin: '40px auto 0 auto', width: '90vw', maxWidth: '800px', overflow: 'hidden' }}>
	    <Carousel autoplay>
		    <img src={post1} />
	      <img src={post3} />
	      <img src={post4} />
	      <img src={post5} />
		  </Carousel>
	  </div>

  </Layout>
)

export default ReportPage

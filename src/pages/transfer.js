import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import img2 from "../images/flyer-infaq.webp"

const TransferPage = () => (
  <Layout>
    <SEO title="Transfer" />
    <div>
	    <h1 style={{ textAlign: 'center', margin: '60px auto' }}>Metode penyerahan dana waqaf</h1>
	    <div style={{ margin: '1.45rem auto' }}>
        <a href="https://drive.google.com/drive/folders/1tqUeZ5de4_i3o6PwElfR7qpLR5MIAGXy?usp=sharing" 
          target="_blank" 
          rel="noreferer noopener"
        >
          <img src={img2} />
        </a>
      </div>
	    <h3>Langsung / Cash</h3>
	    <br />
	    <h4>Sekretariat DKM Qolbun Saliim</h4>
	    <p style={{ marginBottom: '0.25rem' }}><a href='https://maps.app.goo.gl/y3NHhbUEcMG6kazK7' rel='noreferer noopener'>Masjid Qolbun Saliim</a></p>
	    <p>Topindo Buah Batu Residence, Jl. H. Bardan Raya, Kujangsari, Kec. Bandung Kidul, Kota Bandung, Jawa Barat 40287</p>
	    <p>Untuk penyerahan langsung, hubungi Ust. Riyan <a href='https://wa.me/6285216111133'>+62 852-1611-1133</a></p>
	    <br />
	    <br />
	    <br />
	    <h3>Bank Transfer</h3>
	    <br />
	    <h4>Bank BNI Syariah</h4>
	    <p style={{ marginBottom: '0.25rem', fontSize: '1rem', fontWeight: 'bold' }}>100 7000 110</p>
	    <p style={{ fontSize: '1rem' }}>a.n. DKM Qolbun Saliim</p>
	    <br />
	    {/*<h4>Bank BRI</h4>
	    <p style={{ marginBottom: '0.25rem', fontSize: '1rem', fontWeight: 'bold' }}>0776 01 006366 50 8</p>
	    <p style={{ fontSize: '1rem' }}>a.n. Erry Firman QQ DKM Qolbun Saliim</p>
	    <br />*/}
	    <p style={{ marginBottom: '0.25rem' }}>Untuk metode transfer, mohon menyertakan kode unik 1 pada digit terakhir nominal transfer anda.</p>
	    <p>Contoh: <strong>500.000.00<span style={{color: 'red'}}>1</span></strong></p>
	    <p style={{ marginBottom: '0.25rem' }}>Kemudian konfirmasi dengan mengirimkan bukti transfer melalui whatsapp/sms/telpon ke Bapak Erry <a href='https://wa.me/628122182551'>+62 812-2182-551</a></p>
    </div>
  </Layout>
)

export default TransferPage

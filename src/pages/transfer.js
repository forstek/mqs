import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TransferPage = () => (
  <Layout>
    <SEO title="Transfer" />
    <div>
	    <h1 style={{ textAlign: 'center', margin: '60px auto' }}>Metode penyerahan dana waqaf</h1>
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
	    <h4>Bank BRI</h4>
	    <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>
		    <p style={{ marginBottom: '0.25rem' }}>0776 01 006366 50 8</p>
		    <p>Erry Firman QQ DKM Qolbun Saliim</p>
	   	</div>
	    <br />
	    <p style={{ marginBottom: '0.25rem' }}>Untuk metode transfer, mohon menyertakan kode unik 1 pada digit terakhir nominal transfer anda.</p>
	    <p>Contoh: <strong>500.000.00<span style={{color: 'red'}}>1</span></strong></p>
	    <p style={{ marginBottom: '0.25rem' }}>Kemudian konfirmasi dengan mengirimkan bukti transfer melalui whatsapp/sms/telpon ke Bapak Erry <a href='https://wa.me/628122182551'>+62 812-2182-551</a></p>
    </div>
  </Layout>
)

export default TransferPage

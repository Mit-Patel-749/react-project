import '@/styles/font.css'
import '@/styles/globals.css'
import Header from '@/pages/layouts/Header'
import Footer from '@/pages/layouts/Footer'

export default function App({ Component, pageProps }) {
 
    return (
      	<>
			<Header />
			<Component {...pageProps} />
			<Footer />
      </>
    )
}

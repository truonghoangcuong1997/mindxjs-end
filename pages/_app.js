import '../styles/globals.css'
import Header from "../src/glabal/header";
import Footer from "../src/glabal/footer";
import Heade from './header'

function MyApp({ Component, pageProps }) {
  return <>
    <Heade></Heade>
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
  </>
}

export default MyApp

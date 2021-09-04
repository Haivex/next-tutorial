//render all pages
//js console code run on server side rendering and client rendering
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('Hello from _app.tsx')
  return <Component {...pageProps} />
}

export default MyApp

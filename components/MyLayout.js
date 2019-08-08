import Header from './Header'
import Footer from './Footer'

const layoutStyle = {
  margin: 10,
  padding: 20,
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

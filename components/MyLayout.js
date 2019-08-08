import Header from './Header'

const layoutStyle = {
  margin: 10,
  padding: 20,
  background: 'darkgrey'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}

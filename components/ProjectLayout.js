import Header from './Header'

const layoutStyle = {
  padding: 20,
  background: 'white'
}

export default function Card(props) {
  return (
    <div style={layoutStyle}>
      {props.children}
    </div>
  )
}

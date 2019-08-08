import Header from './Header'

const layoutStyle = {
  padding: 10,
}

export default function Card(props) {
  return (
    <div style={layoutStyle}>
      {props.children}
    </div>
  )
}

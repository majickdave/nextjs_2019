import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '2px solid #DDD'
}

export default function Card(props) {
  return (
    <div style={layoutStyle}>
      {props.children}
    </div>
  )
}

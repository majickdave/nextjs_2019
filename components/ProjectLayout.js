import Header from './Header'

const layoutStyle = {
  padding: 20,
  margin: 20,
  'max-width': 500,
  border: '1px solid #DDD'
}

export default function Card(props) {
  return (
    <div style={layoutStyle}>
      {props.children}
    </div>
  )
}

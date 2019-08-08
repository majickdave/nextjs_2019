
const layoutStyle = {
  margin: 10,
  padding: 10
}

export default function Image(props) {
  return (
    <div style={layoutStyle}>
      <img src={props.children}>  
      </img>
    </div>
  )
}

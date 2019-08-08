
const layoutStyle = {
  margin: 10,
  padding: 10,
}

export default function Image(props) {
  return (
    <div style={layoutStyle}>
      {props.children}
      <style jsx>{`
      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
      }
        `}
      </style>
    </div>
  )
}

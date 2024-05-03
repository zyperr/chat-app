import "../styles/components/Btn.css"
const Btn = ({text,...props}) => {
  return (
    <div className="btn" {...props}>{text}</div>
  )
}



export default Btn
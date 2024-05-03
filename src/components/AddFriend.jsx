
export default function AddFriend({img}) {
  return (
    <div className="avatar_container">
    <picture className="avatar">
      <img src={img} alt="avatar" role="img" />
    </picture>
    <div className="avatar__overlay">
        <span className="avatar__plus">+</span>
      </div>
  </div>
  )
}

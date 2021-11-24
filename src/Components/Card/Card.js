import './Card.css';

export default function Card(props) {
  return (
    <div className='card'>
      <a className='card-item' href={props.linkItem}>
        <div className='card-image'>
          <img src={props.image} alt={props.title}></img>
        </div>
        <h2 className='card-title'>{props.title}</h2>
        <span className='card-preco'>{'R$ ' + props.preco}</span>
      </a>
      <a className='wishlist' href={props.linkWish}>
      </a>
    </div>
  )
}
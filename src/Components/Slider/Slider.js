import './Slider.css';

export default function Slider(props) {
  return (
    <div>
      <img className='image' src={props.imageLink} alt={props.alt} />
    </div>
  )
}
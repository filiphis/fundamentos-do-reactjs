import './styles.css'

function Card({name, time}) {
  return (
    <div className='card'>
      <span>{name}</span>
      <span>{time}</span>
    </div>
  );
}

export default Card;

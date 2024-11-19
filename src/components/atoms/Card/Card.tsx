import './Card.scss'

interface ICardProp{
    title: string;
    icon: React.ReactNode;
    info: string | number;
}

const Card: React.FC<ICardProp> = ({title, icon, info}) => {
  return (
    <div className='card-container'>
        <div className='upper_part-card'>
            {title}
            <span className='icon-card'>{icon}</span>
        </div>
        <p className='info-card'>
            {info}
        </p>
    </div>
  )
}

export default Card
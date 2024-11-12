'use client'
import './AsideHeader.scss';
import { IoClose } from 'react-icons/io5'

interface IAsideHeaderProps{
    functionProps?: ()=> void;
    children:  React.ReactNode;
}

const AsideHeader: React.FC<IAsideHeaderProps> = ({functionProps, children}) => {
  return (
    <div className='aside_header-container'>
        <aside className='aside-header'>
            <button className='close-aside_header' onClick={functionProps}><IoClose /></button>
            <ul className='list-aside_header'>
                {children}
            </ul>
        </aside>
    </div>
    
  )
}

export default AsideHeader
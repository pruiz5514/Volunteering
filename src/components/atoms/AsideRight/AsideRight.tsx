'use client';

import { IoClose } from 'react-icons/io5';
import './AsideRight.scss'

interface IAsideRightProps{
  children: React.ReactNode;
  closeAside: ()=> void;
}

const AsideRigth:React.FC<IAsideRightProps> = ({children, closeAside}) => {

  return (
          <div className='aside_right-container'>
            <div  className='background-aside_right'/>
            <div className='aside_right_content-container'>
              <button className='aside_right-close_button' onClick={closeAside}><IoClose /></button>
              {children}
            </div>
          </div>
  )
}

export default AsideRigth
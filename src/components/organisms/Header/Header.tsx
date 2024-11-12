'use client';

import { RxHamburgerMenu } from 'react-icons/rx';
import './Header.scss'
import AsideRigth from '@/components/atoms/AsideRight/AsideRight';
import { useState } from 'react';

interface IHeaderProps{
    leftSectionContent?: React.ReactNode;
    children:  React.ReactNode;
}



const Header: React.FC<IHeaderProps> = ({children, leftSectionContent}) => {
  const [aside, setAside] = useState(false);

  const openAside = ()=> setAside(true)
  const closeAside = ()=> setAside(false)

  return (
    <header>
        <div className='left_section-header'>
            {leftSectionContent}
            <button onClick={openAside} className='burger-icon'><RxHamburgerMenu /></button>
        </div>
        <nav>
            <ul className='nav-ul'>
                {children}
            </ul>
        </nav>

        {aside && (
            <AsideRigth closeAside={closeAside}>
                <ul className='nav_ul-mobile'>
                    {children}
                </ul>
            </AsideRigth>
        )}
        
    </header>
  )
}

export default Header  
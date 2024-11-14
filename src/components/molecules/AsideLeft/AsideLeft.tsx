'use client'
import './AsideLeft.scss';
import Button from '@/components/atoms/Button/Button'
import { IoClose } from 'react-icons/io5'
import { signOut } from "next-auth/react"
import { MdLogout } from 'react-icons/md';
import { AiOutlineFolderOpen } from 'react-icons/ai';

interface IAsideLeftProps{
    functionProps?: ()=> void
}

const AsideLeft: React.FC<IAsideLeftProps> = ({functionProps}) => {
  return (
    <aside className='aside-left'>
        <button className='close-aside_left' onClick={functionProps}><IoClose /></button>
        <h1 className='left_aside-h1'>VolunteerConnect</h1>
        <ul className='list-aside_left'>
            <li className='li-aside_left'><a href="/dashboard/services"><AiOutlineFolderOpen /> Proyectos</a></li>
            <li className='li-aside_left' onClick={()=> signOut()}><MdLogout /> Cerrar sesión</li>
        </ul>
    </aside>
  )
}

export default AsideLeft
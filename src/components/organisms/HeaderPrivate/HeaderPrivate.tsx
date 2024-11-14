import React from 'react'
import Header from '../Header/Header'
import Button from '@/components/atoms/Button/Button'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { IoMdAddCircleOutline } from 'react-icons/io'

const HeaderPrivate = () => {
  return (
    <Header classname='header-private' leftSectionContent = {<h2 className='header_private_left-content'>Dashboard de proyectos</h2>}>
          <li><a href="/register"><Button className='dark-button'><IoDocumentTextOutline /> Descargar reporte</Button></a></li>
          <li><a href="/register"><Button className='dark-button'><IoMdAddCircleOutline /> Nuevo Proyecto</Button></a></li>
    </Header>
  )
}

export default HeaderPrivate
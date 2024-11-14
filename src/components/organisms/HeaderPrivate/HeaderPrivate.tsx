'use client';

import React, { useState } from 'react'
import Header from '../Header/Header'
import Button from '@/components/atoms/Button/Button'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { IoMdAddCircleOutline } from 'react-icons/io'
import Modal from '@/components/atoms/Modal/Modal'
import ProjectsForm from '../Forms/ProjectsForm';

const HeaderPrivate = () => {

  const [modal, setModal] = useState(false);

  const closeModal = () => setModal(false)

  return (
    <Header classname='header-private' leftSectionContent = {<h2 className='header_private_left-content'>Dashboard de proyectos</h2>}>
          <li><Button className='dark-button'><IoDocumentTextOutline /> Descargar reporte</Button></li>
          <li><Button className='dark-button' onClick={()=>setModal(true)}><IoMdAddCircleOutline /> Nuevo Proyecto</Button></li>

          {modal && 
            <Modal propFunction={closeModal}>
              <ProjectsForm action='add' propFunction={closeModal}/>
            </Modal>
          }
          
    </Header>
  )
}

export default HeaderPrivate
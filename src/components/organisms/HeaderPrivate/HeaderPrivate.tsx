'use client';

import React, { useState } from 'react'
import Header from '../Header/Header'
import Button from '@/components/atoms/Button/Button'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { IoMdAddCircleOutline } from 'react-icons/io'
import Modal from '@/components/atoms/Modal/Modal'
import ProjectsForm from '../Forms/ProjectsForm';
import Account from '@/components/molecules/Account/Account';
import { ProjectsService } from '@/app/infrastructure/services/projects.service';

const useProjectsService = new ProjectsService(`${process.env.NEXT_PUBLIC_FRONT_HOST}/api`)

const HeaderPrivate = () => {

  const [modal, setModal] = useState(false);

  const closeModal = () => setModal(false);

  const handleReport = async() => {
    const response = await useProjectsService.getProjectReport('report');
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "reporte.xlsx"
    document.body.appendChild(a);
    a.click();
    a.remove();
    
  }

  return (
    <Header classname='header-private' leftSectionContent = {<h2 className='header_private_left-content'>Dashboard de proyectos</h2>}>
          <li><Button className='dark-button' onClick={handleReport}><IoDocumentTextOutline /> Descargar reporte</Button></li>
          <li><Button className='dark-button' onClick={()=>setModal(true)}><IoMdAddCircleOutline /> Nuevo Proyecto</Button></li>
          <li><Account/></li>

          {modal && 
            <Modal propFunction={closeModal}>
              <ProjectsForm action='add' propFunction={closeModal}/>
            </Modal>
          }
          
    </Header>
  )
}

export default HeaderPrivate
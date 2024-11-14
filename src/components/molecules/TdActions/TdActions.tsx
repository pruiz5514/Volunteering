'use client';

import './TdActions.scss';
import { GoPencil } from 'react-icons/go'
import { useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import { IProjectsData } from '@/app/core/application/dto/dashboard/projects/get-projects-response.dto';
import Modal from '@/components/atoms/Modal/Modal';
import ProjectsForm from '@/components/organisms/Forms/ProjectsForm';
import { ProjectsService } from '@/app/infrastructure/services/projects.service';
import { useRouter } from 'next/navigation';
import { IProjectsPost } from '@/app/core/application/dto/dashboard/projects/post-projects.dto';

interface ITdActions{
  data: IProjectsData;
}

const useProjectsService = new ProjectsService(`${process.env.NEXT_PUBLIC_FRONT_HOST}/api`);

const TdActions: React.FC<ITdActions> = ({data}) => {

  const [modal, setModal] = useState(false);
  const [featureSelected, setFeatureSelected] = useState<IProjectsPost>();

  const handleCloseModal = ()=> setModal(false);

  const router = useRouter();

  const handleDelete = async(id:number)=> {
    const projectToDelete = await useProjectsService.deleteProject('projects',id);
    router.refresh();
    return projectToDelete
  }

  const handleEdit = () => {
    setModal(true)
    const selectedProject = {
      title: data.title,
      description: data.description,
      startDate: data.startDate,
      endDate : data.endDate
    }
    setFeatureSelected(selectedProject)
   }

  return (
    <div className='td_action-container'>
        <Button onClick={handleEdit} className='edit-button'>Editar</Button>
        <Button onClick={()=>handleDelete(data.id)} className='delete-button'>Eliminar</Button>

        {modal && 
          <Modal propFunction={handleCloseModal}> 
              <ProjectsForm action='edit' idProject={data.id} projectSelected={featureSelected as IProjectsData} propFunction={handleCloseModal}/>
          </Modal>
        }
    </div>
  )
}

export default TdActions
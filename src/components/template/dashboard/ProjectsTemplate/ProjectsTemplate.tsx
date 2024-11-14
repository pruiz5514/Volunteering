import H3 from '@/components/atoms/H3/H3'
import './ProjectsTemplate.scss'
import Input from '@/components/atoms/Input/Input'
import ProjectsTable from '@/components/organisms/Tables/ProjectsTable'
import { IProjectsData } from '@/app/core/application/dto/dashboard/projects/get-projects-response.dto'
import HeaderPrivate from '@/components/organisms/HeaderPrivate/HeaderPrivate'

interface IProjectsTemplate {
    projects : IProjectsData[];
}

const ProjectsTemplate:React.FC<IProjectsTemplate> = ({projects}) => {
  return (
    <>
        <HeaderPrivate/>
        <div className='projects_template-container'>
            <div className='panel_projects-container'>
                <H3>Listas de proyectos</H3>

                <div className='input_search-container'>
                    <Input
                        placeholder='Buscar proyectos'
                    />
                </div>

                <ProjectsTable projects={projects}/>
                
            </div>
        </div>
    </>
  )
}

export default ProjectsTemplate
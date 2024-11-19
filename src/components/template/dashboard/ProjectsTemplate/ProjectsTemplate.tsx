import H3 from '@/components/atoms/H3/H3'
import './ProjectsTemplate.scss'
import Input from '@/components/atoms/Input/Input'
import ProjectsTable from '@/components/organisms/Tables/ProjectsTable'
import { IProjectsData, IProjectsResponse } from '@/app/core/application/dto/dashboard/projects/get-projects-response.dto'
import HeaderPrivate from '@/components/organisms/HeaderPrivate/HeaderPrivate'
import Pagination from '@/components/molecules/Pagination/Pagination'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'

interface IProjectsTemplate {
    projects : IProjectsResponse;
}

const ProjectsTemplate:React.FC<IProjectsTemplate> = ({projects}) => {
    const handleChange = ()=> {

    }
  return (
    <>
        <HeaderPrivate/>
        <div className='projects_template-container'>
            <div className='panel_projects-container'>
                <H3>Listas de proyectos</H3>

                <SearchInput/>
                <ProjectsTable projects={projects.data}/>
                <Pagination data={projects}/>
                
            </div>
        </div>
    </>
  )
}

export default ProjectsTemplate
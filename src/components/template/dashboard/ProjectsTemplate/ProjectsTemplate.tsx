import H3 from '@/components/atoms/H3/H3'
import './ProjectsTemplate.scss'
import Input from '@/components/atoms/Input/Input'
import ProjectsTable from '@/components/organisms/Tables/ProjectsTable'
import { IProjectsData, IProjectsResponse } from '@/app/core/application/dto/dashboard/projects/get-projects-response.dto'
import HeaderPrivate from '@/components/organisms/HeaderPrivate/HeaderPrivate'
import Pagination from '@/components/molecules/Pagination/Pagination'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'
import Card from '@/components/atoms/Card/Card'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { TbAntennaBars5 } from 'react-icons/tb'
import { PiUsers } from 'react-icons/pi'
import { CiCalendar } from 'react-icons/ci'

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
            <div className='projects_template_cards-container'>
                <Card
                    title='Total proyectos'
                    icon = {<AiOutlineFolderOpen />}
                    info = {projects.data.length}
                />
                <Card
                    title='Proyectos activos'
                    icon = {<TbAntennaBars5 />}
                    info = {projects.data.length}
                />
                <Card
                    title='Organizadores'
                    icon = {<PiUsers />}
                    info = {projects.data.length}
                />
                <Card
                    title='Próximo proyecto'
                    icon = {<CiCalendar />}
                    info = 'Invalid Date'
                />
            </div>
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
import H3 from '@/components/atoms/H3/H3'
import './ProjectsTemplate.scss'
import ProjectsTable from '@/components/organisms/Tables/ProjectsTable'
import HeaderPrivate from '@/components/organisms/HeaderPrivate/HeaderPrivate'
import Pagination from '@/components/molecules/Pagination/Pagination'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'
import Card from '@/components/atoms/Card/Card'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { TbAntennaBars5 } from 'react-icons/tb'
import { PiUsers } from 'react-icons/pi'
import { CiCalendar } from 'react-icons/ci'
import { ProjectsService } from '@/app/infrastructure/services/projects.service'
import { IProjectsResponse } from '@/app/core/application/dto/dashboard/projects/get-projects-response.dto'
import { RegisterService } from '@/app/infrastructure/services/register.service'

interface IProjectsTemplate {
    projects : IProjectsResponse;
}

const useProjectsService = new ProjectsService();
const useUsersService = new RegisterService();

const ProjectsTemplate:React.FC<IProjectsTemplate> = async ({projects}) => {
    const allProjects = await useProjectsService.findAllProjects(`projects?size=${1000000000000000}`)
    const allUsers = await useUsersService.getUsers('users');

    const activeProjects = allProjects.data.filter(project => project.isActive);
    const organizers = allUsers.data.filter(user => user.role === 'organizer');

    const todayDate = new Date();
    todayDate.setHours(todayDate.getHours() -5)

    const dates = allProjects.data.map(project => new Date(project.startDate));
    
    const closestDate = dates.reduce((closeDate, currentDate) => {
        const diffCloseDate = Math.abs(closeDate.getTime() - todayDate.getTime());
        const diffCurrentDate = Math.abs(currentDate.getTime() - todayDate.getTime());
        return diffCurrentDate < diffCloseDate ? currentDate : closeDate;
    });
    
  return (
    <>
        <HeaderPrivate/>
        <div className='projects_template-container'>
            <div className='projects_template_cards-container'>
                <Card
                    title='Total proyectos'
                    icon = {<AiOutlineFolderOpen />}
                    info = {allProjects.data.length}
                />
                <Card
                    title='Proyectos activos'
                    icon = {<TbAntennaBars5 />}
                    info = {activeProjects.length}
                />
                <Card
                    title='Organizadores'
                    icon = {<PiUsers />}
                    info = {organizers.length}
                />
                <Card
                    title='Próximo proyecto'
                    icon = {<CiCalendar />}
                    info = {String(closestDate.toISOString().split('T')[0])}
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
import { IProjectsData } from "@/app/core/application/dto/dashboard/projects/get-projects-response.dto"
import Table from "@/components/atoms/Table/Table"
import TableContaier from "@/components/atoms/Table/TableContainer"
import Tbody from "@/components/atoms/Table/Tbody"
import Td from "@/components/atoms/Table/Td"
import Th from "@/components/atoms/Table/Th"
import Thead from "@/components/atoms/Table/Thead"
import Tr from "@/components/atoms/Table/Tr"
import TdActions from "@/components/molecules/TdActions/TdActions"


interface IProjectsTable{
    projects: IProjectsData[]
}

const ProjectsTable:React.FC<IProjectsTable> = ({projects}) => { 
    
  return (
    <TableContaier>
        <Table>
            <Thead>
                <Tr>
                    <Th>Título</Th>
                    <Th>Descripción</Th>
                    <Th>Fecha de inicio</Th>
                    <Th>Fecha de finalización</Th>
                    <Th>Estado</Th>
                    <Th>Organizador</Th>
                    <Th>Acciones</Th>
            </Tr>
            </Thead>
            <Tbody>
                {projects?.map((project:IProjectsData)=>(
                    <Tr key={project.id}>
                        <Td>{project.title}</Td>
                        <Td>{project.description}</Td>
                        <Td>{String(project.startDate)}</Td>
                        <Td>{String(project.endDate)}</Td>
                        <Td>{project.isActive ? 'Activo' : 'Inactivo'}</Td>
                        <Td>{project.organizer.name}</Td>
                        <Td> <TdActions data={project}/> </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </TableContaier>
  )
}

export default ProjectsTable
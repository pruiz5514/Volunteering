import { IProjectsResponse } from "@/app/core/application/dto/dashboard/projects/get-projects-response.dto";
import { HttpClient } from "../utils/client-http";
import { IProjectsPost } from "@/app/core/application/dto/dashboard/projects/post-projects.dto";
import { IProjectsPostResponse } from "@/app/core/application/dto/dashboard/projects/post-projects-response.dto";
import { errorAlert, successAlert } from "../utils/alerts";
import { IProjectsDeleteResponse } from "@/app/core/application/dto/dashboard/projects/delete-projects-response.dto";

export class ProjectsService{
    private httpClient: HttpClient;

    constructor(baseUrl?: string){
        this.httpClient = new HttpClient(baseUrl);
    }

    async findAllProjects(url:string, searchParams?: { order: string }){
        try{
            const response = this.httpClient.get<IProjectsResponse>(url,searchParams);
            return response
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async postProjects(url:string, body:IProjectsPost){
        try{
            const newProject = await this.httpClient.post<IProjectsPostResponse, IProjectsPost>(url,body);
            successAlert('Se creo el proyecto exitosamente');
            return newProject;
        }catch(error){
            console.log(error);
            errorAlert("No se pudo crear el servicio, intente luego")
            throw error
        }
    }

    async deleteProject(url:string,id:number){
        try{
            const projectToDelete = await this.httpClient.delete(`${url}/${String(id)}`);
            return projectToDelete;
        } catch(error){
            console.log(error);
            throw error;
        }
    }

    async editProject (url:string, id:number, body:IProjectsPost){
        try{
            const projectEdited =  await this.httpClient.patch<IProjectsPostResponse,IProjectsPost>(`${url}/${id}`, body);
            successAlert('Editado exitosamente');
            return projectEdited;

        } catch(error){
            console.log(error);
            throw error;

        }
    }
}
import { IProjectsResponse } from "@/app/core/application/dto/dashboard/get-projects-response.dto";
import { HttpClient } from "../utils/client-http";

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

    // async postProjects(url:string, body:IServicesPost){
    //     try{
    //         const newService = await this.httpClient.post<IServicesPostResponse, IServicesPost>(url,body);
    //         return newService;
    //     }catch(error){
    //         console.log(error);
    //         errorAlert("No se pudo crear el servicio, intente luego")
    //         throw error
    //     }
    // }

    // async deleteService(url:string,id:string){
    //     try{
    //         const serviceToDelete = await this.httpClient.delete(`${url}/${id}`);
    //         successAlert('Eliminado exitosamente');
    //         return serviceToDelete;
    //     } catch(error){
    //         console.log(error);
    //         errorAlert('No se pudo eleminar')
    //         throw error;
    //     }
    // }

    // async findServiceById (url:string, id:string){
    //     try{
    //         const serviceById = await this.httpClient.get<IServicesResponse>(`${url}/${id}`);
    //         return serviceById
    //     } catch (error){
    //         console.log(error);
    //         throw error
    //     }
    // }

    // async editService (url:string, id:string, body:IServicesPost){
    //     try{
    //         const serviceEdited =  await this.httpClient.put<IServicesPostResponse,IServicesPost>(`${url}/${id}`, body);
    //         successAlert('Editado exitosamente');
    //         return serviceEdited;

    //     } catch(error){
    //         console.log(error);
    //         throw error;

    //     }
    // }
}
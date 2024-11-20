import { IUsersPost } from "@/app/core/application/dto/register/post-users.dto";
import { HttpClient } from "../utils/client-http";
import { IUserPostResponse } from "@/app/core/application/dto/register/post-user-response.dto";
import { errorAlert } from "../utils/alerts";
import { useRouter } from "next/navigation";
import { IUsersResponse } from "@/app/core/application/dto/register/get-users-response.dto";
import { PUsers } from "@/app/core/application/ports/user.port";


export class RegisterService implements PUsers {
    private httpClient: HttpClient;

    constructor(baseUrl?: string){
        this.httpClient = new HttpClient(baseUrl);
    }

    async postUser(url:string, body:FormData){
        try{
            const newClient = await this.httpClient.postBinary<IUserPostResponse>(url,body);
            return newClient;
        }catch(error){
            console.log(error);
            errorAlert('No se pudo crear usuario')
            throw error
        }
    }

    async getUsers(url:string, searchParams?: { order: string }){
        try {
            const user = await this.httpClient.get<IUsersResponse>(url);
            return user
        }catch(error){
            console.log(error);
            throw error;
        }
    }

}
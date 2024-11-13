import { IUsersPost } from "@/app/core/application/dto/register/post-users.dto";
import { HttpClient } from "../utils/client-http";
import { IUserPostResponse } from "@/app/core/application/dto/register/post-user-response.dto";

export class RegisterService {
    private httpClient: HttpClient;

    constructor(baseUrl?: string){
        this.httpClient = new HttpClient(baseUrl);
    }

    async postClient(url:string, body:FormData){
        try{
            const newClient = await this.httpClient.postBinary<IUserPostResponse>(url,body);
            return newClient;
        }catch(error){
            console.log(error);
            throw error
        }
    }

}
import { IUsersResponse } from "../dto/register/get-users-response.dto";
import { IUserPostResponse } from "../dto/register/post-user-response.dto";

export interface PUsers {

    /**
   * Post a user
   *  @param {string} - user url
   *  @param {FormData} - user body
   *  @returns {Promise<IUserPostResponse>} - Post user response 
   */
    postUser(url:string, body:FormData): Promise<IUserPostResponse>

     /**
   * Get all projects
   * @returns {Promise<IUsersResponse>} - Get all projects response
   */
     getUsers(url: string): Promise<IUsersResponse>
}
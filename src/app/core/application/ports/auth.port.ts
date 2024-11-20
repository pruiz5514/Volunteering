import { ILoginRequest } from "../dto/auth/login-request.dto";
import { ILoginResponse } from "../dto/auth/login-response.dto";


export interface PAuth {
    /**

   * @param {ILoginRequest} - Login Request
   * @returns {Promise<ILoginResponse>} - Login response
   * @throws {Error} - Throws an error if the API call fails, handled by `handleApiErrors`.
   */
    login(req: ILoginRequest): Promise<ILoginResponse>
}
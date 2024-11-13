export interface IUserPostResponse {
    statusCode: number;
    message:    string;
    data:       IUserData;
}

export interface IUserData {
    email: string;
    name:  string;
    role:  string;
    photo: null;
    id:    number;
}

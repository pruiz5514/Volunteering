export interface IUsersResponse {
    statusCode: number;
    message:    string;
    data:       Datum[];
}

export interface Datum {
    id:       number;
    email:    string;
    password: string;
    name:     string;
    role:     Role;
    photo:    null | string;
}

export enum Role {
    Organizer = "organizer",
    Volunteer = "volunteer",
}

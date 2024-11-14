export interface IProjectsPostResponse {
    statusCode: number;
    message:    string;
    data:       IProjectsPostResponseData;
}

export interface IProjectsPostResponseData {
    title:       string;
    description: string;
    startDate:   Date;
    endDate:     Date;
    organizer:   Organizer;
    id:          number;
    isActive:    boolean;
}

export interface Organizer {
    id:    number;
    email: string;
    role:  string;
}

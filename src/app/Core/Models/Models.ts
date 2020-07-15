export interface ILoginModel {
    EmailId: string;
    Password: string;
}

export interface IResponse {
    token: string;
}

export interface IUserModel {
    contactNo: string;
    email: string;
    name: string;
    _id: string;
}

export interface IDashboardModel {
    id: number;
    name: string;
    emailId: string;
    phone: string;
}




export interface Iuser { 
    userName: string;
    userId: string;
    userRole: 'admin'|'buyer'|'superAdmin';
    profileDescription: string;
    profileImage: string;
    skills: string[];
    experienceYears: string;
    isActive: boolean;
    address: {
        current: {
            city: string;
            state: string;
            country: string;
            zipcode: string;
        };
        permanent: {
            city: string;
            state: string;
            country: string;
            zipcode: string;
        };
    };
    isAddSame: boolean;
}

export interface Ires<T>{
    msg:string,
    data:T
}
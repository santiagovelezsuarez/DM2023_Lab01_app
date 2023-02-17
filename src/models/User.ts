export interface User {
    user_name: string;
    password: string;
    birth_date: Date;
    email: string;
    address: Address;    
}

export interface Address {
    city: string;
    code_zip: string;
}

export interface ICustomer {
    _id?: string;
    corporateName: string;
    fantasyName: string;
    cnpj: string;
    acting: string;
    email: string;
    address: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    cep: string;
    state: string;
    cellPhone: string;
    logo: string;
    primaryColor: string;
    secondaryColor: string;
    type: string;
    active: boolean;
    terminals: number[];
    contracts: IContract[];
    subscribers: ICustomer[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IContract {
    _id?: string;
    company: string;
    terminals: number;
    section: string;
    startDate: string;
    dueDate: Date;
    inserts: number;
    unitValue: number;
    discount: number;
    signed: boolean;
    notes: string;
    payment: IPayment;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IPayment {
    _id?: string;
    type: string;
    installments: IInstallment[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IInstallment {
    _id?: string;
    paid: boolean;
    installment: number;
    dueDate: Date;
    receipt: string;
    value: number;
    createdAt?: Date;
    updatedAt?: Date;
}
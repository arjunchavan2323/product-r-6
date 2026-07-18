export interface iproduct{
     productId: string;
    productName: string;
    productImage: string;
    description: string;
    stockAvailable: 0|1;
    orderStatus: 'Delivered'|'Dispatch'|'Inprogress';
}


export interface Ires <T>{
    msg:string;
    data:T
}
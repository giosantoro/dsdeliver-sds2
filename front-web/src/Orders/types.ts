export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

export type OrderLocationdata = {
        address: string;
        latitude: number;
        longitude: number;
}
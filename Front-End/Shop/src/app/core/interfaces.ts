export interface IProduct{
    _id: string;
    gender: string;
    brand: string;
    model: string;
    price: string;
    info: [
        {
            size: number;
            color: string;
            images: [
                {
                    imgUrl: string;
                }
            ]
        }
    ]
    hover: boolean   
}

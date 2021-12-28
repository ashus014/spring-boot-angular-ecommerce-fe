export class Product {

    public sku: string;
    name: string;
    description: string;
    unitPrice: number;
    imageUrl: string;
    active: boolean;
    unitsInStock: number;
    dateCreated : Date;
    lastUpdated: Date;

    constructor() { 
        // Initialization inside the constructor
        this.sku = "";
        this.name="";
        this.description = "";
        this.unitPrice=0;
        this.imageUrl="";
        this.active=true;
        this.unitsInStock=1;
        this.dateCreated=new Date();
        this.lastUpdated=new Date();
     }

}

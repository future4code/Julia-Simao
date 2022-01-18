export type Product = {
    id: string,
    name: string,
    tag: []
}

export type ProductIdentifier = {
    id: string
}

export class NewProductInput {
    constructor(
    name: string,
    tag: string
    ) {}
}

export class Products {
    constructor(
        private id: string,
        private name: string,
        private tag: string
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    getTag(){
        return this.tag
    }


    static toProductModel(data: any | string){
        return (data.id, data.name, data.tag)
    }
}

export type Product = {
    id: string,
    name: string,
    tag: string,
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
        // private tag_id: string,
        private tags: string
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    // getTagId(){
    //     return this.tag_id
    // }

    getTags(){
        return this.tags
    }


    static toProductModel(data: any){
        return (data.id, data.name, data.tag)
    }
}

enum ROLE {
    ADMIN = "ADM",
    CLIENT = "CLIENT"
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: ROLE
    ){}

    getUserId(){
        return this.id
    }

    getUserName(){
        return this.name
    }

    getEmail(){
        return this.email
    }

    getPassword(){
        return this.password
    }

    getRole(){
        return this.role
    }

    static toUserModel(data: any){
        return new User(data.id, data.name, data.email, data.password, data.role)
    }
}

export class Product {
    constructor(
        private id: string,
        private name: string,
        private price: number,
    ){}

    getProductId(){
        return this.id
    }

    getProductName(){
        return this.name
    }

    getProductPrice(){
        return this.price
    }
}

export class Tag {
    constructor(
        private id: string,
        private tag: string[]
    ){}

    getTagId(){
        return this.id
    }

    getTag(){
        return this.tag
    }
}
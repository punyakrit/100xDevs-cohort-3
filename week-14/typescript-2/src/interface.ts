
interface Address {
    city: string;
    pincode?: number
};

interface User {
    firstName: string;
    lastName: string;
    age: number;
    address: Address
}

const user: User = {
    firstName:"Anoop",
    lastName:"Singh",
    age :23,
    address:{
        city:"ASR"
    }
}
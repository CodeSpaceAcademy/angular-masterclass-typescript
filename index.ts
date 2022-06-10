class User {
    constructor(private name: string,
                private id: number,
                private phoneNumber: number = undefined
    ) {
    }

    presentation(): string {
        return `User Name : ${this.name} , User Id: ${this.id} , User phone number: ${this.phoneNumber ?? 'NOT-DEFINED'}`;
    }
}

const usersInDb: User[] = [];

const miguel: User = new User("Miguel", 1);
const pablo: User = new User("Pablo", 2, 676123456);

usersInDb.push(miguel, pablo)

usersInDb.forEach(user => {
    console.log(user.presentation());
})


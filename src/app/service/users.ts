export type User={
    role: string;
    name: string;
    password: string;
}
export const userList:User[]=[
        {   "role": "teacher",
            "name": "Riki",
            "password": "123456"
        },
        {
            "role": "secretary",
            "name": "Miri",
            "password": "111111"
        }
]
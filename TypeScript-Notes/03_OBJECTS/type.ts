type UserData = {
    name: string;
    email: string;
    isActive: boolean;
    id: number;
}

// type UserPreview = {
//     name: string;
//     id: number;
// }

// type UserEdit = {
//     name: string;
//     isAdmin: boolean;
//     id: number;
// }

type UserPreview = Pick<UserData, 'name' | 'id'>;
type UserEdit = Omit<UserData, 'email'> & { isAdmin: boolean };
type UserPreview2 = Partial<UserData>;
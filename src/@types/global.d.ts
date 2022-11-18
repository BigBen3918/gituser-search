interface Column {
    id: "avatar" | "login" | "user";
    label: string;
}

interface Data {
    avatar_url: string;
    login: string;
    type: string;
}

interface SearchObject {
    login: string;
    perPage: number;
    page: number;
}

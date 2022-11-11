const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getTodosUrl = (limit: number) => BASE_URL + 'todos?_limit=' + limit;
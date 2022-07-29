
const API_URL = 'https://ub8pa2o0.directus.app'

export function postsUrl(params = ''): string {
    return `${API_URL}/items/post?fields=id,title,category.id,category.label,image,text,user_created.first_name,user_created.last_name,user_created.avatar,date_created${params}`
}

export function singlePostUrl(id: number): string {
    return `${API_URL}/items/post/${id}?fields=id,title,category.id,category.label,image,text,user_created.first_name,user_created.last_name,user_created.avatar,date_created`;
}

export function asset(file: string): string {
    return `${API_URL}/assets/${file}`;
}

export function usersUrl(): string {
    return `${API_URL}/users?fields=id,first_name,last_name,avatar,twitter,github,linkedin,description,founder,techs`
}
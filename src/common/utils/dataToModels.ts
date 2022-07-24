import { Post } from "../types";

export function dataToPost(data: any): Post {
    return {
        ...data,
        author: {
            name:
                data.user_created.first_name + " " + data.user_created.last_name,
            avatar: data.user_created.avatar,
        },
        crearedAt: data.date_created,
    }

}
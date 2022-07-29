import { Post, User, UserAbout } from "../types";
import { asset } from "./api";

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

export function dataToUser(data: any): UserAbout {
    return {
        ...data,
        name: data.first_name + ' ' + data.last_name,
        bio: data.description,
        avatar: asset(data.avatar),
        socials: {
            twitter: data.twitter || "#",
            linkedin: data.linkedin || "#",
            github: data.github || "#"
        },
        tags: data.techs || []
    }
}
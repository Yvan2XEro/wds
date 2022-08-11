import Link from "next/link";
import React from "react";
import { Post } from "src/common/types";
import { slugify, substring } from "src/common/utils";

interface OtherPostPropsType {
  post: Post;
}
export function OtherPost({ post }: OtherPostPropsType) {
  const url = `/blog/${slugify(post.title, post.id)}`;
  return (
    <div className="px-1 mt-3 card max-w-[350px]">
      <Link href={url}>
        <a className="flex justify-between sm:text-sm">
          <div>
            <div className="flex items-center">
              <img
                width={25}
                height={25}
                src={post.author.avatar}
                className="block w-[25px] h-[25px] bg-black rounded-full"
              />
              <span>{post.author.name}</span>
            </div>
            <h5 className="mt-1 font-bold">{substring(post.title, 100)}</h5>
          </div>
          <img
            width={80}
            height={60}
            src={post.image}
            className="w-[80px] h-[60px] rounded-sm md:object-cover"
          />
        </a>
      </Link>
    </div>
  );
}

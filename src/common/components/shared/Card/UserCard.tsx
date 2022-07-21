import Link from "next/link";
import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

type UserCardProps = {
  name: string;
  avatar: string;
  text: string;
  tags?: string[];
  socials?: {
    twitter: string;
    linkedin: string;
    github: string;
  };
};
export function UserCard({
  tags = [],
  socials = { github: "#", linkedin: "#", twitter: "#" },
  avatar,
  name,
  text,
}: UserCardProps) {
  return (
    <div className="mx-3 mt-10 md:mx-6 w-[300px] shadow-lg pb-2">
      <div className="relative py-4 text-center bg-primary-500">
        <div className="absolute right-3">
          <div className="mt-3">
            <Link href={socials.twitter} className="block mt-10 text-white">
              <a>
                <BsTwitter className="text-white" size={25} />
              </a>
            </Link>
          </div>
          <div className="mt-3">
            <Link href={socials.github} className="block mt-10 text-white">
              <a>
                <FaGithub className="text-white" size={25} />
              </a>
            </Link>
          </div>
          <div className="mt-3">
            <Link href={socials.linkedin} className="block mt-10 text-white">
              <a>
                <BsLinkedin className="text-white" size={25} />
              </a>
            </Link>
          </div>
        </div>
        <img
          src={avatar}
          className="rounded-full w-[120px] h-[120px] m-auto primary-gradient"
        />
      </div>
      <h6 className="mt-3 text-xl font-bold text-center">{name}</h6>
      <p className="pb-1 mx-3 mt-1">{text}</p>
      <div className="flex flex-wrap px-6 pt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-white rounded-full bg-primary-300"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

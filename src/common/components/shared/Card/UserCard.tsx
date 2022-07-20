import Link from "next/link";
import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export function UserCard() {
  return (
    <div className="mx-3 mt-10 md:mx-6 w-[300px] shadow-lg">
      <div className="relative py-4 text-center bg-primary-500">
        <div className="absolute right-3">
          <div className="mt-3">
            <Link href="#" className="block mt-10 text-white">
              <a>
                <BsTwitter className="text-white" size={25} />
              </a>
            </Link>
          </div>
          <div className="mt-3">
            <Link href="#" className="block mt-10 text-white">
              <a>
                <FaGithub className="text-white" size={25} />
              </a>
            </Link>
          </div>
          <div className="mt-3">
            <Link href="#" className="block mt-10 text-white">
              <a>
                <BsLinkedin className="text-white" size={25} />
              </a>
            </Link>
          </div>
        </div>
        <img
          src="https://gitlab.com/uploads/-/system/user/avatar/6049371/avatar.png"
          className="rounded-full w-[120px] h-[120px] m-auto primary-gradient"
        />
      </div>
      <h6 className="mt-3 text-xl font-bold text-center">Yvan Jules Kana</h6>
      <p className="pb-1 mx-3 mt-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        harum id suscipit officiis assumenda porro commodi, provident deserunt
        ipsa esse.
      </p>
      <div className="flex flex-wrap px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-white rounded-full bg-primary-300">
          #Designer
        </span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-white rounded-full bg-primary-300">
          #WEB Dev
        </span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-white rounded-full bg-primary-300">
          #Mobile Dev
        </span>
      </div>
    </div>
  );
}

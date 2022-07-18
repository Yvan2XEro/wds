import React from "react";
import { FaMapMarkerAlt, FaPhone, FaVoicemail } from "react-icons/fa";
import Logo from "../../../assets/logos/logo1.png";

export default function Footer() {
  return (
    <footer className="px-6 py-8 bg-primary-500 lg:px-16 lg:py-0">
      <div className="flex items-center justify-between flex-1">
        <a href="#">
          <img src={Logo.src} className="w-[70px] h-[60px] mt-[10px]" />
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="relative">
          <h2 className="text-white text-3xl my-4 font-bold before:mt-[35px] after:rounded before:rounded after:mt-[35px] before:w-[45px] before:left-[20px] before:absolute before:bg-white before:h-[4px]  after:w-[15px] after:left-[0px] after:absolute after:bg-white after:h-[4px]">
            Contacts
          </h2>
          <ul>
            <li className="flex mt-3 text-white items-center">
              <FaVoicemail size={30} className="round block" />
              <span className="block ml-2">
                <a href="#" className="block">
                  info@wds.bys
                </a>
                <a href="#" className="block">
                  support@wds.bys
                </a>
              </span>
            </li>
            <li className="flex mt-3 text-white items-center">
              <FaPhone size={30} className="round block" />
              <span className="block ml-2">
                <a href="#" className="block">
                  +237 678 987 654
                </a>
                <a href="#" className="block">
                  +237 678 987 654
                </a>
              </span>
            </li>
            <li className="flex mt-3 text-white items-center">
              <FaMapMarkerAlt size={30} className="round block" />
              <span className="block ml-2">Dschang, Cameroun, Ngui-foreke</span>
            </li>
          </ul>
        </div>
        <div className="relative">
          <h2 className="text-white text-3xl my-4 font-bold before:mt-[35px] after:rounded before:rounded after:mt-[35px] before:w-[65px] before:left-[20px] before:absolute before:bg-white before:h-[4px]  after:w-[15px] after:left-[0px] after:absolute after:bg-white after:h-[4px]">
            Nos liens
          </h2>
          <ul>
            <li className="flex mt-3 text-white items-center">
              <a href="#" className="block">
                Acceuil
              </a>
            </li>
            <li className="flex mt-3 text-white items-center">
              <a href="#" className="block">
                Services
              </a>
            </li>
            <li className="flex mt-3 text-white items-center">
              <a href="#" className="block">
                Blog
              </a>
            </li>
            <li className="flex mt-3 text-white items-center">
              <a href="#" className="block">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="relative">
          <h2 className="text-white text-3xl my-4 font-bold before:mt-[35px] after:rounded before:rounded after:mt-[35px] before:w-[85px] before:left-[20px] before:absolute before:bg-white before:h-[4px]  after:w-[15px] after:left-[0px] after:absolute after:bg-white after:h-[4px]">
            Nos services
          </h2>
          <ul>
            <li className="flex mt-3 text-white items-center">
              <a href="#" className="block">
                Web design
              </a>
            </li>
            <li className="flex mt-3 text-white items-center">
              <a href="#" className="block">
                Infographie
              </a>
            </li>
            <li className="flex mt-3 text-white items-center">
              <a href="#" className="block">
                Developpement de sites web
              </a>
            </li>
            <li className="flex mt-3 text-white items-center">
              <a href="#" className="block">
                Developpement d'applications mobiles
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

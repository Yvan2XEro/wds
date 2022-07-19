import Footer from "@components/layouts/Footer";
import Header from "@components/shared/Header";
import { Input, Select } from "@components/shared/Input";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import countries from "../../common/resources/countries.json";

const Contacts: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contacts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header title="Contacts" />
        <div className="relative grid grid-cols-1 md:mx-20 md:grid-cols-2">
          <div className="relative min-h-[420px]">
            <motion.div
              animate={{
                transition: { yoyo: Infinity, duration: 3 },
                x: 5,
                rotate: 13,
                y: -10,
              }}
              className="absolute top-[15px] left-[120px] md:left-[180px] flex p-2 border rounded-full bg-[white] drop-shadow-lg w-[250px] h-[250px]"
            >
              <img
                src="https://gitlab.com/uploads/-/system/user/avatar/6049371/avatar.png"
                className="rounded-full"
              />
            </motion.div>
            <motion.div
              animate={{
                transition: { yoyo: Infinity, duration: 3 },
                x: 15,
                rotate: -5,
                y: 26,
              }}
              className="absolute top-[250px] left-[30px] flex p-2 border rounded-full bg-[white] drop-shadow-lg  w-[150px] h-[150px]"
            >
              <img
                src="https://gitlab.com/uploads/-/system/user/avatar/6049371/avatar.png"
                className="rounded-full"
              />
            </motion.div>
            <motion.div
              animate={{
                transition: { yoyo: Infinity, duration: 3 },
                x: 36,
                rotate: 22,
                y: -10,
              }}
              className="absolute top-[-20px] left-[15px] flex p-2 border rounded-full bg-[white] drop-shadow-lg w-[100px] h-[100px]"
            >
              <img
                src="https://gitlab.com/uploads/-/system/user/avatar/6049371/avatar.png"
                className="rounded-full"
              />
            </motion.div>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;

const ContactForm = () => {
  const [country, setCountry] = useState("");
  return (
    <form className="relative container">
      <div className="sm:px-8">
        <div className="md:flex md:justify-between">
          <Input
            label="Nom"
            placeholder="John"
            value=""
            type="text"
            id="nom"
            className="md:flex-1 md:w-72"
            onChange={() => {}}
          />
          <Input
            label="Prenom"
            placeholder="Doe"
            value=""
            className="md:flex-1 md:w-72"
            type="text"
            id="lastName"
            onChange={() => {}}
          />
        </div>
        <div className="md:flex md:justify-between">
          <Input
            label="Email"
            type="email"
            placeholder="Doe"
            value=""
            className="md:flex-1 md:w-72"
            id="lastName"
            onChange={() => {}}
          />
          <Input
            label="Telephone"
            type="tel"
            placeholder="+237 123456789"
            value=""
            className="md:flex-1 md:w-72"
            id="tel"
            onChange={() => {}}
          />
        </div>
        <div className="md:flex md:justify-between">
          <Input
            label="Titre du projet"
            type="string"
            placeholder="Site de vente"
            value=""
            className="md:flex-1 md:w-72"
            id="project"
            onChange={() => {}}
          />
          <Select
            className="md:flex-1 md:w-72"
            label="Type de service"
            value=""
            options={[
              { label: "Web", value: "web" },
              { label: "Mobile", value: "mobile" },
            ]}
            onChange={() => {}}
          />
        </div>
        <div className="md:flex md:justify-between">
          <Input
            label="Budget estimé"
            placeholder="700 000 FCFA"
            value=""
            className="md:flex-1 md:w-72"
            id="project"
            onChange={() => {}}
          />
          <Select
            className="md:flex-1 md:w-72"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            label="Pays"
            value={country}
            options={countries.map((c) => ({
              label: c.country,
              value: c.country,
            }))}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={10}
            cols={10}
            placeholder="Votre message"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-primary-300 block w-full p-2.5"
          />
        </div>
        <button type="submit" className="btn-primary">
          Soumettre
        </button>
      </div>
    </form>
  );
};

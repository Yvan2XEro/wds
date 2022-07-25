import React, { useEffect, useState } from "react";
import { Input, Select } from "../Input";
import { SERVICES_DATA } from "../../../../pages/services";
import countries from "../../../resources/countries.json";
import Link from "next/link";
import { MdEmail, MdOutlineMarkEmailRead } from "react-icons/md";
import { CgPhone } from "react-icons/cg";
import emailjs from "@emailjs/browser";
import { AiOutlineWarning } from "react-icons/ai";

const ContactForm = ({ selectedService }: { selectedService: number }) => {
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState(
    SERVICES_DATA.find(({ id }) => id === selectedService)?.title
  );
  const [firstName, setFirstName] = useState("");
  const [budget, setBudget] = useState("");
  const [project, setProject] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const SERVICE_ID = "service_1syyk2h";
  const TEMPLATE_ID = "template_42bdceo";
  const PUBLIC_KEY = "NXr3r9hwtu_CB9Lvn";
  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!email || !message || !firstName || !phone || !country || !service) {
      setError("Veuillez remplir tous les champs");
      return;
    }
    console.log("yoo");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setSuccess("Votre message a bien été envoyé!");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <form className="relative" onSubmit={sendEmail}>
      <div className="sm:px-8">
        <h2 className="text-4xl sm:text-3xl">Email et Telephone</h2>
        <div className="flex flex-col items-start mt-2">
          <Link href="mailto:wds@admin.com" className="block">
            <a className="text-xl flex items-center">
              <MdEmail className="text-2xl text-primary-500 inline-block mr-2" />
              wds@admin.com
            </a>
          </Link>
          <div className="flex items-center text-xl">
            <CgPhone className="text-2xl text-primary-500 inline-block mr-2" />
            <span>+237 838 388 838</span>
          </div>
        </div>
        <h2 className="text-4xl sm:text-3xl mt-4">Travailler avec nous</h2>
        <div className="md:flex md:justify-between">
          <Input
            label="Nom"
            placeholder="John"
            value={firstName}
            type="text"
            name="first_name"
            id="nom"
            className="md:flex-1 md:w-72"
            onChange={({ target }) => setFirstName(target.value)}
          />
          <Input
            label="Prenom"
            placeholder="Doe"
            name="last_name"
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
            name="email"
            placeholder="Doe"
            value={email}
            className="md:flex-1 md:w-72"
            id="lastName"
            onChange={({ target }) => setEmail(target.value)}
          />
          <Input
            label="Telephone"
            type="tel"
            placeholder="+237 123456789"
            name="phone"
            value={phone}
            className="md:flex-1 md:w-72"
            id="tel"
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <div className="md:flex md:justify-between">
          <Input
            label="Titre du projet"
            type="string"
            name="project"
            placeholder="Site de vente"
            value={project}
            className="md:flex-1 md:w-72"
            id="project"
            onChange={({ target }) => setProject(target.value)}
          />
          <Select
            className="md:flex-1 md:w-72"
            label="Type de service"
            name="service"
            value={service}
            onChange={({ target }) => setService(target.value)}
            options={[
              {
                label: "Selectionner un service...",
                value: "",
              },
              ...SERVICES_DATA.map((s) => ({
                label: s.title,
                value: s.title,
              })),
            ]}
          />
        </div>
        <div className="md:flex md:justify-between">
          <Input
            label="Budget estimé"
            placeholder="700 000 FCFA"
            value={budget}
            name="budget"
            className="md:flex-1 md:w-72"
            id="project"
            onChange={({ target }) => setBudget(target.value)}
          />
          <Select
            className="md:flex-1 md:w-72"
            label="Pays"
            name="country"
            value={country || undefined}
            onChange={({ target }) => setCountry(target.value)}
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
            value={message}
            onChange={({ target }) => setMessage(target.value)}
            name="message"
            cols={10}
            placeholder="Votre message"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-primary-300 block w-full p-2.5"
          />
        </div>
        {error && (
          <p className="text-white bg-red-500 mt-2 rounded-lg p-2 text-sm">
            <AiOutlineWarning className="text-xl inline-block mr-2 text-white" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
          </p>
        )}

        {success && (
          <p className="text-white bg-green-500 mt-2 rounded-lg p-2 text-sm">
            <MdOutlineMarkEmailRead className="text-xl inline-block mr-2 text-white" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
          </p>
        )}
        <button type="submit" className="btn-primary">
          Soumettre
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

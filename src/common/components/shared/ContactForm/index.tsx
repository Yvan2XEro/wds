import React, { useEffect, useState } from "react";
import { Input, Select } from "../Input";
import { SERVICES_DATA } from "../../../../pages/services";
import countries from "../../../resources/countries.json";

const ContactForm = ({ selectedService }: { selectedService: number }) => {
  const [country, setCountry] = useState("");
  const [service, setService] = useState(selectedService);
  useEffect(() => {
    setService(selectedService);
  }, [selectedService]);
  return (
    <form className="container relative">
      <div className="sm:px-8">
        <h2>Dites nous en quoi est ce qu'on peut vous aider</h2>
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
            value={service}
            options={[
              {
                label: "Selectionner un service...",
                value: "",
              },
              ...SERVICES_DATA.map((s) => ({
                label: s.title,
                value: s.id,
              })),
            ]}
            onChange={({ target }) => setService(parseInt(target.value))}
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

export default ContactForm;

import React, { createContext, useContext, useState } from "react";
import { Person, ContextValues } from "../types";
import Header from "../components/Header";
import slug  from 'slug';

const AppContext = createContext({});

export const useAppContext = () => useContext<any>(AppContext);

type AppContextType = {
    children: React.ReactNode;
};

const fetchPeople = fetch("https://swapi.dev/api/people/").then((response) =>
  response.json()
);
const fetchPlanets = fetch("https://swapi.dev/api/planets/").then(
  (response) => response.json()
);
const fetchSpecies = fetch("https://swapi.dev/api/species/").then(
  (response) => response.json()
);

export const AppProvider = ({ children }: AppContextType) => {
  const [data, setData] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  const getInfo = () => {
    Promise.all([fetchPeople, fetchPlanets, fetchSpecies])
      .then(([people, planets, species]) => {
        const fullData = people.results.map((person: Person, index: number) => {
          return {
            name: person.name,
            eye_color: person.eye_color,
            hair_color: person.hair_color,
            skin_color: person.skin_color,
            birth_year: person.birth_year,
            specie: species.results[index].name,
            planet: planets.results[index].name,
            slug: slug(person.name),
          };
        });
        setData(fullData);
        setLoading(false);
      })
      .catch(() => {
        setError("Fail to Load Data");
        setLoading(false);
      });
  }

  const getCharacterInfo = (slug: string) => {
    return data.find((person) => person.slug === slug);
  }

  const contextValues: ContextValues = {
    data,
    getInfo,
    error,
    loading,
    getCharacterInfo
  };


  return (
    <AppContext.Provider value={contextValues}>
    <Header />
      {children}
    </AppContext.Provider>
  );
};
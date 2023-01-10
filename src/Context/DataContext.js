import React, { createContext, useState, useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
import Error from "../Components/Error"
import { API_URL } from "@env"

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { data, error, loading } = useFetch(`${API_URL}/districts/2`)

  console.log('data', data);

  if (error) return <Error error={error} />

  const value = { data, loading }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

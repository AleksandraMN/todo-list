import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FilterContext = createContext({});

export const FilterProvider = ({ children }) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [isAlphabetSorting, setIsAlphabetSorting] = useState(false);

  return (
    <FilterContext.Provider
      value={{
        searchPhrase,
        setSearchPhrase,
        isAlphabetSorting,
        setIsAlphabetSorting,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

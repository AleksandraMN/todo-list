
const initialState = {
  searchPhrase: '',
  isAlphabetSorting: false,
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_PHRASE':
      return { ...state, searchPhrase: action.payload };
    case 'SET_ALPHABET_SORTING':
      return { ...state, isAlphabetSorting: action.payload };
    default:
      return state;
  }
};

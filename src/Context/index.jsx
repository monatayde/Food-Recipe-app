import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchPara, setSearchPara] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteItem, setFavoriteItem] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchPara}`
      );
      const data = await response.json();
      console.log(data);
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);

        setLoading(false);
        setSearchPara("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchPara("");
    }
  }

  function handleAddToFav(fav) {
    let favList = [...favoriteItem];
    const index = favList.findIndex((item) => item.id === fav.id);
    if (index === -1) {
      favList.push(fav);
    } else {
      favList.splice(index);
    }
    setFavoriteItem(favList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchPara,
        loading,
        recipeList,
        setSearchPara,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFav,
        favoriteItem
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

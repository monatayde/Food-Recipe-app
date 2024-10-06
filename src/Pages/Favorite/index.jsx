import React from "react";
import { GlobalContext } from "../../Context";
import { useContext } from "react";
import RecipeItem from "../../Components/RecipeItem";


function Favorite(){
    const { favoriteItem } = useContext(GlobalContext);

  
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteItem && favoriteItem.length > 0 ? (
        favoriteItem.map((item) => 
          (<RecipeItem key={item.id} item={item} />)
        )
      ) : (
        <div>
          {" "}
          <p className="lg:text-4xl text-xl text-center text-balck font-extrabold">
            Nothing is added
          </p>
        </div>
      )}
    </div>
  );
}


export default Favorite;
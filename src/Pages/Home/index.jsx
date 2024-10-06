import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
import RecipeItem from "../../Components/RecipeItem";

function Home() {
  const { loading, recipeList } = useContext(GlobalContext);

  if (loading) return <div> Loading please wait ....</div>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => 
          (<RecipeItem key={item.id} item={item} />)
        )
      ) : (
        <div>
          {" "}
          <p className="lg:text-4xl text-xl text-center text-balck font-extrabold">
            Search Something else
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;

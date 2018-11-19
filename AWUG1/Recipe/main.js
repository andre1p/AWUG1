const tatin = {
    image: "tatin.jpg",
    title: "Apple Tarte Tatin",
    servings: 6,
    minutes: 50,
    difficulty: "Medium",
    ingredients: [
        { name: "tablespoons water", amount: 3 },
        { name: "cup white sugar", amount: "3/4" },
        { name: "large Granny Smith apples", amount: 3 },
        { name: "tablespoon all-purpose flour", amount: 1 },
        { name: "9-inch unbaked pie crust", amount: 1 },
    ],
    steps: [
        "Preheat oven to 425 degrees F (220 degrees C).",
        "Coat a 10-inch oven-proof skillet with butter. Sprinkle sugar evenly over the top of the butter.",
        "Place apple quarters, rounded sides down, on top of the butter and sugar in a circular pattern.",
        "Place skillet over medium-high heat and cook until butter melts and sugar dissolves and begins to caramelize. Continue to cook until apples soften and caramel begins to brown, 10 to 12 minutes. Remove from heat.",
        "Sprinkle work surface with flour and roll pie dough into an 11-inch circle. Pinch edge to create a ruffle around crust.",
        "Place crust on top of apples and tuck in edges around apples.",
        "Bake in the preheated oven until crust is golden brown, about 20 minutes. Allow to cool for 5 minutes. Place a plate over the top of the pan and carefully invert to release tarte from the pan. Scrape any remaining apples stuck to the pan back on top of crust.",
    ]
};

const RecipeText = ({ recipe }) =>
    <div className="header">
        <h1>{recipe.title} &#9760;</h1>
        &#9733; &#9734; &#9734; &#9734; &#9734; 
        <p>
            {recipe.minutes} minutes
            <span>·</span>
            {recipe.servings} servings
            <span>·</span>
            {recipe.difficulty} difficulty
        </p>
    </div>;

const Ingredients = ({ ingredients }) =>
    <div className="ingredients">
        <h2>Ingredients</h2>
        <table>
            <tbody>
                {ingredients.map((ingr, index) =>
                    <tr key={index}><td>{ingr.amount}</td><td>{ingr.name}</td></tr>)}
            </tbody>
        </table>
    </div>;

const Directions = ({ directions }) =>
    <div className="directions">
        <h2>Directions</h2>
        <ol>
            {directions.map((step, index) =>
                <li key={index}>{step}</li>)}
        </ol>
    </div>;


const Recipe = ({ recipe }) =>
    <div className="recipe">
        <img src={recipe.image} />
        <RecipeText recipe={recipe} />
        <Ingredients ingredients={recipe.ingredients} />
        <Directions directions={recipe.steps} />
    </div>;

ReactDOM.render(
    <Recipe recipe={tatin} />,
    document.getElementById("root")
);
fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then((response) =>
    response.json()
).then((data) => {
    const pokemonList = data.results;
    pokemonList.forEach((pokemon) => {
        console.log(pokemon.name);
    });
}).catch((error) => {
    console.error("Error al obtener los datos de la PokeAPI:", error);
});
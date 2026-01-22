import loginImg from '../../assets/projects/pokemon/login.PNG';
import allPokemonsImg from '../../assets/projects/pokemon/all-pokemons.PNG';
import allPokemonsSelectedImg from '../../assets/projects/pokemon/all-pokemons-selected.PNG';
import allPokemonsSelectedCompareImg from '../../assets/projects/pokemon/all-pokemons-selected-compare.PNG';
import likePokemonImg from '../../assets/projects/pokemon/like-pokemon.PNG';
import dislikePokemonImg from '../../assets/projects/pokemon/dislike-pokemon.PNG';
import personalInfoWithLikesImg from '../../assets/projects/pokemon/personal-info-with-likes.PNG';
import personalInfoWithDislikeImg from '../../assets/projects/pokemon/personal-info-with-dislike.PNG';

const pokemon = {
    title: "Pokemon Collector App",
    imgSrc: loginImg,
    description: "<i>I created this app to learn laravel inertia</i>. A web application that allows users to browse, like, and dislike Pokemon from the PokeAPI, " + "track their preferences, and view personal information with likes and dislikes. " +
        " Built with <strong>Vue.js</strong>, <strong>Laravel Inertia</strong>, <strong>Tailwind CSS</strong>, and <strong>Vite</strong>.",
    previewImages: [
        loginImg,
        allPokemonsImg,
        allPokemonsSelectedImg,
        allPokemonsSelectedCompareImg,
        likePokemonImg,
        dislikePokemonImg,
        personalInfoWithLikesImg,
        personalInfoWithDislikeImg,
    ],
}

export default pokemon
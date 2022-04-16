let isShiny=false;

function buttonClick(){
    if(isShiny==false){
        document.getElementById("imgPokemon").src="https://static6.minhalojanouol.com.br/pokestoprodutos/biblioteca/Produto_272907//20200121203443_1604998396.jpg";
        isShiny=true;
    }
    else{
        document.getElementById("imgPokemon").src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png";
        isShiny=false;
    }
}
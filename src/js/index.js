/* quando clicar no pokemom da listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado

pra isso temos que trabalhar com dois elementos :
1 - listagem
2 - cartao do pokemom

precisamos criar duas variaveis no JS pra trabaçahr com os elementos da tela

vamos precisar trabalhar com um evemmnto de clquei feito pelo usuario de pokemons

- remover a classe aberto só do cartao que esta aberto
- ao clicar em um pokemon da listagem pegamos o id desse pokemom pra saber call cartao mostrar

-remover a classe ativo que marca o pokemon selecinado
-adicionar a classe ativo no item da lista selecionado */

// precisamos criar duas variaveis 


const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCards = document.querySelectorAll('cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    // evento de click
    pokemon.addEventListener('click', () => {


        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')


        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById('cartao-'+ idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')


        const PokemonAtivoNaListagem = document.querySelector('.ativo')
        PokemonAtivoNaListagem.classList.remove('ativo')

        const PokemonSelecionadoNalistagem = document.getElementById(idPokemonSelecionado)
        PokemonSelecionadoNalistagem.classList.add('ativo')
    })    
} )



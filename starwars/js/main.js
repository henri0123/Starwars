const limit = 10;
const offset = 0;
const url = `https://swapi.dev/api/people/`;

function convertPersonagemToLi(personagem){
    return `
    <li class="personagem">
        <div class="number">#001</div>
        <h4 class="name">${personagem.name}</h4>
        <div class="detail">
            <div class="type">Storm Trooper</div>
            <div class="type">Numero:</div>
        </div>
        <img src=>
            </div>
        </li>
    `
}

const personagemList = document.getElementById("personagemList");

fetch(url)
    .then((response) => response.json())
    .then((listaPersonagem)=> listaPersonagem.results)
    .then((list)=> personagemList.innerHTML = list.map(convertPersonagemToLi)).join("")
    .catch((error) => console.log(error));
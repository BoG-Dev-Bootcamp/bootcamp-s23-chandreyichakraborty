import figlet from "figlet";
const { textSync } = figlet
import axios from "axios";

let url = 'https://pokeapi.co/api/v2/pokemon/'+Math.floor(Math.random()*1008 + 1)
axios.get(url)
  .then(function (response) {
    let name = response.data.name
    console.log(textSync(name, {
        font: 'Cosmike',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
    }));
  })
  .catch(function (error) {
    console.log(error);
  });
import figlet from "figlet";
import axios from "axios";

async function getPokemon() {
  let url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random()*1008 + 1)
  const response = await axios.get(url)
  let name = response.data.name
  figlet.text(name, {
    font: 'Cosmike',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true
  }, function(error, data) {
    if (error) {
        console.log('Text did not load');
        console.dir(error);
        return;
    }
    console.log(data);
  });
}

try {
    await getPokemon()
} catch (error) {
    console.log("No Pokemon Found")
    console.dir(error)
}
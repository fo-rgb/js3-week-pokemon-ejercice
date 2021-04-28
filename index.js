 window.navigator.geolocation.getCurrentPosition(result =>{
  
   const url =new URL (`https://pokeapi.co/api/v2/pokemon/ditto`)
    

//******************************************* */
const btn1 = document.createElement('button')
btn1.style.fontSize = "15px"
btn1.className = "btn-class";
btn1.style.background= "red"
btn1.innerText = "Buscar Pokemon"
document.body.appendChild(btn1)

let imagesPoke = document.createElement('img')
let inputPoke = document.createElement(`input`)
document.body.appendChild(inputPoke)

var newSharBtn = document.createElement(`button`)
document.body.appendChild(newSharBtn)
newSharBtn.innerText = "Nueva busqueda"

let count = 320


btn1.addEventListener('click', () => {
   
   let parafo = document.createElement(`p`)
   parafo.innerText = inputPoke.value
   document.body.appendChild(parafo)
})
newSharBtn.addEventListener("click",(event) =>{

   event.preventDefault()
   
   fetch(url)
   .then(response => response.json())
   .then( json =>{
      const pokemon = json.data[0]
      const inputPoke = pokemon.id
      const urlPoke = (`https://pokeapi.co/api/v2/ability/${inputPoke.value}`)
      const namePoke = pokemon.name
      
      
      
      const namePokeDiv = document.getElementById(`namePoke`)
      
      const urlPokeDiv = document.getElementById(`urlPoke`)
      
      namePokeDiv.innerText = `nombre of pokemon : ${namePoke}`
      
      urlPokeDiv.innerText = `url of pokemon : ${urlPoke}`
      
      
      
      imagesPoke.src = pokemon.sprite.front_default
      nameYiId = `${pokemon.id} ${pokemon.name}`
      weight.innerText = `weight : <strong>0,${pokemon.weight} kg.</strong>`
      height.innerText = `height : ${pokemon.height}0 cm`
      
      const descripField = document.getElementById(`descripField`)
      document.body.appendChild(descripField)


    if (count === 327 ) {
      clearInterval(adSetInter)
       
    }
    count += 10;

    let imagDiv = document.createElement(`h1`)
    imagDiv.innerHTML = `https://pokeapi.co/api/v2/ability?${inputPoke.value}`



})


fetch(` https://pokeapi.co/api/v2/type/${inputPoke.value}`)
.then(response => response.json())
.then(tipo =>{
   tipo.innerText = tipo.name
   
})

fetch(`  https://pokeapi.co/api/v2/characteristic/${inputPoke.value}`)
.then(response => response.json())
.then(char =>{
   let descrSpanish = char.descriptions.find(inputPoke => inputPoke.language.name)
   descripField.innerText = descrSpanish.inputPoke
})

})




// function funPokemon() {
})      
      
      
   //    imagesPoke.src = pokemon.sprite.front_default
   //    nameYiId = `${pokemon.id} ${pokemon.name}`
   //    weight.innerText = `weight : <strong>0,${pokemon.weight} kg.</strong>`
   //    height.innerText = `height : ${pokemon.height}0 cm`
      
      
   // }
   
  



// let adSetInter = setInterval(() => btn1,1000)



//***************************************************/


// let pRepuesta = document.getElementById('idRespues')


// document.createElement('input').addEventListener('input',(e) =>{
   // pRepuesta.innerText=e.target.value
   
   // })
   
   
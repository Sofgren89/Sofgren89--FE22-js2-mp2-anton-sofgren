import { tamagotchi } from "./modules/tamagotchi.js"

const newTamagotchi = document.getElementById('submitButton')



newTamagotchi.addEventListener('click',(event)=>{
  event.preventDefault()
  const select = document.getElementById("select");


  
  const inputName = document.getElementById ('name').value
  const selectTamagotchi = document.getElementById('select').value

  const divContainer = document.createElement('div')
  divContainer.setAttribute("id", "container")
  
  document.body.append(divContainer)

  const title = `Selected Tamagotchi: ${inputName} the ${selectTamagotchi}`
  divContainer.append(title)
 
 
  
  
  let levelForHunger = document.createElement('p')
  divContainer.append(levelForHunger)
  
  let levelForHappiness = document.createElement('p')
  divContainer.append(levelForHappiness)
  
  const getSetTamagotchi = new tamagotchi()
  getSetTamagotchi.setHappiness(11)
  getSetTamagotchi.setHunger(10)
  getSetTamagotchi.getHappiness()
  getSetTamagotchi.getHunger()
  
  let currentStarve = getSetTamagotchi.getHunger()
  let currentHappiness = getSetTamagotchi.getHappiness()


  let buttonForFood = document.createElement('button')
  buttonForFood.innerText = 'Feed'
  divContainer.append(buttonForFood)


  let buttonForHappiness = document.createElement('button')
  buttonForHappiness.innerText = 'Play'
  divContainer.append(buttonForHappiness)

  

  
  levelForHunger.innerHTML = `Hunger: ${currentStarve}`
  levelForHappiness.innerHTML = `Happiness: ${currentHappiness -1}`
  
  const intervalForStarve = setInterval(function () {
    buttonForFood.addEventListener('click',()=>{
          if(currentStarve >= 11){

          }
          else {
            currentStarve++
          }
        
    })
    getSetTamagotchi.setHunger(currentStarve --)
    levelForHunger.innerHTML = `Hunger: ${currentStarve}`
    

    if(currentStarve <= 0) {
      let deadTamagotchiMessage = document.createElement('h1')
      deadTamagotchiMessage.innerHTML = `${inputName} the ${selectTamagotchi} is dead from hunger!`
      deadTamagotchiMessage.style.color='red'
      buttonForFood.disabled = true
      buttonForHappiness.disabled=true
      clearInterval(intervalForHappiness);
    

      clearInterval(intervalForStarve)
      document.body.append(deadTamagotchiMessage)
    }
    },2000)


  const intervalForHappiness = setInterval(function () {
    buttonForHappiness.addEventListener('click',()=>{
      if(currentHappiness >= 11){

      }
      else {
        currentHappiness++
      }
    
})
getSetTamagotchi.setHappiness(currentHappiness --)
      levelForHappiness.innerHTML = `Happiness: ${currentHappiness -1}`
  
    if(currentHappiness <= 1) {
      let happinessDeadMessage = document.createElement('h1')
      happinessDeadMessage.innerHTML = `You didn´t play with your Tamagotchi ${inputName} the ${selectTamagotchi}, and now it´s gone forever:(`
      happinessDeadMessage.style.color='red'
      buttonForHappiness.disabled = true
      buttonForFood.disabled = true
      clearInterval(intervalForStarve);
      clearInterval(intervalForHappiness);
      
      document.body.append(happinessDeadMessage)
    }
    },3000)

})




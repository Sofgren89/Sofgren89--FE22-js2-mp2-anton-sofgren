 export class tamagotchi {
  #name;
  #type;
  #hunger;
  #happiness;
  #alive;
  hp;
  #intervalForStarve;
  #intervalForHappiness;

  constructor(name, type) {
    this.#name = name;
    this.#type = type;
    this.#alive = true;
    this.#hunger = 5; 
    this.#happiness = 5;

    this.#intervalForStarve = setInterval(() => {
      this.decreasingHunger();
    }, 2000);

    this.#intervalForHappiness = setInterval(() => {
      this.decreasingHappiness();
    }, 3000);
  }

    getHunger() {
      return this.#hunger;
    }
  
    getHappiness() {
      return this.#happiness;
    }
  
    setHunger(newHunger) {
      this.#hunger = newHunger;
    }
  
    setHappiness(newHappiness) {
      this.#happiness = newHappiness;
    }
  
    decreasingHunger() {
      this.#hunger--
      
  
      if(this.#hunger < 1 && this.#hunger === 0) {
        clearInterval (this.#intervalForStarve)
        alert("RIP")
        return;
      }
  
  
  
    }
    decreasingHappiness() {
      if (this.#happiness < 1) return;
  
      this.#happiness--;
      
      if (this.#happiness < 1) {
        clearInterval (this.#intervalForHappiness)
       
      }
    }
    
  }


 
  











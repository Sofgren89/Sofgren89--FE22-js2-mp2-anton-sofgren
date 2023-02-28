 export class tamagotchi {
    #name;
    #type;
    #hunger;
    #happiness;
    #alive;
    hp;
    constructor(name, type) {
      this.#name = name;
      this.#type = type;
      this.#alive = true;
      this.#hunger = 5; 
      this.#happiness = 5;
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
      let container = document.getElementById('container')
      let p = document.createElement('p')
      p.innerText = `${this.#hunger}`
      container.appendChild(p)
  
      if(this.#hunger < 1 && this.#hunger === 0) {
        alert("RIP")
        return;
      }
  
  
  
    }
    decreasingHappiness() {
      if (this.#happiness < 1) return;
  
      this.#happiness--;
      
      if (this.#happiness < 1) {
        confirm("Happiness reached 0");
      }
    }
  }


 
  










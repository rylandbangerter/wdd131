const character = {
  name: "Snortleblat",
  class: "Swamp Beat Diplomat",
  level: 5,
  health: 100,
  image: "https://andejuli.github.io/img/snortleblat.png",
  attacked() {
    if (this.health >= 20) {
      this.level -= 1;
      this.health -= 20;
    } else {
      this.health = 0;
      alert("Character Died");
    }
  },
  levelUp() {
    this.level += 1;
    this.health += 20;
  }
};

// Create and render character card dynamically
const container = document.body; // or use another container if preferred
const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
  <img class="image" src="${character.image}" alt="${character.name}">
  <div class="name">${character.name}</div>
  <div class="stats">
    <p><strong>Class:</strong> <span id="charClass">${character.class}</span></p>
    <p><strong>Level:</strong> <span id="charLevel">${character.level}</span></p>
    <p><strong>Health:</strong> <span id="charHealth">${character.health}</span></p>
  </div>
  <div class="buttons">
    <button id="attacked">Attacked</button>
    <button id="levelup">Level Up</button>
  </div>
  <p id="log"></p>
`;

container.appendChild(card);

// Add interactivity
function updateCharacterDisplay() {
  document.getElementById("charClass").textContent = character.class;
  document.getElementById("charLevel").textContent = character.level;
  document.getElementById("charHealth").textContent = character.health;
}

document.getElementById("attacked").addEventListener("click", () => {
  character.attacked();
  updateCharacterDisplay();
  document.getElementById("log").textContent = `${character.name} got attacked!`;
});

document.getElementById("levelup").addEventListener("click", () => {
  character.levelUp();
  updateCharacterDisplay();
  document.getElementById("log").textContent = `${character.name} leveled up!`;
});

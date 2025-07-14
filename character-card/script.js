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
      alert("Character Died");
    }
  },
  levelUp() {
    this.level += 1;
    this.health += 20;
  },
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".image").src = character.image;
  document.querySelector(".name").textContent = character.name;
  document.getElementById("class").textContent = character.class;
  document.getElementById("level").textContent = character.level;
  document.getElementById("health").textContent = character.health;

  document.getElementById("attacked").addEventListener("click", () => {
    character.attacked();
    document.getElementById("level").textContent = character.level;
    document.getElementById("health").textContent = character.health;
    document.getElementById(
      "log"
    ).textContent = `${character.name} got attacked!`;
  });

  document.getElementById("levelup").addEventListener("click", () => {
    character.levelUp();
    document.getElementById("level").textContent = character.level;
    document.getElementById("health").textContent = character.health;
    document.getElementById(
      "log"
    ).textContent = `${character.name} leveled up!`;
  });
});

// Quote of the Day Script for BookNook

const quotes = [
  // Shatter Me Series
  "“I spent my life folded between the pages of books.” – Tahereh Mafi, Shatter Me",
  "“My touch is lethal. My touch is power.” – Tahereh Mafi, Shatter Me",
  "“I am not insane. I'm just a little damaged.” – Tahereh Mafi, Unravel Me",
  "“I am enough, just as I am.” – Tahereh Mafi, Unravel Me",
  "“Hope is a pocket of possibility.” – Tahereh Mafi, Ignite Me",
  "“He is a dangerous collection of broken pieces.” – Tahereh Mafi, Ignite Me",
  "“This world is too cruel to girls.” – Tahereh Mafi, Restore Me",
  "“I am a symphony of one.” – Tahereh Mafi, Restore Me",
  "“Love is not a weakness.” – Tahereh Mafi, Defy Me",
  "“We were just children playing at being adults.” – Tahereh Mafi, Defy Me",
  "“You can’t erase me.” – Tahereh Mafi, Imagine Me",
  "“Sometimes survival is the only thing that matters.” – Tahereh Mafi, Imagine Me",

  // The Inheritance Games Series
  "“Everything’s a game, Avery Grambs.” – Jennifer Lynn Barnes, The Inheritance Games",
  "“Secrets are power.” – Jennifer Lynn Barnes, The Inheritance Games",
  "“The truth is a knife.” – Jennifer Lynn Barnes, The Hawthorne Legacy",
  "“Money can buy almost anything.” – Jennifer Lynn Barnes, The Hawthorne Legacy",
  "“I am not a pawn.” – Jennifer Lynn Barnes, The Final Gambit",
  "“Checkmate.” – Jennifer Lynn Barnes, The Final Gambit",

  // Powerless Series
  "“In a world that wants to break you, the bravest thing is to keep going.” – Lauren Roberts, Powerless",
  "“The powerless must find strength where the powerful forget to look.” – Lauren Roberts, Powerless",
  "“She was the spark they feared.” – Lauren Roberts, Reckless",
  "“Even broken wings can fly.” – Lauren Roberts, Reckless",
  "“Fear does not make you weak.” – Lauren Roberts, Fearless",
  "“This fire inside me will not burn out.” – Lauren Roberts, Fearless",

  // Percy Jackson Series
  "“If my life is going to mean anything, I have to live it myself.” – Rick Riordan, The Lightning Thief",
  "“With great power... comes great need to take a nap.” – Rick Riordan, The Lightning Thief",
  "“Families are messy. Immortal families are eternally messy.” – Rick Riordan, The Sea of Monsters",
  "“You shall go west, and face the god who has turned.” – Rick Riordan, The Sea of Monsters",
  "“Hope survives best at the hearth.” – Rick Riordan, The Titan's Curse",
  "“The real world is where the monsters are.” – Rick Riordan, The Titan's Curse",
  "“Family, Luke. You promised.” – Rick Riordan, The Battle of the Labyrinth",
  "“In every life there is a moment when everything changes.” – Rick Riordan, The Battle of the Labyrinth",
  "“You are not the hero.” – Rick Riordan, The Last Olympian",
  "“I am the hero of this story.” – Rick Riordan, The Last Olympian",

  // Harry Potter Series
  "“It does not do to dwell on dreams and forget to live.” – J.K. Rowling, The Sorcerer's Stone",
  "“To the well-organized mind, death is but the next great adventure.” – J.K. Rowling, The Sorcerer's Stone",
  "“When in doubt, go to the library.” – J.K. Rowling, The Chamber of Secrets",
  "“The Chamber of Secrets has been opened.” – J.K. Rowling, The Chamber of Secrets",
  "“Happiness can be found even in the darkest of times.” – J.K. Rowling, The Prisoner of Azkaban",
  "“I solemnly swear I am up to no good.” – J.K. Rowling, The Prisoner of Azkaban",
  "“If you want to know what a man’s like, take a good look at how he treats his inferiors.” – J.K. Rowling, The Goblet of Fire",
  "“Dark and difficult times lie ahead.” – J.K. Rowling, The Goblet of Fire",
  "“The world isn’t split into good people and Death Eaters.” – J.K. Rowling, The Order of the Phoenix",
  "“Youth cannot know how age thinks and feels.” – J.K. Rowling, The Order of the Phoenix",
  "“It’s the unknown we fear.” – J.K. Rowling, The Half-Blood Prince",
  "“We are only as strong as we are united.” – J.K. Rowling, The Half-Blood Prince",
  "“Do not pity the dead, Harry.” – J.K. Rowling, The Deathly Hallows",
  "“After all this time? Always.” – J.K. Rowling, The Deathly Hallows",

  // Warrior Cats
  "“You cannot live with a paw in each world.” – Erin Hunter, Fire and Ice",
  "“There is always a choice.” – Erin Hunter, Into the Wild",
  "“Some secrets are better left in the shadows.” – Erin Hunter, Forest of Secrets",
  "“We must fight for what we believe in.” – Erin Hunter, Rising Storm",
  "“The forest is in danger.” – Erin Hunter, A Dangerous Path",
  "“This is our darkest hour.” – Erin Hunter, The Darkest Hour",

  // A Good Girl's Guide to Murder Series
  "“The people you love weren’t algebra.” – Holly Jackson, A Good Girl's Guide to Murder",
  "“A good girl's guide to murder, or a girl's guide to being murdered?” – Holly Jackson, A Good Girl's Guide to Murder",
  "“Some secrets should stay buried.” – Holly Jackson, Good Girl, Bad Blood",
  "“Truth is a matter of perspective.” – Holly Jackson, Good Girl, Bad Blood",
  "“We are all monsters in someone’s story.” – Holly Jackson, As Good As Dead",
  "“Justice doesn’t always look like what we expect.” – Holly Jackson, As Good As Dead",

  // The Bodyguard
  "“Protecting someone sometimes means letting them fight their own battles.” – Katherine Center, The Bodyguard",
  "“Sometimes the safest place is right in the chaos.” – Katherine Center, The Bodyguard"
];

const quoteElement = document.getElementById('dailyQuote');

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

window.addEventListener('DOMContentLoaded', () => {
  if (quoteElement) displayRandomQuote(); 
  renderBooks(); // always run this
});


const bookGrid = document.getElementById('bookGrid');

const books = [
  "Shatter Me", "Unravel Me", "Ignite Me", "Restore Me", "Defy Me", "Imagine Me",
  "The Inheritance Games", "The Hawthorne Legacy", "The Final Gambit",
  "Powerless", "Reckless", "Fearless",
  "The Lightning Thief", "The Sea of Monsters", "The Titan's Curse", "The Battle of the Labyrinth", "The Last Olympian",
  "The Sorcerer's Stone", "The Chamber of Secrets", "The Prisoner of Azkaban", "The Goblet of Fire", "The Order of the Phoenix", "The Half-Blood Prince", "The Deathly Hallows",
  "Into the Wild", "Fire and Ice", "Forest of Secrets", "Rising Storm", "A Dangerous Path", "The Darkest Hour",
  "A Good Girl's Guide to Murder", "Good Girl, Bad Blood", "As Good As Dead",
  "The Bodyguard"
];

const genres = {
  "Shatter Me": "Dystopian",
  "Unravel Me": "Dystopian",
  "Ignite Me": "Dystopian",
  "Restore Me": "Dystopian",
  "Defy Me": "Dystopian",
  "Imagine Me": "Dystopian",
  "The Inheritance Games": "Mystery",
  "The Hawthorne Legacy": "Mystery",
  "The Final Gambit": "Mystery",
  "Powerless": "Fantasy",
  "Reckless": "Fantasy",
  "Fearless": "Fantasy",
  "The Lightning Thief": "Fantasy",
  "The Sea of Monsters": "Fantasy",
  "The Titan's Curse": "Fantasy",
  "The Battle of the Labyrinth": "Fantasy",
  "The Last Olympian": "Fantasy",
  "The Sorcerer's Stone": "Fantasy",
  "The Chamber of Secrets": "Fantasy",
  "The Prisoner of Azkaban": "Fantasy",
  "The Goblet of Fire": "Fantasy",
  "The Order of the Phoenix": "Fantasy",
  "The Half-Blood Prince": "Fantasy",
  "The Deathly Hallows": "Fantasy",
  "Into the Wild": "Adventure",
  "Fire and Ice": "Adventure",
  "Forest of Secrets": "Adventure",
  "Rising Storm": "Adventure",
  "A Dangerous Path": "Adventure",
  "The Darkest Hour": "Adventure",
  "A Good Girl's Guide to Murder": "Thriller",
  "Good Girl, Bad Blood": "Thriller",
  "As Good As Dead": "Thriller",
  "The Bodyguard": "Romance"
};

const descriptions = {
  "Shatter Me": "Juliette's touch is fatal. Imprisoned for a murder she never meant to commit, she's offered a deadly opportunity to fight for freedom.",
  "Unravel Me": "Juliette must make impossible choices as war looms and her power becomes harder to control.",
  "Ignite Me": "Juliette is determined to bring down The Reestablishment—starting with the man who nearly destroyed her.",
  "Restore Me": "New responsibilities and buried secrets challenge Juliette as Supreme Commander.",
  "Defy Me": "Juliette and Warner must confront their traumatic pasts as rebellion brews.",
  "Imagine Me": "Juliette is losing control of her powers, and her mind. Will she survive her final test?",

  "The Inheritance Games": "Avery Grambs inherits a billionaire’s fortune—but she has no idea why. Now she’s caught in a deadly puzzle.",
  "The Hawthorne Legacy": "As Avery unravels more clues, she discovers shocking secrets about her own identity.",
  "The Final Gambit": "The clock is ticking as Avery faces the ultimate riddle in the Hawthorne estate.",

  "Powerless": "Paedyn Gray fakes being powerless in a world where powers rule—but one mistake reveals everything.",
  "Reckless": "On the run and hunted, Paedyn must fight for freedom and survival.",
  "Fearless": "Paedyn rises as a symbol of resistance, but the war is far from over.",

  "The Lightning Thief": "Percy Jackson learns he’s the son of Poseidon—and must retrieve Zeus’ stolen lightning bolt.",
  "The Sea of Monsters": "Percy and friends sail into danger to find the Golden Fleece and save Camp Half-Blood.",
  "The Titan's Curse": "A rescue mission turns deadly as ancient forces awaken and gods prepare for war.",
  "The Battle of the Labyrinth": "A war strategy leads Percy deep into the treacherous Labyrinth.",
  "The Last Olympian": "It’s all-out war on Olympus, and Percy must fulfill the prophecy to save the world.",

  "The Sorcerer's Stone": "Harry Potter discovers he’s a wizard—and uncovers the mystery of the Sorcerer’s Stone.",
  "The Chamber of Secrets": "A hidden chamber at Hogwarts unleashes dark forces and petrifies students.",
  "The Prisoner of Azkaban": "Sirius Black escapes from prison—only to reveal truths about Harry’s past.",
  "The Goblet of Fire": "Harry is forced into a dangerous tournament—and uncovers Voldemort’s return.",
  "The Order of the Phoenix": "A secret order forms to resist Voldemort as Harry faces disbelief and loss.",
  "The Half-Blood Prince": "Secrets from Voldemort’s past come to light—and a beloved mentor falls.",
  "The Deathly Hallows": "Harry, Ron, and Hermione leave school behind to destroy the Horcruxes and end the war.",

  "Into the Wild": "Rusty the housecat joins ThunderClan and learns the warrior ways of the forest.",
  "Fire and Ice": "New battles and dark secrets threaten the fragile balance among clans.",
  "Forest of Secrets": "Fireheart must uncover deadly truths hiding in the shadows.",
  "Rising Storm": "Tension rises and betrayals burn as Fireheart fights to save ThunderClan.",
  "A Dangerous Path": "A prophecy and an oncoming threat shake the clan to its core.",
  "The Darkest Hour": "Fireheart must become a leader and unite the clans in their darkest battle yet.",

  "A Good Girl's Guide to Murder": "Pip investigates a cold case for her school project—only to find the killer may still be free.",
  "Good Girl, Bad Blood": "A new mystery emerges, and Pip’s podcast leads her deeper into danger.",
  "As Good As Dead": "Stalked and terrified, Pip must become her own investigator—and her own protector.",

  "The Bodyguard": "Hannah Brooks is hired to protect a movie star—but she may be the one falling for him."
};

function renderBooks() {
  if (!bookGrid) return;
  const genreSelect = document.getElementById('genreFilter');
  const selectedGenre = genreSelect ? genreSelect.value : 'All';
  const filteredBooks = selectedGenre === 'All' ? books : books.filter(title => genres[title] === selectedGenre);
  bookGrid.innerHTML = filteredBooks.map(title => `
    <div class="book-card">
      <h4>${title}</h4>
      <p><strong>Genre:</strong> ${genres[title] || "Unknown"}</p>
      <img src="images/${title.toLowerCase().replace(/ /g, '-')}.webp" alt="${title} cover">
      <p>${descriptions[title] || "No description available."}</p>
      <div class="buttons">
        <button onclick="markBook(this, 'want')">Want to Read</button>
        <button onclick="markBook(this, 'read')">Have Read</button>
      </div>
    </div>
  `).join('');
}



function markBook(button, status) {
  const card = button.closest('.book-card');
  const buttons = card.querySelectorAll('.buttons button');

  buttons.forEach(btn => btn.classList.remove('active'));

  button.classList.add('active');

  card.classList.remove('want', 'read');
  card.classList.add(status);
}

document.addEventListener('change', function (e) {
  if (e.target && e.target.id === 'genreFilter') {
    renderBooks();
  }
});

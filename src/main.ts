import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import type { IPrepare } from "./models/prepare.model";
import type { ICard } from "./models/card.model";

const prepare: IPrepare = {
  cards: [],
  selectedCard_1: null,
  selectedCard_2: null,
  selectedIndex_1: null,
  selectedIndex_2: null,
};
prepare.cards = [];
prepare.progress = 0;
prepare.fullTrack = new Audio("./src/assets/audio/fulltrack.mp3");
prepare.flipAudio = new Audio("./src/assets/audio/flip.mp3");
prepare.goodAudio = new Audio("./src/assets/audio/good.mp3");
prepare.failAudio = new Audio("./src/assets/audio/fail.mp3");
prepare.gameOverAudio = new Audio("./src/assets/audio/game-over.mp3");
prepare.fullTrack.loop = true;

const numberOfCards = 20;
const tempNumbers: number[] = [];
let cardsHtml = "";

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);

  let result: number;
  while (true) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!tempNumbers.includes(result)) {
      break;
    }
  }

  tempNumbers.push(result);
  return result;
};

let isLocked = false;
const toggleFlip = (index: number) => {
  if (isLocked) return;
  // prepare.fullTrack?.play();
  const card = prepare.cards[index];
  if (!card) return;
  if (card.flip !== "" || !card.clickable) return;
  // if (!card.flip && card.clickable) {
  //   flip(card, index);
  //   selectCard(card, index);
  // }
  prepare.fullTrack?.play();
  flip(card, index);
  selectCard(card, index);
};

const flip = (card: ICard, index: number) => {
  prepare.flipAudio?.play();
  if (card) {
    card.flip = card.flip === "" ? "flip" : "";
    const el = document.getElementById(`card-flip-${index}`);
    if (el) {
      el.classList.value = card.flip;
    }
  }
};

const selectCard = (card: ICard, index: number) => {
  if (!prepare.selectedCard_1) {
    prepare.selectedCard_1 = card;
    prepare.selectedIndex_1 = index;
  } else if (!prepare.selectedCard_2) {
    prepare.selectedCard_2 = card;
    prepare.selectedIndex_2 = index;
  }

  if (prepare.selectedCard_1 && prepare.selectedCard_2) {
    isLocked = true;
    if (prepare.selectedCard_1.src === prepare.selectedCard_2.src) {
      prepare.selectedCard_1.clickable = false;
      prepare.selectedCard_2.clickable = false;
      prepare.selectedCard_1 = null;
      prepare.selectedCard_2 = null;
      stopAudio(prepare.failAudio);
      stopAudio(prepare.goodAudio);
      prepare.goodAudio?.play();
      changeProgress();
      checkFinish();
      isLocked = false;
    } else {
      setTimeout(() => {
        stopAudio(prepare.failAudio);
        stopAudio(prepare.goodAudio);
        prepare.failAudio?.play();
        if (prepare.selectedCard_1 && prepare.selectedIndex_1 !== null) {
          flip(prepare.selectedCard_1, prepare.selectedIndex_1);
        }
        if (prepare.selectedCard_2 && prepare.selectedIndex_2 !== null) {
          flip(prepare.selectedCard_2, prepare.selectedIndex_2);
        }
        prepare.selectedCard_1 = null;
        prepare.selectedCard_2 = null;
        isLocked = false;
      }, 1000);
    }
  }
};

const changeProgress = () => {
  const progress =
    (prepare.cards.filter((card) => !card.clickable).length / numberOfCards) *
    100;
  const progressElement = document.getElementById("progress");
  if (progressElement) {
    progressElement.style.width = `${progress.toFixed(0)}%`;
    progressElement.innerHTML = `${progress.toFixed(0)}%`;
  }
};

const checkFinish = () => {
  if (
    prepare.cards.filter((card) => !card.clickable).length === numberOfCards
  ) {
    /* End of Game */
    stopAudio(prepare.fullTrack);
    stopAudio(prepare.failAudio);
    stopAudio(prepare.goodAudio);
    prepare.gameOverAudio?.play();
  }
};

const stopAudio = (audio?: HTMLAudioElement) => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
};

for (let index = 0; index < numberOfCards / 2; index++) {
  prepare.cards.push({
    id: getRandomInt(0, numberOfCards),
    src: `./assets/images/${index}.png`,
    flip: "",
    clickable: true,
    index,
  });
  prepare.cards.push({
    id: getRandomInt(0, numberOfCards),
    src: `./assets/images/${index}.png`,
    flip: "",
    clickable: true,
    index,
  });
}

prepare.cards.sort((a, b) => (a.id > b.id ? 1 : -1));

prepare.cards.forEach((item, index) => {
  cardsHtml += `
  <span class="col-sm-3 col-lg-2">
    <!-- Card Flip -->
    <div class="card-flip">
      <div id="card-flip-${index}">
        <div class="front">
          <!-- front content -->
          <div class="card">
            <img class="card-image" src="./src/assets/back.jpg" alt="Loading ... ">
            <span class="card-content">${index + 1}</span>
          </div>
        </div>
        <div class="back">
          <!-- back content -->
          <div class="card">
            <img src="./src/assets/images/${item.index}.png" alt="Image [100%x180]" style="height: 120px; width: 100%; display: block;">
          </div>
        </div>
      </div>
    </div>
    <!-- End Card Flip -->
  </span>`;
});

const cardsContainer = document.getElementById("cards");
if (cardsContainer) {
  cardsContainer.innerHTML = cardsHtml;
}

document.querySelectorAll(".card-flip").forEach((el, index) => {
  el.addEventListener("click", () => toggleFlip(index));
});

const grid = document.getElementById("patternGrid");
if (grid) {
  const columns = 10;
  const rows = 10;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const cell = document.createElement("div");
      const isEven = (row + col) % 2 === 0;
      cell.style.backgroundImage = isEven
        ? "url(./src/assets/brain.jpg)"
        : "url(./src/assets/lab.jpg)";
      grid.appendChild(cell);
    }
  }
}

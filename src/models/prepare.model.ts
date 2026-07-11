import type { ICard } from "./card.model";

export interface IPrepare {
  cards: ICard[];
  selectedCard_1: ICard | null;
  selectedCard_2: ICard | null;
  selectedIndex_1: number | null;
  selectedIndex_2: number | null;
  progress?: number;
  fullTrack?: HTMLAudioElement;
  flipAudio?: HTMLAudioElement;
  goodAudio?: HTMLAudioElement;
  failAudio?: HTMLAudioElement;
  gameOverAudio?: HTMLAudioElement;
}

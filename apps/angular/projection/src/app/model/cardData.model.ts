import { CardType } from './card.model';

export interface cardDataInterface {
  customClass: string;
  type: CardType | null;
  imageSrc: string;
  addNewItem: () => void;
}

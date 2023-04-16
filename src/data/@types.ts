export interface iCardContent {
  imagePath: string;
  title: string;
  description: string;
}

export interface iCardsInfoProps extends iCardContent {
  key: number;
}

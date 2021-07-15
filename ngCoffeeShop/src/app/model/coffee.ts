interface Size {
  _id?: string;
  sizeCode?: string;
}

interface Review {
  _id?: string;
  name?: string;
  review?: string;
  date?: Date
}

export interface Coffee {
  _id?: string;
  name: string;
  imageUrl?: string;
  description?: string;
  availablity?: boolean;
  sizes?: Size[],
  reviews?: Review[]
}
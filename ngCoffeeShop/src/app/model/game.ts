interface Publisher {
  _id?: string;
  name: string;
  location: {type: string; coordinates: [number, number]}
}

export interface Game {
  _id?: string;
  designers?: string[];
  rate?: number;
  title: string;
  year?: number;
  price?:number;
  minPlayers?: number;
  maxPlayers?: number;
  publisher?: Publisher;
  minAge?: number;
  reviews?: string[]
}
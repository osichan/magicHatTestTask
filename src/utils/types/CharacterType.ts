export default interface CharacterType {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: "Ravenclaw" | "Hufflepuff" | "Slytherin" | "Gryffindor" | "";
  dateOfBirth: string | null;
  yearOfBirth: number | null;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number | null;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

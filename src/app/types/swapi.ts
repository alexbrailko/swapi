export interface Character {
  id: string;
  name: string;
  birthYear: string;
  height: string;
  mass: string;
}

export interface CharacterEdge {
  node: Character;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface CharactersData {
  allPeople: {
    pageInfo: PageInfo;
    edges: CharacterEdge[];
  };
}

export interface CharacterDetailsData {
  person: {
    name: string;
    birthYear: string;
    species: {
      name: string | null;
    } | null;
    homeworld: {
      name: string | null;
    } | null;
    filmConnection: {
      films: Array<{
        title: string;
      }>;
    };
  };
}

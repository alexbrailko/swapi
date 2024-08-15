'use client';

import { FC, useState } from 'react';
import { CharactersData } from '../types/swapi';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { CharacterListCard } from './CharacterListCard';

interface CharacterListProps {
  charactersData: CharactersData;
}

enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc'
}

export const CharacterList: FC<CharacterListProps> = ({ charactersData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Ascending);

  const characters = charactersData?.allPeople.edges.map((edge) => edge.node);

  const filteredCharacters =
    characters &&
    characters
      .filter((char) =>
        char.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOrder === SortOrder.Ascending) {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Star Wars Characters</h1>
      <div className="md:flex mb-3">
        <Input
          type="text"
          placeholder="Search characters..."
          className="w-full p-4 mb-4 border rounded lg:w-[75%]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          className="w-full p-2 mb-4 lg:w-[25%] lg:ml-9"
          onClick={() =>
            setSortOrder(
              sortOrder === SortOrder.Ascending
                ? SortOrder.Descending
                : SortOrder.Ascending
            )
          }
          variant="secondary"
        >
          Sort {sortOrder === SortOrder.Ascending ? 'Descending' : 'Ascending'}
        </Button>
      </div>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCharacters?.map(({ id, name, birthYear, height, mass }) => (
          <CharacterListCard
            key={id}
            id={id}
            name={name}
            birthYear={birthYear}
            height={height}
            mass={mass}
          />
        ))}
      </div>
    </div>
  );
};

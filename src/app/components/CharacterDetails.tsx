'use client';

import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER_DETAILS } from '@/lib/queries';
import Loading from './common/Loading';
import { Card } from './ui/Card';

interface CharacterDetailsProps {
  id: string;
}

const CharacterDetails: FC<CharacterDetailsProps> = ({ id }) => {
  const { data, loading } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id },
    skip: !id
  });

  const person = data?.person;

  if (loading) {
    return <Loading />;
  }

  return (
    <Card className="p-4">
      <h1 className="text-2xl font-bold mb-4">{person.name}</h1>
      <p>Birth Year: {person.birthYear}</p>
      <p>Species: {person.species?.name || 'Human'}</p>
      <p>Homeworld: {person.homeworld?.name}</p>
      <div>
        <h2 className="text-xl font-semibold mt-4">Films</h2>
        <ul>
          {person.filmConnection.films.map((film: any) => (
            <li key={film.title}>{film.title}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default CharacterDetails;

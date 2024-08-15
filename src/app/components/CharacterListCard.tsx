import React, { FC } from 'react';
import { Card } from './ui/Card';
import Link from 'next/link';
import { buttonVariants } from './ui/Button';

interface CharacterListCardProps {
  id: string;
  name: string;
  birthYear: string;
  height: string;
  mass: string;
}

export const CharacterListCard: FC<CharacterListCardProps> = ({
  id,
  name,
  birthYear,
  height,
  mass
}) => {
  return (
    <Card className="p-4 flex flex-col" key={id}>
      <div className="mb-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">Born: {birthYear}</p>
        {height && <p className="text-gray-600">Height: {height}</p>}
        {mass && <p className="text-gray-600">Mass: {mass}</p>}
      </div>
      <Link
        href={`/character/${id}`}
        className={` mt-auto ${buttonVariants({ variant: 'default' })}`}
      >
        View more
      </Link>
    </Card>
  );
};

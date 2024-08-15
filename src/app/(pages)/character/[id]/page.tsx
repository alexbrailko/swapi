import React from 'react';
import CharacterDetails from '@/app/components/CharacterDetails';
import ErrorBoundary from '@/app/components/common/ErrorBoundary';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

export default function CharacterDetailsPage({
  params
}: {
  params: { id: string };
}) {
  const id = decodeURIComponent(params.id);

  return (
    <div className="container">
      <Link href="/" className="mb-4 flex items-center">
        <MoveLeft size={20} className="mr-2" />
        Back to Character List
      </Link>
      <ErrorBoundary>
        <CharacterDetails id={id} />
      </ErrorBoundary>
    </div>
  );
}

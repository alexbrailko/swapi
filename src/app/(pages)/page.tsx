import { GET_CHARACTERS } from '@/lib/queries';
import { CharacterList } from '../components/CharacterList';
import { getClient } from '@/lib/apolloClient';
import ErrorBoundary from '../components/common/ErrorBoundary';

export default async function Home() {
  // prerender on server
  const { data } = await getClient().query({
    query: GET_CHARACTERS
  });

  return (
    <div className="container">
      <ErrorBoundary>
        <CharacterList charactersData={data} />
      </ErrorBoundary>
    </div>
  );
}

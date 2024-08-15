'use client';

import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="container">
      <Card className="bg-destructive p-4 max-w-[500px] ml-auto mr-auto">
        <h1 className="text-white">An error occured!</h1>
        <p className="text-white">{error.message}</p>
        <Button variant="outline" onClick={reset} className="mt-2">
          Retry
        </Button>
      </Card>
    </div>
  );
};

export default Error;

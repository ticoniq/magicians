import { useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const apiKey = 'c8TNwMQ8N9jAfUdyLFjemEhStsf1XkHmozifISph';

        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: {
            'X-Api-Key': apiKey,
          },
        });

        const json = await response.json();
        setData(json[0].quote);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, [setData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      <p>{data}</p>
    </>
  );
}

export default Quote;

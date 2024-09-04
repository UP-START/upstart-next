// app/teste/page.tsx
'use client';

import { useState, useEffect } from 'react';

interface Event {
  id: string;
  image: string | null;
  eventType: string;
  date: string;
  title: string;
  description: string;
  registerUrl: string;
}

export default function ApiTest() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data);
      } catch (e) {
        setError('Failed to fetch events');
        console.error('Error:', e);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>API Test Results</h1>
      <pre>{JSON.stringify(events, null, 2)}</pre>
    </div>
  );
}
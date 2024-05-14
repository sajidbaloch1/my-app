import React, { useEffect, useState } from 'react';
import { fetchLiveStreams } from '../services/api';

const LiveStreams = () => {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const getLiveStreams = async () => {
      const liveStreams = await fetchLiveStreams();
      setStreams(liveStreams);
    };
    getLiveStreams();
  }, []);

  return (
    <div>
      <h2>Live Streams</h2>
      <ul>
        {streams.map(stream => (
          <li key={stream.id}>{stream.snippet.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default LiveStreams;

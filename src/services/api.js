const fetchLiveStreams = async (accessToken) => {
    const token = '686764346000-6jcq5ar04pqccjj7fgftc5ikjoo566sq.apps.googleusercontent.com'
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/liveBroadcasts?part=snippet&broadcastType=all&maxResults=10`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching live streams:', error);
        return [];
    }
};

export { fetchLiveStreams };

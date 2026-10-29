const API_KEY = "YOUR API KEY"; // paste your key inside quotes

export const fetchVideos = async (query = "latest music") => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${query}&key=${API_KEY}`
    );
    const data = await res.json();
    return data.items;
  } catch (err) {
    console.error("Error fetching videos:", err);
    return [];
  }
};

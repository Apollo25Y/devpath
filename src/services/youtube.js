const YT_API_KEY = process.env.REACT_APP_YT_API_KEY;
const YT_BASE    = "https://www.googleapis.com/youtube/v3";

export async function fetchYTSearch(query, maxResults = 10) {
  console.log("API KEY:", process.env.REACT_APP_YT_API_KEY); // ← línea 2
  console.log("buscando:", query);                            // ← línea 3
  if (!YT_API_KEY) return [];
  try {
    const url = `${YT_BASE}/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=${maxResults}&key=${YT_API_KEY}`;
    const res  = await fetch(url);
    const json = await res.json();
    if (json.error) { console.error("YT API:", json.error.message); return []; }
    return json.items || [];
  } catch (e) {
    console.error("Fetch error:", e);
    return [];
  }
}

export function normalizeYTItem(item) {
  const id      = item.id?.videoId || item.id;
  const snippet = item.snippet || {};
  return {
    id,
    title:   snippet.title || "Sin título",
    channel: snippet.channelTitle || "",
    thumb:   snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url || "",
    url:     `https://www.youtube.com/watch?v=${id}`
  };
}
import { useState } from 'react';
import DATA from './data/catalog';
import { fetchYTSearch, normalizeYTItem } from './services/youtube';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';
import ChannelGrid from './components/ChannelGrid';
import CategoryGrid from './components/CategoryGrid';
import Modal from './components/Modal';

function App() {
  const [selectedCat, setSelectedCat] = useState(null);
  const [ytResults, setYtResults]     = useState([]);
  const [searching, setSearching]     = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (!query.trim()) { setYtResults([]); return; }
    setSearching(true);
    const items = await fetchYTSearch(query, 12);
    setYtResults(items.map(normalizeYTItem));
    setSearching(false);
  };

  return (
    <div style={{ background: '#080b12', minHeight: '100vh', color: '#e2e8f0', fontFamily: 'DM Sans, sans-serif' }}>
      <Navbar />
      <Hero onSearch={handleSearch} />

      {/* Resultados de YouTube */}
      {(searching || ytResults.length > 0) && (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 2rem' }}>
          <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: '#64748b', marginBottom: '.8rem' }}>
            <span style={{ color: '#ef4444', marginRight: '.4rem' }}>🔴</span> Resultados de YouTube
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', fontWeight: 800, letterSpacing: '-.5px', marginBottom: '.4rem', fontFamily: 'Syne, sans-serif', color: '#e2e8f0' }}>
            Resultados para "{searchQuery}"
          </h2>
          <p style={{ color: '#64748b', fontSize: '.9rem', marginBottom: '2.2rem' }}>
            Resultados en tiempo real desde la YouTube Data API v3
          </p>
          {searching ? (
            <p style={{ color: '#64748b' }}>Buscando en YouTube...</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '1rem' }}>
              {ytResults.map((v, i) => (
                <a key={i} href={v.url} target="_blank" rel="noreferrer" style={{
                  background: '#0f1420', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px', overflow: 'hidden', display: 'flex',
                  flexDirection: 'column', textDecoration: 'none', color: '#e2e8f0'
                }}>
                  <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                    <img src={v.thumb} alt={v.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
                    <div style={{ position: 'absolute', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,0,0,.72)', display: 'flex', alignItems: 'center', justifyContent: 'center', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: 'white', marginLeft: 2 }}><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div style={{ padding: '.85rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
                    <div style={{ fontSize: '.68rem', color: '#06b6d4', fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase' }}>{v.channel}</div>
                    <div style={{ fontSize: '.86rem', fontWeight: 600, lineHeight: 1.4 }}>{v.title}</div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>
      )}

      <VideoGrid videos={DATA.featuredVideos} />
      <ChannelGrid channels={DATA.topChannels} />
      <CategoryGrid categories={DATA.categories} onCategoryClick={setSelectedCat} />

      <Modal cat={selectedCat} onClose={() => setSelectedCat(null)} />

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '2.5rem 2rem', textAlign: 'center', color: '#64748b', fontSize: '.82rem' }}>
        Hecho con 💙 para la comunidad hispana de programación — <strong style={{ color: '#06b6d4' }}>DevPath</strong> · 2025<br/>
        <span style={{ fontSize: '.75rem', marginTop: '.4rem', display: 'block' }}>Powered by YouTube Data API v3</span>
      </footer>
    </div>
  );
}

export default App;
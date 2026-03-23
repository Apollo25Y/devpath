import { useEffect, useState } from 'react';
import { fetchYTSearch, normalizeYTItem } from '../services/youtube';

function Modal({ cat, onClose }) {
  const [ytVideos, setYtVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!cat) return;
    setLoading(true);
    fetchYTSearch(cat.ytQuery, 6).then(items => {
      setYtVideos(items.map(normalizeYTItem));
      setLoading(false);
    });
  }, [cat]);

  if (!cat) return null;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 400,
      background: 'rgba(0,0,0,.82)', backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#0f1420', border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '20px', width: '100%', maxWidth: '780px',
        maxHeight: '88vh', overflowY: 'auto', padding: '2rem'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '.3rem' }}>{cat.emoji}</div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-.5px', fontFamily: 'Syne, sans-serif', color: '#e2e8f0' }}>{cat.name}</h2>
            <p style={{ color: '#64748b', fontSize: '.87rem', marginTop: '.3rem' }}>{cat.desc}</p>
          </div>
          <button onClick={onClose} style={{
            width: '34px', height: '34px', borderRadius: '50%',
            background: '#161c2d', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#64748b', flexShrink: 0
          }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Canales */}
        <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#64748b', marginBottom: '.7rem' }}>Canales recomendados</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(190px,1fr))', gap: '.8rem', marginBottom: '1.8rem' }}>
          {cat.channels.map((ch, i) => (
            <a key={i} href={ch.url} target="_blank" rel="noreferrer" style={{
              background: '#161c2d', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '12px', padding: '1rem', textDecoration: 'none',
              color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '.45rem'
            }}>
              <div style={{ fontSize: '1.3rem' }}>{cat.emoji}</div>
              <div style={{ fontSize: '.88rem', fontWeight: 700, fontFamily: 'Syne, sans-serif' }}>{ch.name}</div>
              <div style={{ fontSize: '.74rem', color: '#64748b', lineHeight: 1.4 }}>{ch.desc}</div>
            </a>
          ))}
        </div>

        {/* Videos del catálogo */}
        <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#64748b', marginBottom: '.7rem' }}>Videos del catálogo</div>
        {cat.videos.map((v, i) => (
          <a key={i} href={v.url} target="_blank" rel="noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: '.8rem',
            padding: '.65rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)',
            textDecoration: 'none', color: '#e2e8f0', fontSize: '.84rem'
          }}>
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 8l6 4-6 4V8z"/>
            </svg>
            <span>{v.title}</span>
            <span style={{ color: '#64748b', fontSize: '.72rem', marginLeft: 'auto', whiteSpace: 'nowrap' }}>{v.channel}</span>
          </a>
        ))}

        {/* Videos de YouTube */}
        <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#64748b', margin: '1.8rem 0 .7rem' }}>
          Más videos en YouTube
        </div>
        {loading ? (
          <p style={{ color: '#64748b', fontSize: '.85rem' }}>Cargando desde YouTube...</p>
        ) : ytVideos.length === 0 ? (
          <p style={{ color: '#64748b', fontSize: '.85rem' }}>Agrega tu API Key para ver videos en tiempo real.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(175px,1fr))', gap: '.8rem' }}>
            {ytVideos.map((v, i) => (
              <a key={i} href={v.url} target="_blank" rel="noreferrer" style={{
                textDecoration: 'none', color: '#e2e8f0', borderRadius: '10px',
                overflow: 'hidden', background: '#161c2d',
                border: '1px solid rgba(255,255,255,0.07)'
              }}>
                <img src={v.thumb} alt={v.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}/>
                <div style={{ padding: '.6rem .7rem' }}>
                  <div style={{ fontSize: '.76rem', fontWeight: 600, lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{v.title}</div>
                  <div style={{ fontSize: '.68rem', color: '#64748b', marginTop: '.3rem' }}>{v.channel}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
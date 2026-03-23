import { useState } from 'react';

function Hero({ onSearch }) {
  const [query, setQuery] = useState('');

 const handleSearch = () => {
    console.log("query actual:", query);
    console.log("onSearch es:", onSearch);
    if (query.trim()) onSearch(query);
  };


  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '6rem 1.5rem 4rem',
      overflow: 'hidden'
    }}>
      {/* Blobs */}
      <div style={{ position: 'absolute', width: '600px', height: '600px', background: '#3b82f6', borderRadius: '50%', filter: 'blur(130px)', opacity: .1, top: '-200px', left: '-100px', pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', width: '500px', height: '500px', background: '#a855f7', borderRadius: '50%', filter: 'blur(130px)', opacity: .1, top: '200px', right: '-150px', pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', width: '400px', height: '400px', background: '#06b6d4', borderRadius: '50%', filter: 'blur(130px)', opacity: .1, bottom: 0, left: '30%', pointerEvents: 'none' }}/>

      {/* Tag */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '.5rem',
        fontSize: '.72rem', fontWeight: 700, letterSpacing: '.12em',
        textTransform: 'uppercase', color: '#06b6d4',
        border: '1px solid rgba(6,182,212,.3)', background: 'rgba(6,182,212,.07)',
        padding: '.4rem 1rem', borderRadius: '999px', marginBottom: '2rem'
      }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#06b6d4', display: 'inline-block' }}/>
        Tu hoja de ruta para aprender a programar
      </div>

      {/* Título */}
      <h1 style={{ fontSize: 'clamp(2.6rem,8vw,5.5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px', fontFamily: 'Syne, sans-serif', color: '#e2e8f0' }}>
        El código que escribas hoy
        <span style={{ display: 'block', background: 'linear-gradient(90deg,#06b6d4,#3b82f6,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          cambiará tu futuro.
        </span>
      </h1>

      {/* Subtítulo */}
      <p style={{ maxWidth: '500px', margin: '1.5rem auto 0', color: '#64748b', fontSize: '1rem', lineHeight: 1.7 }}>
        Descubre los mejores canales y videos de YouTube para aprender programación desde cero hasta nivel profesional. Gratis. En tu ritmo.
      </p>

      {/* Search */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '620px', margin: '2.5rem auto 0', display: 'flex', gap: '.5rem' }}>
        <input
          type="text"
          value={query}
          placeholder="Busca en YouTube: React hooks, Node.js tutorial, Docker..."
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleSearch(); }}
          style={{
            flex: 1, padding: '1rem 1.2rem',
            background: '#161c2d', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '14px', color: '#e2e8f0',
            fontFamily: 'DM Sans, sans-serif', fontSize: '.95rem', outline: 'none'
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            background: '#06b6d4', border: 'none', borderRadius: '10px',
            color: '#000', fontWeight: 700, fontSize: '.82rem',
            padding: '.5rem 1.2rem', cursor: 'pointer',
            fontFamily: 'Syne, sans-serif', letterSpacing: '.04em'
          }}
        >
          Buscar
        </button>
      </div>
    </section>
  );
}

export default Hero;
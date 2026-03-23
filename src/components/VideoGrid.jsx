function VideoGrid({ videos }) {
  return (
    <section id="videos" style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem' }}>
      <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: '#64748b', marginBottom: '.8rem' }}>
        <span style={{ color: '#06b6d4', marginRight: '.4rem' }}>▶</span> Videos imperdibles
      </div>
      <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', fontWeight: 800, letterSpacing: '-.5px', marginBottom: '.4rem', fontFamily: 'Syne, sans-serif', color: '#e2e8f0' }}>
        Empieza con estos 10 videos
      </h2>
      <p style={{ color: '#64748b', fontSize: '.9rem', marginBottom: '2.2rem' }}>
        Seleccionados por impacto y claridad.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '1rem' }}>
        {videos.map((v, i) => (
          <a key={i} href={v.url} target="_blank" rel="noreferrer" style={{
            background: '#0f1420', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '12px', overflow: 'hidden', display: 'flex',
            flexDirection: 'column', textDecoration: 'none', color: '#e2e8f0',
            transition: 'transform .2s, box-shadow .2s'
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', background: '#161c2d' }}>
              <img
                src={`https://i.ytimg.com/vi/${v.ytId}/hqdefault.jpg`}
                alt={v.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(0,0,0,.72)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)'
              }}>
                <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: 'white', marginLeft: 2 }}>
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div style={{ padding: '.85rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
              <div style={{ fontSize: '.68rem', color: '#06b6d4', fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase' }}>
                {v.channel} · {v.cat}
              </div>
              <div style={{ fontSize: '.86rem', fontWeight: 600, lineHeight: 1.4 }}>{v.title}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default VideoGrid;
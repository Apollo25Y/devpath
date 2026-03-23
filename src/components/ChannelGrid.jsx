function ChannelGrid({ channels }) {
  return (
    <section id="canales" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 5rem' }}>
      <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: '#64748b', marginBottom: '.8rem' }}>
        <span style={{ color: '#06b6d4', marginRight: '.4rem' }}>★</span> Canales destacados
      </div>
      <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', fontWeight: 800, letterSpacing: '-.5px', marginBottom: '.4rem', fontFamily: 'Syne, sans-serif', color: '#e2e8f0' }}>
        5 canales que enganchan desde el primer video
      </h2>
      <p style={{ color: '#64748b', fontSize: '.9rem', marginBottom: '2.2rem' }}>
        Diferentes estilos de enseñanza, un mismo objetivo: que aprendas de verdad.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1rem' }}>
        {channels.map((c, i) => (
          <a key={i} href={c.url} target="_blank" rel="noreferrer" style={{
            background: '#0f1420', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '14px', padding: '1.5rem 1.2rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            textAlign: 'center', gap: '.7rem', textDecoration: 'none', color: '#e2e8f0',
            transition: 'transform .2s, border-color .2s'
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: c.avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.05rem', fontWeight: 800, fontFamily: 'Syne, sans-serif' }}>
              {c.avatar}
            </div>
            <div style={{ fontSize: '.9rem', fontWeight: 700, fontFamily: 'Syne, sans-serif' }}>{c.name}</div>
            <div style={{ fontSize: '.66rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '.22rem .65rem', borderRadius: '999px', color: c.tagColor, background: c.tagBg }}>
              {c.tag}
            </div>
            <div style={{ fontSize: '.76rem', color: '#64748b', lineHeight: 1.5 }}>{c.desc}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ChannelGrid;
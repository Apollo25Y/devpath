function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem', height: '60px',
      background: 'rgba(8,11,18,.88)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)'
    }}>
      <a href="#" style={{ fontSize: '1.25rem', fontWeight: 800, textDecoration: 'none', color: '#e2e8f0', fontFamily: 'Syne, sans-serif', letterSpacing: '-0.5px' }}>
        Dev<span style={{ color: '#06b6d4' }}>Path</span>
      </a>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {['Videos', 'Canales', 'Categorías'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            color: '#64748b', textDecoration: 'none', fontSize: '.82rem',
            fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase',
            transition: 'color .2s'
          }}>{link}</a>
        ))}
      </div>
      <a href="https://github.com" target="_blank" rel="noreferrer" style={{
        fontSize: '.8rem', fontWeight: 700, padding: '.4rem 1.1rem',
        border: '1px solid #06b6d4', color: '#06b6d4', borderRadius: '6px',
        textDecoration: 'none'
      }}>GitHub</a>
    </nav>
  );
}

export default Navbar;
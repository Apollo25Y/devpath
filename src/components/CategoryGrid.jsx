function CategoryGrid({ categories, onCategoryClick }) {
  return (
    <section id="categorías" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 6rem' }}>
      <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: '#64748b', marginBottom: '.8rem' }}>
        <span style={{ color: '#06b6d4', marginRight: '.4rem' }}>◈</span> Explorar por tema
      </div>
      <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', fontWeight: 800, letterSpacing: '-.5px', marginBottom: '.4rem', fontFamily: 'Syne, sans-serif', color: '#e2e8f0' }}>
        ¿Qué quieres aprender?
      </h2>
      <p style={{ color: '#64748b', fontSize: '.9rem', marginBottom: '2.2rem' }}>
        Elige una categoría y ve canales recomendados y videos reales desde YouTube.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: '1.2rem' }}>
        {categories.map((cat, i) => (
          <div key={i} onClick={() => onCategoryClick(cat)} style={{
            position: 'relative', borderRadius: '16px', overflow: 'hidden',
            aspectRatio: '4/3', cursor: 'pointer',
            border: '1px solid rgba(255,255,255,0.07)',
            transition: 'transform .25s, box-shadow .25s'
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {/* Imagen de fondo */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url('${cat.bg}')`,
              backgroundSize: 'cover', backgroundPosition: 'center'
            }}/>
            {/* Overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,.88) 40%, rgba(0,0,0,.15) 100%)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              padding: '1.3rem 1.1rem'
            }}>
              <div style={{ fontSize: '1.7rem', marginBottom: '.3rem' }}>{cat.emoji}</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '.25rem', fontFamily: 'Syne, sans-serif', color: '#fff' }}>{cat.name}</div>
              <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.68)', lineHeight: 1.4 }}>{cat.desc}</div>
            </div>
            {/* Flecha */}
            <div style={{
              position: 'absolute', top: '.9rem', right: '.9rem',
              width: '30px', height: '30px', borderRadius: '50%',
              background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <svg width="13" height="13" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
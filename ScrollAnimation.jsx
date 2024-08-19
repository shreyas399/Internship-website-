
const MovingText = () => {
    const scrollAnimation = {
      animation: 'scroll 25s linear infinite',
    };
  
    const keyframes = `
      @keyframes scroll {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
    `;
  
    return (
      <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'black', color: 'white', fontFamily: 'sans-serif', height: '3rem', width: '100%', padding: '0 1rem' }}>
        <style>{keyframes}</style>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', ...scrollAnimation }}>
          <p style={{ padding: '0 1rem' }}>Customize your prep for your dream placement.</p>
          <p style={{ padding: '0 1rem' }}>🔴 Access video tutorials, e-books, and practice sets.</p>
          <p style={{ padding: '0 1rem' }}>⚡ 15% OFF on every course</p>
          {/* Repeat text if necessary for smooth scrolling */}
          <p style={{ padding: '0 1rem' }}>Customize your prep for your dream placement.</p>
          <p style={{ padding: '0 1rem' }}>🔴 Access video tutorials, e-books, and practice sets.</p>
          <p style={{ padding: '0 1rem' }}>⚡ 15% OFF on every course</p>
        </div>
      </div>
    );
  };
  
  export default MovingText;
  
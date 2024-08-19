// MovingText.js
const MovingText = () => {
    const keyframes = `
      @keyframes scroll {
        100% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
    `;
  
    const containerStyle = {
      
      overflow: 'hidden',
      backgroundColor: 'black',
      color: 'white',
      fontSize: '0.975rem', 
      padding: '0.5rem 1.5rem',
      width: '100%',
      height: '3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translateZ(0)',
    };
  
    const scrollingTextStyle = {
      display: 'flex',
      whiteSpace: 'nowrap',
      animation: 'scroll 60s linear infinite',
    };
  
    return (
      <div style={containerStyle}>
        <style>{keyframes}</style>
        <div style={scrollingTextStyle}>
          <p style={{ padding: '0 1rem' }}>Customize your prep for your dream placement.</p>
          <p style={{ padding: '0 1rem' }}>🔴 Access video tutorials, e-books, and practice sets.</p>
          <p style={{ padding: '0 1rem' }}>⚡ 15% OFF on every course</p>
          <p style={{ padding: '0 1rem' }}>Receive personalized guidance from professionals.</p>
          
          <p style={{ padding: '0 1rem' }}>Customize your prep for your dream placement.</p>
          <p style={{ padding: '0 1rem' }}>🔴 Access video tutorials, e-books, and practice sets.</p>
          <p style={{ padding: '0 1rem' }}>⚡ 15% OFF on every course</p>
          <p style={{ padding: '0 1rem' }}>Receive personalized guidance from professionals.</p>

          <p style={{ padding: '0 1rem' }}>Customize your prep for your dream placement.</p>
          <p style={{ padding: '0 1rem' }}>🔴 Access video tutorials, e-books, and practice sets.</p>
          <p style={{ padding: '0 1rem' }}>⚡ 15% OFF on every course</p>
          <p style={{ padding: '0 1rem' }}>Receive personalized guidance from professionals.</p>

          <p style={{ padding: '0 1rem' }}>Customize your prep for your dream placement.</p>
          <p style={{ padding: '0 1rem' }}>🔴 Access video tutorials, e-books, and practice sets.</p>
          <p style={{ padding: '0 1rem' }}>⚡ 15% OFF on every course</p>
          <p style={{ padding: '0 1rem' }}>Receive personalized guidance from professionals.</p>
        </div>
      </div>
    );
  };
  
  export default MovingText;
  
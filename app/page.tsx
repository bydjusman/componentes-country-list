import CountryList from "./components/countryList";

const HomePage: React.FC = () => {
  const countries = [
    { name: 'India', population: '1.4B', capital: 'New Delhi'},
    { name: 'United States', population: '331M', capital: 'Washington D.C.' },
    { name: 'Brazil', population: '213M', capital: 'Brasilia' },
    { name: 'Nigeria', population: '206M', capital: 'Abuja' },
    { name: 'Japan', population: '125M', capital: 'Tokyo' },
  ];
  return (
    <div>

          <h1>
          ★【çօմղէɾվ —͟͞͞★ɴᴀᴍᴇ ✓】★
          </h1>
          <br/>

      <CountryList countries={countries} />  {/* Passing the array as props */}

      <div style={{ marginTop: '30px' }}>
        <a
          href="https://github.com/bydjusman"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: '20px', textDecoration: 'none', color: '#000' }}
        >
          GitHub ★
        </a>
        <a
          href="https://linkedin.com/in/ᑌs๓ᴀñ̰-khokhar-bb02a2290"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: '#0077B5' }}
        >
          LinkedIn ★
        </a>
        <a
          href="https://facebook.com/profile.php?id=100010830999227"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: '#1877F2', margin: '10px', padding: '5px' }}
        >
          Facebook ★
        </a>
      </div>
    </div>
  );
};

export default HomePage; 
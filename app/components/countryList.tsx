
interface CountryProps {
    name: string;
    population: string;
    capital: string;
}

const Country: React.FC<CountryProps> = ({ name, population, capital }) => {
    return (
        <div>
            <h2>{name}</h2> {/* Display country name using props */}
            <p><strong>Population:</strong> {population}</p> {/* Display population via props */}
            <p><strong>Capital:</strong> {capital}</p> {/* Display capital via props */}
        </div>
    );
};

interface CountryListProps {
    countries: CountryProps[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
    return (
        <div>
            {countries.map((country, index) => (
                <Country
                    key={index}
                    name={country.name}          // Passing name via props
                    population={country.population}  // Passing population via props
                    capital={country.capital}    // Passing capital via props
                />
            ))}
        </div>
    );
};

export default CountryList;
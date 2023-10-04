import { Link } from "react-router-dom";

const FormComponent = (props) => {
  const {
    handleSubmit,
    handleChange,
    errorMessage,
    input,
    searchTerm,
    handleSearch,
    filteredCountries,
    handleCountrySelect,
    handleCountryRemove,
    success,
  } = props;

  return (
<div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
        />
        {errorMessage.name && <span>{errorMessage.name}</span>}
        <label htmlFor="difficulty">Difficulty</label>
        <select
            name="difficulty"
            value={input.difficulty}
            onChange={handleChange}
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <label htmlFor="duration">Duration (hours)</label>
        <select
            name="duration"
            value={input.duration}
            onChange={handleChange}
        >
            {Array.from({length: 24}, (_,i) => (
                <option key={i} value={i + 1}>
                    {i + 1}
                </option>
            ))}
        </select>
        <label htmlFor="season">Season</label> 
        <select name="season" value={input.season} onChange={handleChange}>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            </select>

        <div>
            <label htmlFor="countries">Countries</label>
            <input type="text" onChange={handleSearch} value={searchTerm} />
                <ul>
                    {filteredCountries.map((country) => (
                        <li key={country.id}>
                            {country.name}{" "}
                            <button
                            type="button"
                            onClick={() => handleCountrySelect(country)}
                            >
                                +
                            </button>
                        </li>
                    ))}
                </ul>
                <div>
                    {input.countries.map((country, index) => (
                        <span key={index}>
                            {country}{" "}
                            <button
                                type="button"
                                onClick={() => handleCountryRemove(index)}
                            >X</button>
                        </span>
                    ))}
                </div>
                {errorMessage.countries && (
                    <span>{errorMessage.countries}</span>
                )}
            </div>
            {!errorMessage.name &&
            !errorMessage.countries &&
            !errorMessage.other &&
            !success && <button type="submit">Create</button>}
            {errorMessage.other && !success && (
                <span>{errorMessage.other}</span>
            )}
            {errorMessage.other && (
                <button
                    onClick={() => {
                        window.location.reload();
                    }}
                >
                Reload
                </button>
            )} 
            {success && (
                <button onClick={() => window.location.reload()}>OK</button>
            )} 
  </form>
  <Link to="/home">
  <button>Home</button>
  </Link>
  </div>
  )
};

export default FormComponent;

import { Link } from "react-router-dom";
import Styles from "./formComponent.module.css"; // Importa los estilos del módulo CSS

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
    <div className={Styles.formContainer}>
      <form onSubmit={handleSubmit} className={Styles.form}>
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
          {Array.from({ length: 24 }, (_, i) => (
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

          <label htmlFor="countries">Countries</label>
          <input type="text" onChange={handleSearch} value={searchTerm} />
        <div className={Styles.countries}>
          <ul className={Styles.countriesToAdd}>
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
                >
                  X
                </button>
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
          !success && <button className={Styles.bn39} type="submit">Create</button>}
        {errorMessage.other && !success && (
          <span>{errorMessage.other}</span>
        )}
        {errorMessage.other && (
          <button
          className={Styles.bn39}
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload
          </button>
        )}
        {success && (
          <button className={Styles.bn39} onClick={() => window.location.reload()}>OK</button>
        )}
      </form>
      <Link id={Styles.link} to={"/home"}>
        <div className={Styles.bn39} href="/"><span className={Styles.bn39span}>Home</span></div>
        </Link>
    </div>
  );
};

export default FormComponent;

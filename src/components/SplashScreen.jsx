const txt = "Welcome! I'm Salim Khan";

const SplashScreen = () => (


  <div className="page" style={{
    backgroundImage: "url('/public/splashBg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  }>


    <h1 className="txt page__txt black-ops-one-regular" aria-label={txt}>
      {txt.split('').map((character, key) => (
        <span
          key={key}
          className={`txt__character ${character === ' ' ? 'txt__space' : ''}`}
          style={{ '--i': key }}
        >
          {character}
        </span>
      ))}
    </h1>

  </div>
);

export default SplashScreen;

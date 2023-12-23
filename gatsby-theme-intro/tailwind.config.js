const color = require("color")

module.exports = (theme, darktheme) => {
  const colors =
    typeof theme === "string" ? require(`./src/themes/${theme}`) : theme
  const darkColors =
    typeof darktheme === "string" ? require(`./src/themes/${darktheme}`) : darktheme

  return {
    content: [`${__dirname}/src/**/*.js`, `./src/**/*.js`],
    safelist: [{pattern: /text-skill-.+/},
               {pattern: /border-skill-.+/}],
    
    darkMode: "class",
    theme: {
      fontFamily: {
        header: ["Source Sans Pro", "sans-serif"],
        text: ["Roboto", "sans-serif"],
      },
      extend: {
        colors: {
          // Set a default grey skill color, so the opacity attribute applies successfully (otherwise, the contrast with text is poor)
          // We pick an arbitrary high numer (30) which should be more than any reasonable list of skills 
          ...((colors, darkColors) => {
            _default_skill_colors = {};
            for (let k = 1; k <= 30; k++) {
              _default_skill_colors[`skill-${k}`] = "#888888";
              _default_skill_colors[`skill-${k}-dark`] = "#888888";
            }
            return _default_skill_colors})(colors, darkColors),
          // Insert the colors from the light theme
          ...colors,
          "back-light": color(colors.back)
            .lighten(0.18)
            .hex(),
          // Insert colors from dark theme, adding '-dark' to all names, to distinguish them from `colors`
          ...((colors) => {
                _darkColors = {};
                for (let k in colors) {
                  _darkColors[`${k}-dark`] = `${colors[k]}`;}
                return _darkColors})(darkColors),
          "back-light-dark": color(darkColors.back)
            .lighten(0.18)
            .hex()
        },
        borderRadius: {
          lg: "1rem",
        },
        spacing: {
          "14": "3.5rem",
        },
        blur: {
          xs: '2px',
        }
      },
    },
  }
}

module.exports = {
    "branches": ["main"],
    "plugins": [
      ["@semantic-release/github", {
        "assets": ["index*.js", "main.js"]
      }],
    ],
  }
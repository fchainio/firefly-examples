module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [[
    "prismjs",
    {
    "languages": ["javascript","bash","markup"],
    "plugins": ["copy-to-clipboard","highlight-keywords","show-language"],
    "theme": "default",
    "css": true
    }
    ]],
}

module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [[
    "prismjs",
    {
    "languages": ["javascript"],
    "plugins": ["copy-to-clipboard","highlight-keywords","show-language"],
    "theme": "default",
    "css": true
    }
    ]],
}

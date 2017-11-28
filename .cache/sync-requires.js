// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/song/dev/using-redux/.cache/dev-404-page.js")),
  "component---src-pages-a-js": preferDefault(require("/Users/song/dev/using-redux/src/pages/a.js")),
  "component---src-pages-b-js": preferDefault(require("/Users/song/dev/using-redux/src/pages/b.js")),
  "component---src-pages-c-js": preferDefault(require("/Users/song/dev/using-redux/src/pages/c.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/song/dev/using-redux/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/song/dev/using-redux/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/song/dev/using-redux/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/song/dev/using-redux/.cache/json/layout-index.json"),
  "a.json": require("/Users/song/dev/using-redux/.cache/json/a.json"),
  "layout-index.json": require("/Users/song/dev/using-redux/.cache/json/layout-index.json"),
  "b.json": require("/Users/song/dev/using-redux/.cache/json/b.json"),
  "layout-index.json": require("/Users/song/dev/using-redux/.cache/json/layout-index.json"),
  "c.json": require("/Users/song/dev/using-redux/.cache/json/c.json"),
  "layout-index.json": require("/Users/song/dev/using-redux/.cache/json/layout-index.json"),
  "index.json": require("/Users/song/dev/using-redux/.cache/json/index.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/Users/song/dev/using-redux/.cache/layouts/index.js"))
}
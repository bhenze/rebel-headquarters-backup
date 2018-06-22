importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "rebel-headquarters-sandbox-test",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.9a84b727d4416c5a53c6.js",
    "revision": "e5b0620d02598f50e718c1bbde4ecaba"
  },
  {
    "url": "/_nuxt/layouts/default.12f2c1884deaee890645.js",
    "revision": "bffe7fad8e41fba188a92e1f7a52a03c"
  },
  {
    "url": "/_nuxt/manifest.2dc1fbff803c5178573d.js",
    "revision": "56012a433dfd0b437616ddf335fe786d"
  },
  {
    "url": "/_nuxt/pages/index.55f13b2e10a067e3143b.js",
    "revision": "3a071a2f3bc8913e0a45dfd0729bca35"
  },
  {
    "url": "/_nuxt/pages/resume.e03c299072016d633563.js",
    "revision": "b0222062cda55120c9432c62a8fa2a53"
  },
  {
    "url": "/_nuxt/vendor.9af420cceaa6eb552a5e.js",
    "revision": "1c52e27ddcec242663fc357e0b735d54"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


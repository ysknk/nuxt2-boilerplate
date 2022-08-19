import { base, basePath } from './directory.config'

export const title = `title`
export const description = `description`
export const keywords = `keywords`
export const protocol = `https`
export const domain = `example.com`
export const url = `${protocol}://${domain}${basePath}`
export const siteName = `site_name`
export const imageUrl = `${url}${base ? '' : '/'}img/ogp.png`

export const head = {
  htmlAttrs: {
    lang: 'ja'
  },
  title,
  titleTemplate: title,
  meta: [
    { charset: 'utf-8' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    { hid: 'description', name: 'description', content: description },
    { hid: 'keywords', name: 'keywords', content: keywords },

    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', description },
    { hid: 'og:type', property: 'og:type', content: 'article' },
    { hid: 'og:url', property: 'og:url', content: url },
    { hid: 'og:image', property: 'og:image', content: imageUrl },
    { hid: 'og:site_name', property: 'og:site_name', content: siteName },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    // { rel: 'canonical', href: url },
    { rel: 'apple-touch-icon-precomposed', sizes: '180x180', href: `${basePath}apple-touch-icon-precomposed.png` },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${basePath}favicon-32x32.png` },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${basePath}favicon-16x16.png` },
    { rel: 'icon', type: 'image/x-icon', href: `${basePath}favicon.ico` }
  ],
  script: [
    { src: 'https://polyfill.io/v3/polyfill.min.js?flags=gated%2Calways&callback=polyfill&features=es6%2CElement.prototype.closest%2CIntersectionObserver%2CmatchMedia' }
  ]
}

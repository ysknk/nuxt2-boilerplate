// NOTE: generateDir, rootDir
// EX: `test` *no first slash
export const base = ``
export const basePath = `${base ? '/' + base + '/' : ''}`

export function isSetBase () {
  return (base && base !== '/')
}

export const generateDir = isSetBase()
  ? `./dist/${base}/`
  : `./dist/`

export const baseDir = isSetBase()
  ? `/${base}/`
  : ``

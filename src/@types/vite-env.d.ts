/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APIKEY: string
  readonly AUTHDOMAIN: string
  readonly PROJECTID: string
  readonly STORAGEBUCKET: string
  readonly MESSAGINGSENDERID: string
  readonly APPID: string
  readonly MEASUREMENTID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

import { existsSync, readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const root = resolve(__dirname, '..')

const app = resolve(root, 'src', 'App.vue')
const example = resolve(root, 'example', 'App.vue')

if (!existsSync(app)) {
  writeFileSync(app, readFileSync(example))
}

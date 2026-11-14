import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const isInsideFrontend = fs.existsSync(path.join(process.cwd(), 'src'))
const prefix = isInsideFrontend ? '' : '--prefix frontend'

console.log(`[build] Running build: isInsideFrontend=${isInsideFrontend}`)
execSync(`npm ${prefix} run build`, { stdio: 'inherit' })

// Ensure both dist and frontend/dist exist so Vercel finds the output regardless of Root Directory setting
const frontendDist = isInsideFrontend
  ? path.join(process.cwd(), 'dist')
  : path.join(process.cwd(), 'frontend', 'dist')

const rootDist = isInsideFrontend
  ? path.join(process.cwd(), '..', 'dist')
  : path.join(process.cwd(), 'dist')

try {
  if (fs.existsSync(frontendDist) && !fs.existsSync(rootDist)) {
    fs.cpSync(frontendDist, rootDist, { recursive: true })
  }
} catch (err) {
  console.warn('[build] Note on dist sync:', err.message)
}

console.log('[build] Build completed successfully!')

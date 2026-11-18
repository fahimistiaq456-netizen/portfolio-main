import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const isInsideFrontend = fs.existsSync(path.join(process.cwd(), 'src'))
const frontendDir = isInsideFrontend ? process.cwd() : path.join(process.cwd(), 'frontend')

console.log(`[install] Running install: isInsideFrontend=${isInsideFrontend}`)
// Run inside the frontend directory: `npm --prefix frontend install` from the repo
// root would add the root package to frontend/package.json as a `file:..` dependency.
execSync('npm install', { stdio: 'inherit', cwd: frontendDir })

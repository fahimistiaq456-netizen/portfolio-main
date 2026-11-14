import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const isInsideFrontend = fs.existsSync(path.join(process.cwd(), 'src'))
const prefix = isInsideFrontend ? '' : '--prefix frontend'

console.log(`[install] Running install: isInsideFrontend=${isInsideFrontend}`)
execSync(`npm ${prefix} install`, { stdio: 'inherit' })

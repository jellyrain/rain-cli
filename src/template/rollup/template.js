import { resolve } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import ejs from 'ejs'
import prettier from 'prettier'

const __dirname = fileURLToPath(import.meta.url)

export default code => {
    let packages = fs.readFileSync(resolve(__dirname, '../template/package.ejs'))

    let rollup = fs.readFileSync(resolve(__dirname, '../template/rollup.config.ejs'))

    let babel = fs.readFileSync(resolve(__dirname, '../template/babel.config.ejs'))

    let postcss = fs.readFileSync(resolve(__dirname, '../template/postcss.config.ejs'))

    let core = ejs.render(packages.toString(), code)
    packages = prettier.format(core,{ parser: 'json' })

    core = ejs.render(rollup.toString(), code)
    rollup = prettier.format(core,{ parser: 'babel' })

    core = ejs.render(babel.toString(), code)
    babel = prettier.format(core,{ parser: 'babel' })

    core = ejs.render(postcss.toString(), code)
    postcss = prettier.format(core,{ parser: 'babel' })

    return { packages, rollup, babel, postcss }
}
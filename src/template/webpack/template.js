import { resolve } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import ejs from 'ejs'
import prettier from 'prettier'

const __dirname = fileURLToPath(import.meta.url)

export default code => {
    let packages = fs.readFileSync(resolve(__dirname, '../template/package.ejs'))

    let webpack = fs.readFileSync(resolve(__dirname, '../template/webpack.config.ejs'))

    let babel = fs.readFileSync(resolve(__dirname, '../template/babel.config.ejs'))

    let postcss = fs.readFileSync(resolve(__dirname, '../template/postcss.config.ejs'))

    let html = fs.readFileSync(resolve(__dirname, '../template/html.ejs'))

    let core = ejs.render(packages.toString(), code)
    packages = prettier.format(core,{ parser: 'json' })

    core = ejs.render(webpack.toString(), code)
    webpack = prettier.format(core,{ parser: 'babel' })

    core = ejs.render(babel.toString(), code)
    babel = prettier.format(core,{ parser: 'babel' })

    core = ejs.render(postcss.toString(), code)
    postcss = prettier.format(core,{ parser: 'babel' })

    core = ejs.render(html.toString(), code)
    html = prettier.format(core,{ parser: 'html' })

    return { packages, webpack, babel, postcss, html }
}
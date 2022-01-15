import chalk from 'chalk'
import  fs from 'fs'
import { resolve } from 'path'

function getRootPath(answer) {
    return resolve(process.cwd(), answer.name)
}

export default (answer, code) => {
    console.log(chalk.green(`2. 正在生成您的项目：`))
    console.log(chalk.green('--------生成文件夹--------'))
    fs.mkdirSync(getRootPath(answer))
    console.log(chalk.green('-------生成配置文件--------'))
    fs.writeFileSync(`${getRootPath(answer)}/package.json`,code.packages)
    fs.writeFileSync(`${getRootPath(answer)}/webpack.config.js`,code.webpack)
    fs.writeFileSync(`${getRootPath(answer)}/babel.config.js`,code.babel)
    if (answer.style !== 'null') fs.writeFileSync(`${getRootPath(answer)}/postcss.config.js`,code.postcss)
    console.log(chalk.green('-------生成文件结构--------'))
    fs.mkdirSync(`${getRootPath(answer)}/public`)
    fs.writeFileSync(`${getRootPath(answer)}/public/index.html`,code.html)
    fs.mkdirSync(`${getRootPath(answer)}/src`)
    answer.script === 'javascript' ? fs.writeFileSync(`${getRootPath(answer)}/src/main.js`,'') : fs.writeFileSync(`${getRootPath(answer)}/src/main.ts`,'')
    switch (answer.style) {
        case 'css':
            fs.writeFileSync(`${getRootPath(answer)}/src/main.css`,'')
            break
        case 'scss':
            fs.writeFileSync(`${getRootPath(answer)}/src/main.scss`,'')
            break
    }
    console.log(chalk.green('------创建完成您的项目--------'))
    console.log(chalk.green('请执行：npm install 或 yarn 下载依赖'))
}
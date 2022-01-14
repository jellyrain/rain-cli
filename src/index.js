#!/usr/bin/env node

import chalk from 'chalk'
import inquirer from 'inquirer'
import rollup from './template/rollup/index.js'

console.log(chalk.green(`1. 请选择您的配置：`))
const options = await inquirer.prompt([
    {
        type: 'list',
        name: 'build',
        message: '您想使用的打包器是什么？',
        choices: ['webpack', 'rollup']
    }
])

switch (options.build) {
    case 'webpack':
        console.log(chalk.red('不好意思，还未实现，暂未开放！！！'))
        break
    case 'rollup':
        rollup()
}




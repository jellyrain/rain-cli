#!/usr/bin/env node

import chalk from 'chalk'
import inquirer from 'inquirer'
import rollup from './template/rollup/index.js'
import webpack from  './template/webpack/index.js'

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
        webpack()
        break
    case 'rollup':
        rollup()
        break
}




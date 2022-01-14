import inquirer from 'inquirer'

export default async () => await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: '您项目的名字是什么？',
        default: 'rain-cli'
    },
    {
        type: 'list',
        name: 'script',
        message: '您想使用的脚本语言是什么（使用babel编译）？',
        choices: ['javascript', 'typescript']
    },
    {
        type: 'list',
        name: 'style',
        message: '您想使用的样式语言是什么（使用postcss编译）？',
        choices: ['null', 'css', 'scss']
    }
])
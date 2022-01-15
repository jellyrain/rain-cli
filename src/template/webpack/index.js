import options from './options.js'
import template from './template.js'
import create from './create.js'

export default async () => {
    const answer = await options()
    const code = template(answer)
    create(answer, code)
}
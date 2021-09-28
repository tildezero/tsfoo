import { Command, CommandContext } from '../deps.ts'

export class CalcCommand extends Command {
    name = "calc"
    description = "calculate something"

    async execute(ctx: CommandContext) {
        const expr = encodeURIComponent(ctx.argString)
        const req = await fetch(`http://api.mathjs.org/v4/?expr=${expr}`)
        const res = await req.text()
        if (req.status === 200) {
            await ctx.message.channel.send(`Error: ${res}`)
        } else {
            await ctx.message.channel.send(res)
        }

    }
}
import { SlashCommandBuilder } from "discord.js";

const data = new SlashCommandBuilder()
    .setName("user-info")
    .setDescription("Replies with basic information about the user");


async function execute(interaction) {
    try {
       await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`)  
    } catch (error) {
        console.log(error)
    }
    
}
export{execute,data}
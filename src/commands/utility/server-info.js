import { SlashCommandBuilder } from "discord.js";

const data = new SlashCommandBuilder()
    .setName("server-info")
    .setDescription("Replies with basic information about the server");


async function execute(interaction) {
    try {
        await interaction.reply(`This server is called ${interaction.guild.name} and has ${interaction.guild.memberCount} members. It was created on ${interaction.guild.createdAt}`);
    } catch (error) {
        console.log(error)
    }
    
}
export{execute,data}
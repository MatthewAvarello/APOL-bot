import { SlashCommandBuilder } from "discord.js";
   

const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies With Pong!");


async function execute(interaction){
    await interaction.reply("Pong!")
}


export{execute,data}
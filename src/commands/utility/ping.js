import { SlashCommandBuilder } from "discord.js";
   

const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies With Pong!");


async function execute(interaction){
    try {
        await interaction.reply("Pong!")
    } catch (error) {
       console.log(error) 
    }
}


export{execute,data}
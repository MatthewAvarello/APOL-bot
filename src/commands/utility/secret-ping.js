import { MessageFlags, SlashCommandBuilder } from "discord.js";
   

const data = new SlashCommandBuilder()
    .setName("secret-ping")
    .setDescription("Replies With Pong secretly!")



async function execute(interaction){
    try {
        await interaction.reply({content: "Secret Pong!", flags: MessageFlags.Ephemeral})
    } catch (error) {
       console.log(error) 
    }
}


export{execute,data}
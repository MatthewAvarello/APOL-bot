import { SlashCommandBuilder } from "discord.js";
import random from 'lodash/random.js';
import jsondata from "./random-music-recommendation-assets/music-recommendations.json" with {type: "json"}

const data = new SlashCommandBuilder()
    .setName("random-music-recommendation")
    .setDescription("Recomends a song from a predefined list made by friends.");


async function execute(interaction) {
    let rng = random(0,jsondata.songs.length - 1)
    await interaction.reply(`I recommend the song ${jsondata.songs[rng].name} by ${jsondata.songs[rng].author}. Here is the link: ${jsondata.songs[rng].url}. My list of random recommendations manually added by the developer is currently ${jsondata.songs.length} long!`);
}
export{execute,data}
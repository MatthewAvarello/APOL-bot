import fs from "node:fs"
import path from "node:path"
import { Client, Events, GatewayIntentBits, Collection, MessageFlags } from "discord.js"; 
import config from "../config.json" with {type: "json"};
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const {token, clientId, guildId} = config

const client = new Client({intents: [GatewayIntentBits.Guilds]})

client.commands = new Collection()
const foldersPath = path.join(__dirname,'commands');
const commandFolders = fs.readdirSync(foldersPath);

async function initializeCommands() {
	for (const folder of commandFolders) {
		const commandsPath = path.join(foldersPath, folder);
		const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
		for (const file of commandFiles) {
			const filePath = path.join(commandsPath, file);
			const command = await import(filePath);
			// Set a new item in the Collection with the key as the command name and the value as the exported module
			if ('data' in command && 'execute' in command) {
				client.commands.set(command.data.name, command);
			} else {
				console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
			}
		}
	}
	console.log("Commands imported")
}



const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
async function initializeEvents(){
	await initializeCommands()
	console.log("beginning event initialization")
	for (const file of eventFiles) {
		const filePath = path.join(eventsPath, file);
		console.log(filePath)
		const event = await import(filePath);
		console.log(event)
		console.log(event.event.name)
		if (event.event.once) {
			console.log("In event.once")
			client.once(event.event.name, (...args) => event.event.execute(...args));
		} else {
			console.log("In else")
			client.on(event.event.name, (...args) => event.event.execute(...args));
		}
	}
	console.log("Function ended")
}

initializeEvents()





client.login(token)



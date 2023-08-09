const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Tests the latency between you and Discord!'),
	async execute(interaction) {
		const shouldMiss = Math.random() < 0.5;

		if (shouldMiss) {
			return interaction.reply("Whoops, I missed, try again");
		} else {
			const sentTimestamp = Date.now();
			const reply = await interaction.reply('Pinging...');

			const latency = Math.abs(reply.createdTimestamp - sentTimestamp);
			return reply.edit(`Pong! (${latency}ms)`);
		}
	},
};

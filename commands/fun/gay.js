const { SlashCommandBuilder } = require('discord.js')
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gay')
		.setDescription('Rate a user\'s gayness!')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user you want to test')
                .setRequired(true)),
	async execute(interaction) {
        const user = interaction.options.getUser('user');
        const gayFactor = Math.floor(Math.random() * 100) + 1;
        
        const gayEmbed = new EmbedBuilder()
            .setColor("#ffffff")
            .setDescription(`${user.toString()} is ${gayFactor}% gay! Congratulations!`)
            .setTimestamp()

        return await interaction.reply({ embeds: [gayEmbed] })        
	},
};

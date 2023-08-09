const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("anime")
        .setDescription('Find out your inner Anime!'),
    async execute(interaction) {
        const aboutEmbed = new EmbedBuilder()
            .setColor("#ffffff")
            .setDescription("Nah. I don't do that anime crap.")
            .setTimestamp()

        await interaction.reply({ embeds: [aboutEmbed] })
    },
};

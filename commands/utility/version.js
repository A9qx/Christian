const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('version')
        .setDescription('View information regarding this build.'),
    async execute(interaction) {
        const veresionEmbed = new EmbedBuilder()
            .setTitle("Version:")
            .setColor("#ffffff")
            .setDescription("View information regarding this build.")
            .addFields(
                { name: 'Change Log:', value: 'Inital Release', inline: true },
                { name: 'Build:', value: 'Development', inline: true },
                { name: 'Number:', value: '1.0.0', inline: true },
                { name: 'Node Version:', value: process.version, inline: true },
            )
            .setTimestamp()
            .setURL("https://github.com/A9qx/Christian")
            .setFooter({ text: 'Created by A9qx', iconURL: 'https://cdn.discordapp.com/avatars/563087321704955914/76bae140071868346e001db57fd3c16a.webp' });

        await interaction.reply({ embeds: [veresionEmbed] })
    },
};

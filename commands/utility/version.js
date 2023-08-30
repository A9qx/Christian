const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('version')
        .setDescription('View information regarding this build.'),
    async execute(interaction) {
        const uptime = process.uptime();
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);
        const uptimeString = `${hours}h ${minutes}m ${seconds}s`;

        const versionEmbed = new EmbedBuilder()
            .setTitle("Version:")
            .setColor("#ffffff")
            .setDescription("**What's Changed**:\n* i added more quotes lol by @falsonix in https://github.com/A9qx/Christian/pull/3\n**Full Changelog**: https://github.com/A9qx/Christian/compare/v1.1.0...v1.1.1")
            .addFields(
                { name: 'Uptime:', value: uptimeString, inline: true },
                { name: 'Build:', value: 'Stable', inline: true },
                { name: 'Number:', value: 'v1.1.1', inline: true },
                { name: 'Node Version:', value: process.version, inline: true },
                { name: 'Contributors:', value: 'Falsonix', inline: true }
            )
            .setTimestamp()
            .setURL("https://github.com/A9qx/Christian")
            .setFooter({ text: 'Created by A9qx', iconURL: 'https://cdn.discordapp.com/avatars/563087321704955914/76bae140071868346e001db57fd3c16a.webp' });

        await interaction.reply({ embeds: [versionEmbed] })
    },
};

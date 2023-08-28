const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('version')
        .setDescription('View information regarding this build.'),
    async execute(interaction) {
        const veresionEmbed = new EmbedBuilder()
            .setTitle("Version:")
            .setColor("#ffffff")
            .setDescription("**What's Changed**:\n* added more quotes by @falsonix in https://github.com/A9qx/Christian/pull/1\n* added even MORE quotes lmao by @falsonix in https://github.com/A9qx/Christian/pull/2\n\n**New Contributors**\n* @falsonix made their first contribution in https://github.com/A9qx/Christian/pull/1\n**Full Changelog**: https://github.com/A9qx/Christian/compare/v1.0.0...v1.1.0")
            .addFields(
                { name: 'Build:', value: 'Stable', inline: true },
                { name: 'Number:', value: 'v1.1.0', inline: true },
                { name: 'Node Version:', value: process.version, inline: true },
                { name: 'Contributors:', value: 'Falsonix', inline: true }
            )
            .setTimestamp()
            .setURL("https://github.com/A9qx/Christian")
            .setFooter({ text: 'Created by A9qx', iconURL: 'https://cdn.discordapp.com/avatars/563087321704955914/76bae140071868346e001db57fd3c16a.webp' });

        await interaction.reply({ embeds: [veresionEmbed] })
    },
};

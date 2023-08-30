const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Get information about the bot.'),
    async execute(interaction) {
        const uptime = process.uptime();
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);
        const uptimeString = `${hours}h ${minutes}m ${seconds}s`;

        const aboutEmbed = new EmbedBuilder()
            .setTitle("About:")
            .setColor("#ffffff")
            .setDescription("This project is **purely a joke**, no harm intended. Based on my IRL friend Christian. Code is open-source on GitHub (linked).")
            .setURL('https://github.com/A9qx/Christian')
            .setImage('https://static.wikia.nocookie.net/villainsfanon/images/4/4e/Troll-Face-Meme-PNG.png/revision/latest/scale-to-width-down/1200?cb=20190104124219')
            .addFields(
                { name: 'Uptime:', value: uptimeString, inline: true },
                { name: '/about', value: 'Get information about the bot.', inline: true },
                { name: '/ping', value: 'Tests the latency between you and Discord!', inline: true },
                { name: '/version', value: 'View information regarding this build.', inline: true },
                { name: '/anime', value: 'Find out your inner Anime!', inline: true },
                { name: '/gay', value: 'Rate a user\'s gayness!', inline: true },
                { name: '/joke', value: 'Get a random joke', inline: true },
                { name: '/quote', value: "I will give you something I've actually before.", inline: true },
                { name: '/rps', value: 'Play rock-paper-scissors with Me!', inline: true },
            )
            .setTimestamp()
            .setFooter({ text: 'Created by A9qx', iconURL: 'https://cdn.discordapp.com/avatars/563087321704955914/76bae140071868346e001db57fd3c16a.webp' });

        await interaction.reply({ embeds: [aboutEmbed] })
    },
};

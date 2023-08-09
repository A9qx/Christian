const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Get information about the bot.'),
    async execute(interaction) {
        const aboutEmbed = new EmbedBuilder()
            .setTitle("About:")
            .setColor("#ffffff")
            .setDescription("This project is **purely a joke**, no harm intended. Based on my IRL friend Christian. Code is open-source on GitHub (linked).")
            .setURL('https://github.com/A9qx/Christian')
            .setImage('https://static.wikia.nocookie.net/villainsfanon/images/4/4e/Troll-Face-Meme-PNG.png/revision/latest/scale-to-width-down/1200?cb=20190104124219')
            .setTimestamp()

        await interaction.reply({ embeds: [aboutEmbed] })
    },
};

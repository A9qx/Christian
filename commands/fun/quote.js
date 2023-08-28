const { SlashCommandBuilder } = require('discord.js')
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription("I will give you something I've actually before."),
    async execute(interaction) {
        const quotes = [
            "you're gonna make my computer explode",
            "poo poo city is at -160 -160",
            "no comment",
            "we should make a new doorsmp but with the vivecraft mod",
            "well technically you can @ everyone since you're mod",
            "it's ok, we can buy a new one",
            "***✅ TacticalSoupCan#9239 has been warned. || Don't abuse admin, please.***",
            "fronch fries",
            "typeerrrarace me right now",
            "andreas stop slapping that infant",
            "stop rizzing my mom",
            "Cock and ball torture, from Wikipedia, the free encyclopedia.",
            "Gay people are kind of gay ngl  -Joseph",
            "can i put my balls in yo jaw",
            "amongus",
            "it's too long  -Andreas"
        ];

        const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomQuoteIndex];

        const quotesEmbed = new EmbedBuilder()
            .setColor("#ffffff")
            .setTitle('Quote:')
            .setDescription(randomQuote)
            .setTimestamp()

        await interaction.reply({ embeds: [quotesEmbed] })
    },
};

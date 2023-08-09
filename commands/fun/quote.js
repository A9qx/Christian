const { SlashCommandBuilder } = require('discord.js')
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription("I will give you something I've actually before."),
    async execute(interaction) {
        const quotes = [
            "bro i'm boutta rizz up your aunt 💀",
            "you're gonna make my computer explode",
            "does anybody have requeue level of 10",
            "oh sweety sweet so do you think we can get started? im excited",
            "bro add teddy to the blacklist sheet",
            "poo poo city is at -160 -160",
            "no comment",
            "we should make a new doorsmp but with the vivecraft mod",
            "well technically you can @ everyone since you're mod",
            "i think i can get my parents to go half and half on this and then boom",
            "it's ok, we can buy a new one"
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

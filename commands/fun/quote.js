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
            "it's ok, we can buy a new one",
            "I am only available from 12:00-18:00 MST on Monday-Friday. (this may change if I am not busy on the weekends, but this is the general idea",
            "Hi there! I'm the owner of Azure Printing, falsonix. I started this business as a way for people to get affordable 3D prints with good quality. If you have any questions or want to start an order, go to ⁠get-a-quote and click the button there. Thanks!",
            "***✅ TacticalSoupCan#9239 has been warned. || Don't abuse admin, please.***",
            "CONFIDENTIALITY NOTICE: The contents of this email message and any attachments are intended solely for the addressees and/or may contain confidential or privileged information considered confidential under the Family Educational Rights and Privacy Act and may be legally protected from disclosure.  If you are not the intended recipient of this message or their agent, or if this message has been addressed to you in error, please immediately alert the sender by reply email and then delete this message and any attachments. The email may be a public record subject to disclosure under the Colorado Open Records Act.",
            "fronch fries",
            "typeerrrarace me right now"
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

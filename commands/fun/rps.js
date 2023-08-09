const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rps')
        .setDescription('Play rock-paper-scissors with the bot.')
        .addStringOption(option =>
            option.setName('choice')
                .setDescription('Your choice: rock, paper, or scissors.')
                .setRequired(true)),
    async execute(interaction) {
        const choices = ['rock', 'paper', 'scissors'];
        const userChoice = interaction.options.getString('choice');
        const botChoice = choices[Math.floor(Math.random() * choices.length)];

        let result;

        if (userChoice === botChoice) {
            result = "It's a tie!";
        } else if (
            (userChoice === 'rock' && botChoice === 'scissors') ||
            (userChoice === 'paper' && botChoice === 'rock') ||
            (userChoice === 'scissors' && botChoice === 'paper')
        ) {
            result = 'You won!';
        } else {
            result = 'You lost!';
        }

        const resultsEmbed = new EmbedBuilder()
            .setTitle(`${result}`)
            .setColor("#ffffff")
            .setDescription(`You chose ${userChoice}, I chose ${botChoice}. GG`)
            .setTimestamp()

        await interaction.reply({ embeds: [resultsEmbed] })
    },
};

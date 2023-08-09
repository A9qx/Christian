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
        let embedColor;
        let embedDescription;
        let embedImage;

        if (userChoice === botChoice) {
            result = "It's a tie!";
            embedDescription = `How did we get here? You chose ${userChoice}, I chose ${botChoice}.`;
            embedColor = "#ffffff";
            embedImage = "https://i.redd.it/0qfv4t2uzok31.jpg";
        } else if (
            (userChoice === 'rock' && botChoice === 'scissors') ||
            (userChoice === 'paper' && botChoice === 'rock') ||
            (userChoice === 'scissors' && botChoice === 'paper')
        ) {
            result = 'You won!';
            embedColor = "#00ff00";
            embedDescription = `Go touch grass. Turn off your hacks god damm bro. You chose ${userChoice}, I chose ${botChoice}.`;
            embedImage = "https://media.tenor.com/MLJck5Gdw-oAAAAM/angry.gif";
        } else {
            result = 'You lost!';
            embedColor = "#ff0000";
            embedDescription = `Hah, I'm just better. Maybe you should get a better gaming chair. You chose ${userChoice}, I chose ${botChoice}.`;
            embedImage = "https://media.tenor.com/jkEGuXyQzY4AAAAd/get-good-kid-meow.gif";
        }

        const resultsEmbed = new EmbedBuilder()
            .setTitle(`${result}`)
            .setColor(embedColor)
            .setDescription(embedDescription)
            .setTimestamp()
            .setImage(embedImage)

        await interaction.reply({ embeds: [resultsEmbed] })
    },
};

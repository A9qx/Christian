const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');
const nscURL = "false"; // Disabled by default.
const nscToken = "false"; // Disabled by default.

function mapDirectionToEmoji(direction) {
    switch (direction) {
        case 'DoubleUp':
            return '⇈';
        case 'SingleUp':
            return '↑';
        case 'FortyFiveUp':
            return '↗';
        case 'Flat':
            return '→';
        case 'FortyFiveDown':
            return '↘';
        case 'SingleDown':
            return '↓';
        case 'DoubleDown':
            return '⇊';
        case 'NOT COMPUTABLE':
            return '❔';
        case 'RATE OUT OF RANGE':
            return '⚠️';
        default:
            return '';
    }
}

function getEmbedColor(glucose) {
    if (glucose >= 70 && glucose <= 180) {
        return '#00ff00'; // Green
    } else if ((glucose >= 60 && glucose < 70) || (glucose > 180 && glucose <= 250)) {
        return '#ffff00'; // Yellow
    } else {
        return '#ff0000'; // Red
    }
}

function getEmbedDescription(glucose) {
    if (glucose >= 70 && glucose <= 180) {
        return '**the ginger is contained!**\n\nThe ideal range for Type 1 Diabetics is between 70mg/dL and 180mg/dL.';
    } else if (glucose >= 60 && glucose < 70) {
        return '**the ginger needs to chug juice**\n\nType 1 Diabetics are recommended to consume juice or food when their glucose levels fall below 70mg/dl.';
    } else if (glucose < 60) {
        return '**the ginger is dying!**\n\nType 1 Diabetics need to act quickly and consume juice or food when their glucose levels fall below 60mg/dL or they may become unconcious.';
    } else if (glucose > 180 && glucose <= 250) {
        return '**the ginger is stealing your cookies, he must be stopped!**\n\nAfter meals or snacks, individuals with Type 1 Diabetes often experience glucose levels rising above 180mg/dL.';
    } else {
        return '**the gingers fatass just stole all your cookies, you were too late!**\n\nType 1 Diabetics may experience headaches and dehydration if their glucose exceeds 250mg/dL for an extended time, requiring insulin administration.';
    }
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('glucose')
        .setDescription('Retrieve Blood Glucose data from Nightscout.'),
    async execute(interaction) {
        // Your Nightscout URL
        const nightscoutUrl = nscURL;
        
        // Nightscout API token from config.json
        const nightscoutToken = nscToken;

        // Check if Nightscout API token is set to "false"
        if (nightscoutToken === 'false') {
            const disabledEmbed = new EmbedBuilder()
                    .setTimestamp()
                    .setDescription(`Contact the host to remove this message!`)
                    .setTitle(`Command disabled.`)
                    .setColor(`#ff0000`);
            await interaction.reply({ embeds: [disabledEmbed] });
            return;
        }

        try {
            // Fetch Blood Glucose data from Nightscout
            const response = await fetch(`${nightscoutUrl}/api/v1/entries.json?count=1`, {
                headers: {
                    'API-SECRET': nightscoutToken
                }
            });
            const data = await response.json();

            // Check if there is data available
            if (data.length > 0) {
                const glucose = data[0].sgv;
                const timestamp = new Date(data[0].date).toLocaleString();
                const embedColor = getEmbedColor(glucose);
                const direction = mapDirectionToEmoji(data[0].direction);
                const description = getEmbedDescription(glucose);

                const glucoseEmbed = new EmbedBuilder()
                    .setTitle(`Glucose:`)
                    .setDescription(`${description}`)
                    .addFields(
                        { name: 'Value:', value: `**${glucose}mg/dL ${direction}**`, inline: true },
                    )
                    .setColor(embedColor)
                    .setTimestamp()
                    .setFooter({ text: 'Real-time data provided by Nightscout' }); 

                await interaction.reply({ embeds: [glucoseEmbed] });
            } else {
                await interaction.reply(`No Blood Glucose data available.`);
            }
        } catch (error) {
            console.error('Error fetching Blood Glucose data:', error);
            await interaction.reply('An error occurred while fetching Blood Glucose data.');
        }
    },
};

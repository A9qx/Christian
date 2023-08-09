const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Tests the latency between you and Discord!'),
	async execute(interaction) {
        const pingingEmbed = new EmbedBuilder()
        .setTitle("Ping!?!?...")
        .setColor("#ffffff")

        const sentTimestamp = Date.now();
        const reply = await interaction.reply({ embeds: [pingingEmbed] });

        const latency = Math.abs(reply.createdTimestamp - sentTimestamp);

		const shouldMiss = Math.random() < 0.5;

		if (shouldMiss) {
            const missEmbed = new EmbedBuilder()
            .setTitle("Whoops!")
            .setColor("#fc0324")
            .setDescription("I missed the ball, try again, i forgor how to play ping pong")
            .setImage('https://thumbs.gfycat.com/RashShrillBluegill-size_restricted.gif')
            .setTimestamp()

            return reply.edit({ embeds: [missEmbed] });
		} else {
            const madeitEmbed = new EmbedBuilder()
            .setTitle(`Pong! (${latency}ms)`)
            .setColor("#39e31b")
            .setDescription("Wow! I made it! Throw me another one!")
            .setImage('https://i.gifer.com/3eAS.gif')
            .setTimestamp()

            return reply.edit({ embeds: [madeitEmbed] });
		}
	},
};

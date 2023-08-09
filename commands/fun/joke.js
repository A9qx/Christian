const { SlashCommandBuilder } = require('discord.js')
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Get a random joke'),
    async execute(interaction) {
        const jokes = [
            "I just got my doctor's test results and I'm really upset about it. Turns out, I'm not gonna be a doctor.",
            "My grief counselor died. He was so good, I don’t even care.",
            "Today, I asked my phone “Siri, why am I still single?” and it activated the front camera.",
            "You.",
            "A man wakes from a coma. His wife changes out of her black clothes and, irritated, remarks, “I really cannot depend on you in anything, can I!",
            "What does my dad have in common with Nemo? They both can’t be found.",
            "When does a joke become a dad joke? When it leaves you and never comes back.",
            "The doctor gave me one year to live, so I shot him with my gun. The judge gave me 15 years. Problem solved.",
            "What did the Titanic say as it sank? I’m nominating all passengers for the Ice Bucket Challenge!",
            "Why can’t Michael Jackson go within 500 meters of a school? Because he’s dead.",
            "“I’m sorry” and “I apologize” mean the same thing. Except at a funeral.",
            "You don’t need a parachute to go skydiving. You need a parachute to go skydiving twice.",
            "My girlfriend wanted a marriage just like a fairy tale. Fair enough. I gave her a loaf of bread and left her in the forest.",
            "My daughter asked me how stars die. Usually an overdose I told her.",
            "I was digging in our garden when I found a chest full of gold coins. I was about to run straight home to tell my wife about it, but then I remembered why I was digging in our garden.",
            "My girlfriend’s dog died, so I tried to cheer her up by getting her an identical one. It just made her more upset. She screamed at me and said, What am I supposed to do with two dead dogs?",
            "My elderly relatives liked to tease me at weddings, saying, “You’ll be next!” They soon stopped though, once I started doing the same to them at funerals.",
            "Two hunters are in the woods when one of them collapses. His hunting buddy immediately calls 911. My friend isn't breathing, he shouts into the phone. What should I do? Relax, the operator tells him. I can help. First, let's make sure he's dead. There's silence, and then a gunshot. The guy gets back on the phone and says, OK, now what?",
            "One man’s trash is another man’s treasure. Wonderful saying, horrible way to find out you were adopted. I know a thing or two, cause I've seen a thing or two."
        ];

        const randomJokeIndex = Math.floor(Math.random() * jokes.length);
        const randomJoke = jokes[randomJokeIndex];

        const jokeEmbed = new EmbedBuilder()
            .setColor("#ffffff")
            .setTitle('Joke:')
            .setDescription(randomJoke)
            .setTimestamp()

        await interaction.reply({ embeds: [jokeEmbed] })
    },
};

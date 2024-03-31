# Christian
![troll_face](https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png)
  

A Discord bot built primarily as a joke, based on my IRL friend Christian. Feel free to use, under the MIT license.

  

First, install the required packages. The project was originally built using NodeJS v18.17.0, today it uses v20.12.0, however really any version that supports discord.js v14+ might work.

## How to use:

  

    yarn install

## Fill in the required tokens in config.json.example:

  

    {
    
    	"clientId": "get from discord developer portal and put here",
    
    	"guildId": "copy the guild id your using to test the bot in, and put here",
    
    	"token": "get from discord developer portal and put here"
    
    }

### Rename the file to config.json when done, don't worry it's in .gitignore

To ensure the seamless functionality of slash commands, a few essential components must be considered. The Guild ID, signifying the specific server through which you're effecting modifications to the bot, plays a pivotal role. By associating slash command registration with this designated server, you don't need to wait 24 hours to see if your changes work when you publish it globally.

## Glucose Command

This command is a special Easter egg, included by the creator of this project, A9qx, who has Type 1 Diabetes and is a ginger. **There's no documentation here, and 99.98% of you will not get it working**, since it requires having Type 1 Diabetes to get Nightscout working. However, if you're among the rare 0.001% who share this condition, you can refer to the Nightscout documentation to input your API key and URL and make it work!

## Publishing slash commands:

**Most users forget this step** so pay attention. If you are making modifications to the bot, and developing it, publish the commands locally to one server. However, if your making the bot public, publish the commands globally. Please note this might take up to 24 hours for it to publish. You must repeat this process if you add a command, or remove a command.

  

### Locally:

  

    node deploy-commands.js

### Global:

  

    node deploy-commands-global.js

## Run the Bot:

    yarn start

### That's it! You should be up and running now! You may also use it with pm2 to keep it running 24/7

    pm2 start index.js --name Christian

  

## Donate:

  

Enjoying the project, feel free to send me a tip if you want, **"dem bills an't gonna pay themselves!" - Christian**

  

- Cash App: **$A9qx**

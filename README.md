# Christian

  

A Discord bot built primarily as a joke, based on my IRL friend Christian. Feel free to use, under the MIT license.

  

First, install the required packages. The project was built using NodeJS v18.17.0, really any version that supports discord.js v14+ might work.

## How to use:

  

yarn install

## Fill in the required tokens in config.json.example:

  

{

"clientId": "get from discord developer portal and put here",

"guildId": "get from discord developer portal and put here",

"token": "get from discord developer portal and put here"

}

### Rename the file to config.json when done, don't worry it's in .gitignore

To ensure the seamless functionality of slash commands, a few essential components must be considered. The Guild ID, signifying the specific server through which you're effecting modifications to the bot, plays a pivotal role. By associating slash command registration with this designated server, you don't need to wait 24 hours to see if your changes work when you publish it globally.

  

## Publishing slash commands:

**Most users forget this step** so pay attention. If you are making modifications to the bot, and developing it, publish the commands locally to one server. However, if your making the bot public, publish the commands globally. Please note this might take up to 24 hours for it to publish. You must repeat this process if you add a command, or remove a command.

  

### Locally:

  

node deploy-commands.js

### Global:

  

node deploy-commands-global.js

## Run the Bot:

    node index.js

### That's it! You should be up and running now! You may also use it with pm2 to keep it running 24/7

    pm2 start index.js --name Christian

  

## Donate:

  

Enjoying the project, feel free to send me a tip if you want, **"dem bills an't gonna pay themselves!" - Christian**

  

- Cash App: **$A9qx**
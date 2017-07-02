"use strict";

const web = require('./web');
const bot = require('./bot');

const userConfig = require('./config.json')

var webConfig = {
    port: 3000
};

var botConfig = {
    logAll: true
};

/* copy in user-specified configuration */
Object.assign(webConfig, userConfig.web);
Object.assign(botConfig, userConfig.bot);

/* always control externally */
botConfig.autoConnect = false;

bot.getClient(botConfig).connect();
web.listen(webConfig.port);


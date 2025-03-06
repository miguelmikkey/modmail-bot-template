require("dotenv").config();

module.exports = {
  GUILD_ID: process.env.GUILD_ID,
  BOT_TOKEN: process.env.DISCORD_TOKEN,
  CLIENT_ID: process.env.CLIENT_ID,

  modmail: {
    categoryID: process.env.MODMAIL_CATEGORY_ID,
    logChannelID: process.env.MODMAIL_LOG_CHANNEL_ID,
    staffRoles: process.env.MODMAIL_ROLE_ID,
  },
};

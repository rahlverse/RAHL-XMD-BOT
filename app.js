{
  "name": "RAHL XMD Bot",
  "description": "Advanced WhatsApp Bot with Baileys Multi-Device Support",
  "repository": "https://github.com/rahlverse/RAHL-XMD-BOT",
  "logo": "https://i.imgur.com/6Jl7YZr.png",
  "keywords": ["whatsapp", "bot", "baileys", "multi-device"],
  "stack": "heroku-22",
  "env": {
    "OWNER_NUMBER": {
      "description": "Your WhatsApp number (with country code, no +)",
      "value": "254112399557"
    },
    "BOT_NAME": {
      "description": "Name of your bot",
      "value": "RAHL XMD"
    },
    "PREFIX": {
      "description": "Bot command prefix",
      "value": "."
    }
  },
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    }
  ]
}

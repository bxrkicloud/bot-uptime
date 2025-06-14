require('dotenv').config(); // dotenv paketini dahil et
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

// .env dosyasından tokenları al
const tokens = [
    process.env.TOKEN_1,
    process.env.TOKEN_2,
    process.env.TOKEN_3,
    process.env.TOKEN_4
];

// Durum listesi
const statusList = [
    { name: '♕ Royalty <3 Cloud Systems', type: ActivityType.Competing },
    { name: '♕ Royalty <3 Cloud Systems', type: ActivityType.Competing },
    { name: '♕ Royalty <3 Cloud Systems', type: ActivityType.Competing },
    { name: '♕ Royalty <3 Cloud Systems', type: ActivityType.Competing },
    { name: '♕ Royalty discord.gg/theroyalty', type: ActivityType.Competing },
    { name: '♕ Royalty discord.gg/theroyalty', type: ActivityType.Competing },
    { name: '♕ Royalty discord.gg/theroyalty', type: ActivityType.Competing },
    { name: '♕ Royalty discord.gg/theroyalty', type: ActivityType.Competing },
    { name: '♕ Royalty On Top!', type: ActivityType.Competing },
    { name: '♕ Royalty On Top!', type: ActivityType.Competing },
    { name: '♕ Royalty On Top!', type: ActivityType.Competing },
    { name: '♕ Royalty On Top!', type: ActivityType.Competing },
    { name: '♕ Cloud System gücüyle yapıldı!', type: ActivityType.Competing },
    { name: '♕ Cloud System gücüyle yapıldı!', type: ActivityType.Competing },
    { name: '♕ Cloud System gücüyle yapıldı!', type: ActivityType.Competing },
    { name: '♕ Cloud System gücüyle yapıldı!', type: ActivityType.Competing }
];

tokens.forEach((token, index) => {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });

    client.once('ready', () => {
        console.log(`Bot ${index + 1} (${client.user.tag}) aktif!`);

        let currentStatus = 0;

        const updateStatus = () => {
            const status = statusList[currentStatus];
            client.user.setPresence({
                activities: [status],
                status: 'dnd'
            });
            console.log(`Bot ${index + 1} durumu: ${status.name}`);
            currentStatus = (currentStatus + 1) % statusList.length;
        };

        updateStatus();
        setInterval(updateStatus, 4000);
    });

    client.login(token).catch(err => {
        console.error(`Bot ${index + 1} giriş yapamadı:`, err);
    });
});

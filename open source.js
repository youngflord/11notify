const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-' ;
const Stripe = require('stripe');
const stripe = Stripe('[KEY_HIDDEN]');
//Discord token
client.login('ODMwNDk2NDUxMjc2NDM5NjAy.YHHiFw.in0pwksTYm2WZcAnjbDq1n8YzsQ');

//Start up
client.once('ready', () => {
    console.log("Ready! -- XI Notify -- KP's creations");
    client.user.setPresence({
        status: 'online',
        activity: {
            name: 'members cook',
            type: 'WATCHING',
        }
    })
});

//Payout
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase();
    
    if (command === `payout`) {
        message.reply(`Generating payout of ${args[0]} Pence`)
        const payout = stripe.payouts.create({
            amount: `${args}`,
            currency: 'gbp',
        });
    }else if (command === `balance`) {
        stripe.balance.retrieve(function(err, balance) {});
    }
});

//Releases
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase();

    if (command === `hyperroyal`) {
        const msg = new Discord.MessageEmbed()
            .setTitle('Jordan 1 High Hyper Royal')
            .setColor('#00fffb')
            .setURL('https://stockx.pvxt.net/c/1793321/530344/9060?u=https://stockx.com/air-jordan-1-retro-high-hyper-royal-smoke-grey')
            .setDescription('Release Date: April 17th\nPID: 555088-402\nRetail: £140\nPredicted resell: £300+')
            .setThumbnail('https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Hyper-Royal-Smoke-Grey/Images/Air-Jordan-1-Retro-High-Hyper-Royal-Smoke-Grey/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1610040536&fit=clip&fm=webp&ixlib=react-9.0.3&w=1246')
            .addFields (
                {name: 'Raffles', value: '[END.](https://tidd.ly/3sf9g4F%27%7D) - Ends Apr 17, 09:00\n[A FEW STORE](https://en.afew-store.com/collections/sneaker-releases/products/air-jordan-1-retro-high-og-hyper-royal-white-lt-smoke-grey)  - Ends Apr 17, 08:00\n[BlackBox](https://drops.blackboxstore.com/it/drop/air-jordan-1-retro-high-og-hyper-royal/) - Ends Apr 16, 22:55\n[STRESS](https://stress95.typeform.com/to/Ca0nrTLM) - Ends Apr 17, 11:00\n[Nigra Mercato](https://rtrv.in/3dJCgfs) - Ends Apr 17, 11:00\n[BSTN](https://raffle.bstn.com/air-jordan-i-retro-high-og-hyper-royal-) - Ends Apr 16, 14:00\n[Macadam](https://www.instagram.com/p/CNcRR3qIgQy/) - Ends Apr 16, 13:00\n[Bshop](https://www.instagram.com/p/CNVOoipHeUH/) - Ends Apr 13, 11:00'},
                {name: 'FCFS - April 17 8am BST', value:'[SNKRS APP](https://www.nike.com/gb/launch/t/air-jordan-1-hyper-royal)\n[JD](https://www.jdsports.com/store/sneaker-release-dates?mnid=release_calendar&awc=1431_1618070227_50beb7a7cb5300d439366f1c9fe1960b&utm_source=affiliate&utm_medium=Social+Content&utm_campaign=sneaktorious)\n[Snipes](https://tidd.ly/3qclH0H)\n[Footlocker](https://tidd.ly/2PT9m4p)\n Offspring - Shock drop, link will be sent at the time'}
            )
            .setFooter('XI Notify', 'https://pbs.twimg.com/profile_images/1371575458848980993/j-rqzkUO_400x400.jpg')
            .setTimestamp();
        message.channel.send(msg);  
        const msg2 = new Discord.MessageEmbed() 
        .setTitle('Continued') 
        .setColor('#00fffb')
        .setURL('https://stockx.pvxt.net/c/1793321/530344/9060?u=https://stockx.com/air-jordan-1-retro-high-hyper-royal-smoke-grey')
        .addFields (
            {name: 'Raffles', value: '[Nakedcph](https://www.nakedcph.com/xx/986/air-jordan-1-retro-high-og-555088-402-fcfs-raffle) - Ends Apr 13, 08:00\n[BSTN 2](https://titolo.club/air-jordan-1-retro-high-og-hyper-royal/) - Ends Apr 16, 14:00\n[43](https://track.webgains.com/click.html?wgcampaignid=1386005&wgprogramid=10253&wgtarget=https://www.43einhalb.com/p/nike-air-jordan-1-retro-high-og-hyper-royal-595065) - End unconfirmed\n[Snipes](https://tidd.ly/3a1tBnv) - Ends Apr 15, 09:00\n[SVD](https://www.sivasdescalzo.com/en/p/air-jordan-1-retro-high-og-555088-402) - Ends Apr 16, 07:10\n[Asphalt](https://tinyurl.com/yzj74avj) - Ends Apr 14, 09:00\n[Hanon](https://launches.hanon-shop.com/collections/launch/products/nike-air-jordan-1-retro-high-og-hyper-royal-555088402) - Ends Apr 16, 12:00'}
        )
        .setFooter('XI Notify', 'https://pbs.twimg.com/profile_images/1371575458848980993/j-rqzkUO_400x400.jpg')
        .setTimestamp();
    message.channel.send(msg2)
    console.log('Hyper Royal guide was checked by', message.author.username)
    }else if (command == 'instore') {
    const msg3 = new Discord.MessageEmbed()
            .setTitle('In-Store Guide')
            .setColor('#000000')
            .setURL('https://stockx.pvxt.net/c/1793321/530344/9060?u=https://stockx.com/air-jordan-1-retro-high-hyper-royal-smoke-grey')
            .setDescription("Prioritize JD and size? stores. FTL are unlikely to have as much stock as they have been selling recently through phone appointments but still worth a check if your near one!\nAlso worth mentioning if you're going central go very early and be careful, if there are insane crowds obviously not worth sticking around, and use common sense!")
            .setThumbnail('https://pbs.twimg.com/profile_images/1371575458848980993/j-rqzkUO_400x400.jpg')
            .addFields (
                {name: 'Office 10am', value: '- Pearl Dunk Lows\n- Disrupt Dunks\m- AF1 Pixels\nWorth a check at carnaby and oxford street offices. Decent chance they will have some of the new disrupts'},
                {name: 'Footlocker 11am', value:'- Jordan 1 carbon mens pairs\n- Jordan 1 low mens\n- Jordan 1 banned mids mens\n- Jordan 1 hyper royals (mids)\nStock is not guaranteed for everyone.'},
                {name: 'JD 9am', value:'-Banned mids gs and mens\n-Triple white gs\n-Vast grey dunks mens sizes\n-Hyper royal mids gs sizes\nOxford street JD wil have more than Bond street one normally. Will be a lot of people here as one of main stores that will have stock.'},
                {name:'Size? Carnaby 10am', value:'-Banned mids\n-All colors of disrupt dunks are instock\n-Dunk highs\nMost other hype shoes will be raffled for carnaby but chance that other stores in london such as harrods will have better shoes (Highs, Dunks etc) yet these will still do Instagram raffles for the majority of pairs.'},
                {name:'Offspring 10am', value:'-Disrupt dunks at womens Selfirdges (second floor)\n-Mids/Dunks (at locals such as camden)\nNotes: Unlikely that mens Offspring Selfridges will put stuff out'},
                {name:'Niketown 10am', value:'Highly unlikely they will put anything out, will update as soon as they eventually do'}
            )
            .setFooter('XI Notify', 'https://pbs.twimg.com/profile_images/1371575458848980993/j-rqzkUO_400x400.jpg')
            .setTimestamp();
    message.channel.send(msg3)
    }else if (command == 'uniblue4') {
        const msg3 = new Discord.MessageEmbed()
                .setTitle('Jordan 4 Retro University Blue')
                .setColor('#00fffb')
                .setURL('https://stockx.com/air-jordan-4-retro-university-blue?utm_source=af&utm_medium=imp&utm_campaign=2066870&impactSiteId=VNqUn9RM5xyLTS5wUx0Mo3EqUkES6FRVm0asV40&clickid=VNqUn9RM5xyLTS5wUx0Mo3EqUkES6FRVm0asV40&utm_term=VNqUn9RM5xyLTS5wUx0Mo3EqUkES6FRVm0asV40&utm_content=_530344&irgwc=1')
                .setDescription("Release Date: April 21st\nPID: 555088-402\nStyle code: CT8527-400\nRetail: £170\nPredicted resell: £300+")
                .setThumbnail('https://stockx-360.imgix.net/Air-Jordan-4-Retro-University-Blue/Images/Air-Jordan-4-Retro-University-Blue/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1616520672&fit=clip&fm=webp&ixlib=react-9.0.3&w=1246')
                .addFields (
                    {name: 'FCFS', value: '[Footlocker](https://www.footlocker.co.uk/en/release-dates?utm_medium=affiliate&utm_source=awin&utm_campaign=644499&awc=15594_1618596270_ea844bfe8036784edefebd9249dc6e07)\n[SNKRS](https://www.nike.com/gb/launch/t/air-jordan-4-university-blue?CP=EUNS_AFF_AWIN_UK_644499_sneaktorious_169839&utm_source=sneaktorious&utm_medium=affiliate&utm_campaign=644499&utm_content=169839&awc=16327_1618596378_39e34f1058193fec004fc90707944dfb)'},
                    {name: 'Raffles', value: '[A FEW STORE](https://en.afew-store.com/products/air-jordan-4-retro-university-blue-black-tech-grey-white)\n[Footshop](https://www.anrdoezrs.net/links/9139292/type/dlg/https://releases.footshop.com/air-jordan-4-retro-ikg41ngB6RTO0K-RCznN)\n[BlackBox](https://drops.blackboxstore.com/it/drop/air-jordan-4-retro-university-blue/)\n[Oqium](https://oqium.com/pages/ct8527-400)\n[solebox](https://track.webgains.com/click.html?wgcampaignid=1411665&wgprogramid=11559&wgtarget=https://blog.solebox.com/air-jordan-4-retro-unc/)\n[END.](https://tidd.ly/3tgQ7AB)\n[Hanon](https://launches.hanon-shop.com/collections/launch/products/nike-air-jordan-4-retro-ct8527400)\n[wellgosh](https://launches.wellgosh.com/nike-air-jordan-4-retro-university-blue-ct8527-400.html)'}
                )
                .setFooter('XI Notify', 'https://pbs.twimg.com/profile_images/1371575458848980993/j-rqzkUO_400x400.jpg')
                .setTimestamp();
        message.channel.send(msg3)
        console.log('Jordan 4 Uni Blue guide was checked by', message.author.username)
    }
})

//Slots reactions
client.on('message', message => {
    if (message.author.username === '11notify Slots') {
        message.react('🟥')
        message.react('🟦')
    }
})
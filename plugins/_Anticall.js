conn.ev.on("call", async (json) => {
    for (let id of json) {
        if (id.status === "offer") {
            let msg = await conn.sendMessage(id.from, { text: "`Anticall Feature is active so That's why you have been blocked for calling the bot contact the to unblock yourself from bot number `\n\nhttps://whatsapp.com/channel/0029VaKNbWkKbYMLb61S1v11" });

            conn.sendContact(id.from, global.owner, msg);
            await conn.rejectCall(id.id, id.from);

            // Block the user
            await conn.updateBlockStatus(id.from, 'block');
        }
    }
});

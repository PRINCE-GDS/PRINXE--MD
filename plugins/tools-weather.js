import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*Give a place to search*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
const Temperature = res.data.main.temp + "°C"
const Minimum_Temperature = res.data.main.temp_min + "°C"
const Maximum_Temperature = res.data.main.temp_max + "°C"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "km/h"
const wea = `ʜᴇʀᴇ ɪs ʏᴏᴜʀ ɢɪᴠᴇɴ ᴘʟᴀᴄᴇ ᴡᴇᴀᴛʜᴇʀ\n\n「 📍 」ᴘʟᴀᴄᴇ: ${name}\n「 🗺️ 」ᴄᴏᴜɴᴛʀʏ: ${Country}\n「 🌤️ 」ᴠɪᴇᴡ: ${Weather}\n「 🌡️ 」 ᴛᴇᴍᴘᴇʀᴀᴛᴜʀᴇ: ${Temperature}\n「 💠 」 ᴍɪɴɪᴍᴜᴍ ᴛᴇᴍᴘᴇʀᴀᴛᴜʀᴇ: ${Minimum_Temperature}\n「 📛 」 ᴍᴀxɪᴍᴜᴍ ᴛᴇᴍᴘᴇʀᴀᴛᴜʀᴇ: ${Maximum_Temperature}\n「 💦 」 ʜᴜᴍɪᴅɪᴛʏ: ${Humidity}\n「 🌬️ 」  ᴡɪɴᴅsᴘᴇᴇᴅ: ${Wind}\n\n🛡️ᴛʜᴇ-ᴘʀɪɴᴄᴇ-ʙᴏᴛ🛡️`
m.reply(wea)
} catch {
return "*ERROR*"}}
handler.help = ['weather *<place>*']
handler.tags = ['tools']
handler.command = /^(climate|weather|mosam)$/i
export default handler

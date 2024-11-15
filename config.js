const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_00_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUxLFxuICAgICAgICA0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2LFxuICAgICAgICA2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDk5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYWIxcmROT3M4Q2FscTNSNTQrN2RZU2xMWDVsNm1mVG9YZ3NoNzIwRVN6TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibzFWUWVQNVJULUtpUXlydGRuRDJqd1wiLFxuICBcInBob25lSWRcIjogXCJlOWRjMTRmNC0zMjU4LTQ5ZmQtODYyYi0xNTRmM2NkMDM4YmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY0LFxuICAgICAgNDcsXG4gICAgICAzOCxcbiAgICAgIDg0LFxuICAgICAgMjA2LFxuICAgICAgMTkzLFxuICAgICAgMjI5LFxuICAgICAgMTk4LFxuICAgICAgMTc0LFxuICAgICAgODAsXG4gICAgICAyMjAsXG4gICAgICAxMDEsXG4gICAgICA0NyxcbiAgICAgIDM0LFxuICAgICAgMjIxLFxuICAgICAgMjIsXG4gICAgICAxMTksXG4gICAgICAxMjMsXG4gICAgICAxNjgsXG4gICAgICA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMTcyLFxuICAgICAgNjgsXG4gICAgICAxMDcsXG4gICAgICAxOTEsXG4gICAgICAxMjMsXG4gICAgICAyNDYsXG4gICAgICAyMTEsXG4gICAgICAxNjcsXG4gICAgICAyMzYsXG4gICAgICAyMjEsXG4gICAgICA2MCxcbiAgICAgIDY4LFxuICAgICAgNzQsXG4gICAgICA3NixcbiAgICAgIDMxLFxuICAgICAgMTU0LFxuICAgICAgMjMzLFxuICAgICAgNjMsXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkI0OEJGUEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MDgwNjIxMDo3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmY7wnZCK4a2E4oKKzLbht6TigonMts2l4oKCzLbht57igoPMts2k4oKCzLbht6HigoTMts2t4oKAzLbMtuGqs+KCiMy24bec4oKAzLbNpeKChsy24bee4oKCzLbht57igoHMts2k4oKAzLbht6JcIixcbiAgICBcImxpZFwiOiBcIjE5NzI0MjUxNDMzNzk5MTo3MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNManl1WnNDRU5hTDNia0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldMTkpzRVBsQVVyREF1SGM5M2tBZ1p2a24vWE1ITzA3cWJ3dGxjeW9nRzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVklrR3JUWnZONzFmQjdkNVBzek8yYStmZG5MRG5MdkJYSkdwOFUycDQvL0lJMk81V3A4SWV0OU1OUnV6cXk3K1pmNEVxNnFpdzJ2dURzVDdOb3lFRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUURyeEVDMEQ1bHd1Y3YzNlBRaDU1Nm82bUN1L1ZhTFhacU8xbzl3a1MvdGVpZUdoWG5CTjRYajNWQnRzbHNrdmUxelp5UE92K0lWM3lBSHdYVTI3Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwODA2MjEwOjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE2NzU2MTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKS1VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpLVS5qc29uIjogIntcImtleURhdGFcIjpcIm1QZGhpV3F3Q250RUI1QlZrZXh6V3J5Y1hUbDRKa3JLQklOei9zcjZmTlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTk0NDQyNTUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE2NzU2MTEzOTJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Malik-XMD",
  ownername:process.env.OWNER_NAME|| "ZiDi-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ZiD-MD"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

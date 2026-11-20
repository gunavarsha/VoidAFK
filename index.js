
const util = require('minecraft-server-util');

const SERVER = 'voidrealm.play.hosting';
const PORT = 25565;

async function checkServer() {
  console.log('\n🌍 VoidRealm SMP Status Check');

  try {
    const result = await util.status(SERVER, PORT);

    console.log('🟢 Status: ONLINE');
    console.log('👥 Players:', result.players.online);
    console.log('🎮 Version:', result.version.name);
  } catch (error) {
    console.log('🔴 Status: OFFLINE or unreachable');
  }
}

checkServer();

// Check every 60 seconds
setInterval(checkServer, 60 * 1000);

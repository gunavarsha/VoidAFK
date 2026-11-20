const util = require('minecraft-server-util');

const SERVER = 'voidrealm.play.hosting';

async function checkServer() {
  try {
    const result = await util.status(SERVER, 25565);

    console.log('🌍 VoidRealm SMP');
    console.log('Status: ONLINE');
    console.log('Players:', result.players.online);
    console.log('Version:', result.version.name);
  } catch (error) {
    console.log('🔴 Server is offline or unreachable.');
  }
}

checkServer();

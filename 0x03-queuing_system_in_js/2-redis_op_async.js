import redis from 'redis';
const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
});

client.on('error',(err) => {
    consosle.log(`Redis client not connected to the server: ${err}`);
});

client.on('connect', () => {
    console.log('Redis client connected to the server');
});

function setNewSchool(schoolName, value){
    client.set(schoolName, value, redis.print);
}

const { promisify } = require('util');

// Assuming `client` is your Redis client
const getAsync = promisify(client.get).bind(client);

async function displaySchoolValue(schoolName) {
    try {
        const reply = await getAsync(schoolName);
        console.log(reply);
    } catch (err) {
        console.error(err);
    }
}

// Example usage
(async () => {
    const schoolName = 'someSchoolKey';
    await displaySchoolValue(schoolName);
})();


displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

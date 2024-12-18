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

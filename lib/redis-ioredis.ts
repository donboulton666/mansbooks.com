const Redis = require('ioredis');

let client = new Redis("redis://default:4c76304b6f05414884ef15a2e3773699@usw1-certain-osprey-33919.upstash.io:33919");
client.set('foo', 'bar')
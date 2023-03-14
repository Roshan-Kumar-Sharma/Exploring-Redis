const RedisClient = require("ioredis")

const redis = new RedisClient()

// redis.set("name", "roshan")

// redis.mset("subject", "physics", "topic", "electri fields")
// redis.mget("subject", "topic", (err, data) => {
//     console.log(data)
// })
// redis.keys("*").then(data => console.log(data))

// HASHES
// redis.hset("employees", { id: "emp1"})
// redis.hmset("employees", { team: "IT", project: "Data pipeline" })
// redis.hgetall("employees", (err, data) => {
//     console.log(data)
// })

// LISTS
// redis.rpush("countries", ["India", "Singapore", "Bahamas", "Brazil"])
// redis.lrange("countries", 0, -1, (err, data) => {
//     console.log("LRANGE: ", data)
// })
// redis.llen("countries", (err, data) => {
//     console.log("LLEN ", data)
// })
// redis.linsert("countries", "before", "Bahamas", "New Zealand", (err, data) => {
//     console.log("LINSERT: ", data)
// })

// SETS
// redis.sadd("Asia", ["India", "China", "Bhutan", "Malaysia", "Afghanistan", "Ukraine", "Russia"], (err, data) => {
//     console.log("SADD: ", data)
// })
// redis.smembers("Asia", (err, data) => {
//     console.log("SMEMBERS: ", data)
// })
// redis.sismember("Asia", "India", (err, data) => {
//     console.log("SISMEMBER: ", data)
// })
// redis.scard("Asia", (err, data) => {
//     console.log("SCARD: ", data)
// })
// redis.sunionstore("Countries", "Asia", (err, data) => {
//     console.log("SUNIONSTORE: ", data)
// })

// SORTED SET
redis.zadd("VisitedCountries", [ 2001, "World", 2002, "Kolkata", 2005, "Mumbai" ], (err, data) => {
    console.log(data)
})
redis.zrange("VisitedCountries", 0, -1, "withscores", (err, data) => {
    console.log(data)
})
redis.zrevrange("VisitedCountries", 0, -1, "withscores", (err, data) => {
    console.log(data)
})
redis.zrangebyscore("VisitedCountries", 2003, 2005, "withscores", (err, data) => {
    console.table(data)
})
redis.zincrby("VisitedCountries", 4, "Mumbai", (err, data) => {
    console.log(data)
})
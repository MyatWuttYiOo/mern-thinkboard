import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"
import dotenv from "dotenv";
dotenv.config();
//create a ratelimiter that allows 10 reqs per 20secs
const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(5,"10s")

})
export default rateLimit;
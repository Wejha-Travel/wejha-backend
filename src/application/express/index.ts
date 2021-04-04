import Express from 'express';
import routers from './api';
import errorHandler from './error';
import { config } from '../../dependency/config';
import cors from "cors";

const server = Express();
const port = config.server.port;
    
server.use(Express.json())
server.use(cors());
server.use('/api', routers);

server.use(errorHandler)

if (require.main === module) {
    server.listen(port, ()=> console.log("server started listening at " + port));
}
export default server

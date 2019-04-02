const express = require('express');
const expressGraphQL = require('express-graphql');

const port = process.env.PORT || 3001;
const server = express();

server.use(express.json());
server.use('/graphql', expressGraphQL({
    graphiql: true
}));

server.listen(port, () => console.log(`The server is listening on port ${port}`));
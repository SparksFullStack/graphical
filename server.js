const express = require('express');
const expressGraphQL = require('express-graphql');

// Importing our Schema
const schema = require('./schema/schema');

const port = process.env.PORT || 3001;
const server = express();

server.use(express.json());
// Making use of middleware to enable Graphiql based requests
server.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

server.listen(port, () => console.log(`The server is listening on port ${port}`));
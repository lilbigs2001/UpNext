"use strict";
const apolloString = `const { ApolloServer, gql } = require('apollo-server');

import { schema } from './prismaGraphql';
import { context } from './context';

const port = 4000;

const server = new ApolloServer({ schema, context })
server.listen( { port }, () => {
  console.log('apollo server running');
});`;
module.exports = apolloString;
//# sourceMappingURL=apolloServer.js.map
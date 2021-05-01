"use strict";
const serverString = `const { ApolloServer } = require('apollo-server-express');
const express = require('express');
import { schema } from './prismaGraphql';
import { context } from './context';

const port = 4000;

const app = express();

const server = new ApolloServer({ schema, context });

server.applyMiddleware({app});

app.listen({ port }, () => {
  console.log(\`Server listening on port: \${port}\`);
});
`;
module.exports = serverString;
//# sourceMappingURL=apolloServer.js.map
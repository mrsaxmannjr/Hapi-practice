const Hapi = require("hapi");

const server = new Hapi.Server();

server.connection({ port: 3000 });

server.route({
  path: "/hello",
  method: "GET",
  handler(request, reply) {
    reply("Hello World");
  },
});

server.start(() => {
  console.log(`Listening on ${server.info.uri}`);
});

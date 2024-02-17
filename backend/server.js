require("dotenv").config();

const fastify = require("fastify")({ logger: true });
const { connectMongo } = require("./libs/mongodb");
const fastifySwagger = require("@fastify/swagger");
const swaggerUi = require("@fastify/swagger-ui");
const PORT = 5001;

fastify.register(fastifySwagger, {
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "API docs",
      description: "API documentation",
      version: "1.0.0",
    },
    servers: [{ url: `http://localhost:${process.env.PORT}` }],

    host: "localhost:5001",
    consumes: ["application/json"],
    produces: ["application/json"],
  },
  exposeRoute: true,
});

fastify.register(swaggerUi, {
  swaggerUrl: "/docs",
  prefix: "/docs",
});

//routes
fastify.register(require("./routes/getRoutes"));
fastify.register(require("./routes/postRoutes"));
fastify.register(require("./routes/putRoutes"));
fastify.register(require("./routes/deleteRoutes"));

fastify.register(require("./routes/register/route"));
fastify.register(require("./routes/userExists/route"));
fastify.register(require("./routes/invalid/findUserRoute"));

fastify.register(require("@fastify/cors"), {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
});

const start = async () => {
  await connectMongo(fastify, "blogs");
  await fastify.listen({ port: PORT });
  fastify.log.info(`Server listening on ${PORT}`);
};

start();

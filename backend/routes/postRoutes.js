// postRoutes.js

async function postRoutes(fastify, options) {
  const collection = fastify.mongo.db.collection("blogs");
  const createBlogSchema = require("../helper/swaggerSchema");

  // create a blog
  fastify.post("/blogs/create", createBlogSchema, async (request, reply) => {
    try {
      const { title, body } = request.body;
      const newBlog = { title, body };
      const result = await collection.insertOne(newBlog);
      reply.code(201).send(result.ops[0]);
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  });
}

module.exports = postRoutes;

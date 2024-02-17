// getRoutes.js
const { ObjectId } = require("mongodb");
const getAllBlogsSchema = require("../helper/swaggerSchema");
const getOneBlogSchema = require("../helper/swaggerSchema");

async function routes(fastify, options) {
  const collection = fastify?.mongo?.db?.collection("blogs");
  //all blogs fetching
  fastify.get("/blogs", async (request, reply) => {
    try {
      const blogs = await collection.find().toArray();
      reply.send(blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      reply.status(500).send({ error: "Internal Server Error" });
    }
  });
  //blog count
  fastify.get("/blogs/count", async (request, reply) => {
    try {
      const count = await collection.countDocuments();
      reply.send({ count });
    } catch (error) {
      console.error("Error counting blogs:", error);
      reply.status(500).send({ error: "Internal Server Error" });
    }
  });
  //single blog info
  fastify.get("/blogs/:id", async (request, reply) => {
    try {
      const blogId = request.params.id;

      const id = new ObjectId(blogId);

      const blog = await collection.findOne({ _id: id });

      reply.send(blog);
    } catch (error) {
      console.error("Error counting blogs:", error);
      reply.status(500).send({ error: "Internal Server Error" });
    }
  });
}

module.exports = routes;

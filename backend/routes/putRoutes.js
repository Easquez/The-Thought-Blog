const { ObjectId } = require("mongodb");
const updateBlogSchema = require("../helper/swaggerSchema");

async function putRoutes(fastify, options) {
  const collection = fastify.mongo.db.collection("blogs");

  // PUT route
  fastify.put("/blogs/edit/:id", updateBlogSchema, async (request, reply) => {
    try {
      const blogId = request.params.id;
      const id = new ObjectId(blogId);

      const updatedData = request.body;
      console.log(updatedData);

      console.log("Blog ID:", blogId);
      console.log("Updated Data:", updatedData);

      // Update
      const updatedBlog = await collection.findOneAndUpdate(
        { _id: id },
        { $set: updatedData },
        { returnOriginal: false }
      );

      console.log("Updated Blog:", updatedBlog);

      if (updatedBlog.value) {
        reply.send(updatedBlog.value);
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      reply.status(500).send({ error: "Internal Server Error" });
    }
  });
}

module.exports = putRoutes;

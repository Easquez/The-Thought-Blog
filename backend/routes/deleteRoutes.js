const { ObjectId } = require("mongodb");
const deleteBlogSchema = require("../helper/swaggerSchema");

async function deleteRoutes(fastify, options) {
  const collection = fastify.mongo.db.collection("blogs");

  // DELETE route
  fastify.delete(
    "/blogs/delete/:id",

    async (request, reply) => {
      try {
        const blogId = request.params.id;
        console.log(blogId);
        const id = new ObjectId(blogId);
        console.log(id);

        // Delete the blog
        const deletedBlog = await collection.findOneAndDelete({
          _id: id,
        });
        console.log(deletedBlog);

        //
        if (deletedBlog.value) {
          reply.send({ message: "Blog deleted successfully" });
        } else {
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
        reply.status(500).send({ error: "Internal Server Error" });
      }
    }
  );
}

module.exports = deleteRoutes;

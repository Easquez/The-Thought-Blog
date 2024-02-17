async function route(fastify, options) {
  const collection = fastify.mongo.db.collection("users");

  fastify.post("/userExists", async (req, res) => {
    try {
      console.log(req.body);
      const { email } = req.body;

      const user = await collection.findOne(
        { email },
        { projection: { _id: 1 } }
      );
      console.log("user:", user);

      if (user) {
        res.code(200).send({ exists: true });
      } else {
        res.code(200).send({ exists: false });
      }
    } catch (error) {
      console.error("Error checking user existence:", error);
      res.code(500).send({ error: "Internal server error" });
    }
  });
}

module.exports = route;

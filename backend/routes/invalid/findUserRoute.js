const bcrypt = require("bcryptjs");

async function route(fastify, options) {
  const collection = fastify.mongo.db.collection("users");

  fastify.post("/invalid", async (req, res) => {
    try {
      console.log("req body hetha:", req.body);
      const { username, email, password } = req.body;

      const user = await collection.findOne({ email });

      if (!user) {
        return res.status(401).send("You're not authorized");
      }

      const pwMatch = await bcrypt.compare(password, user.password);
      if (!pwMatch) {
        return res.status(401).send("You're not authorized");
      }

      return res.send(user);
    } catch (error) {
      console.log("Error:", error);
      return res.status(500).send("Internal Server Error");
    }
  });
}
module.exports = route;

const bcrypt = require("bcryptjs");
async function route(fastify, options) {
  const collection = fastify.mongo.db.collection("users");

  fastify.post("/register", async (req, res) => {
    try {
      //   console.log(req.body);
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { username, email, password: hashedPassword };
      const result = await collection.insertOne(newUser);

      res.code(201).send(result);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  });
}

module.exports = route;

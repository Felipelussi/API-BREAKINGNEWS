const { ObjectId } = require("mongoose");
const userService = require("../Services/userservice");


const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).json("fullfil all fields for resgistration");
  }

  const user = await userService.createService(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error creating user" });
  }

  res.status(201).json({
    message: "user created successfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

const findAll = async (req, res) => {
  const users = await userService.findAllService();

  if (users.length === 0) {
    return res.status(400).send({ message: "There are no registered users" });
  }

  res.send(users);
};

const findById = async (req, res) => {
    const user = req.user;
    res.status(200).send({ user });
};

async function update(req, res) {
  const { name, username, email, password, avatar, background } = req.body;
  const id = req.id;

 
  if (!name && !username && !email && !password && !avatar && !background) {
    res.status(400).send("Submit at least one field for update"); }
  
   await userService.updateService(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
   )

  res.send({ message: "User sucessfully updated!" });

}

module.exports = { create, findAll, findById, update };

const user = require("../Models/User");

const createService = (body) => user.create(body);

const findAllService = () => user.find();

const findByIdService = (id) => user.findById(id);

function updateService(id,
  name,
  username,
  email,
  password,
  avatar,
  background) {
    

  return  user.findOneAndUpdate(
    { _id: id },
    { name: name, username: username, email, password, avatar, background }
  )
  
}

module.exports = {
  createService,
  findAllService,
  findByIdService,
  updateService,
};

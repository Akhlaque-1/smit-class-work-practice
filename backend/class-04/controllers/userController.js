const users = [];

// GET all users
const getUsers = (req, res) => {
  res.json({
    message: "All users",
    data: users,
  });
};

// CREATE user
const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "All fields required",
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    data: newUser,
  });
};

// GET single user
const getSingleUser = (req, res) => {
  const user = users.find(
    (u) => u.id == req.params.id
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json({
    message: "User found",
    data: user,
  });
};

module.exports = {
  getUsers,
  createUser,
  getSingleUser,
};
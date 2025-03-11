const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const todo = await Todo.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "todo deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: " no data tobe delete ",
    });
  }
};

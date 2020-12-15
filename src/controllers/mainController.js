exports.homePage = (req, res) => {
  res.render("index", { title: "home page", message: "track your basket of Goods" });
};

exports.createTodo = (req, res) => {
  console.log("create todo");
  console.log(req.body);
  res.render("createTodo");
};

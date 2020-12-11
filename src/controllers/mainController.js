exports.homePage = (req, res) => {
  res.render("index", {title: 'home page', message: 'track your basket of Goods'});
}
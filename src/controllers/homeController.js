// exports.getAddProduct = (req, res, next) => {
//     res.render("admin/create_product", {
//       product: '',
//     });
//   };

let getHomePage = (req, res) => {
  return res.render("homepage.ejs");
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let testmvc = (req,res)=>{
    return res.render('test/test.ejs');
}


 
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  testmvc: testmvc,
};

class SiteController {
  //[GET] /news
  home(req, res) {
    res.render('home');
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}
//xuất NewsControll ra ngoài
module.exports = new SiteController();

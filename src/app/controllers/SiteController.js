const {mutipleMongooseToObject} = require("../../util/mongoose")
const Course = require('../models/Course')
class SiteController {
  //[GET] /news
  home(req, res) {
    // res.render('home');
    // Course.find({},(err,courses,next)=>{
    //     if(!err) res.json(courses)
    //     else next(err)
    // })
    Course.find({})
      .then(courses => {
        res.render('home',{
        courses: mutipleMongooseToObject(courses),
      }
      )})
      .catch(error => next(error))
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}
//xuất NewsControll ra ngoài
module.exports = new SiteController();

const {mongooseToObject, mutipleMongooseToObject} = require("../../util/mongoose")
const Course = require('../models/Course')
class MeController {

  //[GET] /stored/courses
  storedCourses(req,res,next){
    Course.find({})
      .then(courses => res.render('me/stored-courses',{
        courses: mutipleMongooseToObject(courses)
      }))
      .catch(next)
  }
}
//xuất NewsControll ra ngoài
module.exports = new MeController();

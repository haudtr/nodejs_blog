const {mongooseToObject, mutipleMongooseToObject} = require("../../util/mongoose")
const Course = require('../models/Course')
class MeController {

  //[GET] /stored/courses
  storedCourses(req,res,next){
    Promise.all([Course.find({}),Course.countDeleted()])
      .then(([courses,countDeleted]) => res.render('me/stored-courses',{
        countDeleted,
        courses: mutipleMongooseToObject(courses)
      }))
      .catch(next)
  }
  //[GET] me/trash/courses
  trashCourses(req,res,next){
    Course.findDeleted({})
      .then(courses => res.render('me/trash-courses',{
        courses: mutipleMongooseToObject(courses)
      }))
      .catch(next)
  }

}
//xuất NewsControll ra ngoài
module.exports = new MeController();

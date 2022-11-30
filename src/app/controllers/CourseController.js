const {mongooseToObject} = require("../../util/mongoose")
const Course = require('../models/Course')
class CourseController {

  //[GET] /courses/:slug
  show(req, res) {
    Course.findOne({slug: req.params.slug})
      .then((course)=>{
        res.render('courses/show',{course:mongooseToObject(course)})
      })
      .catch(error => next(error))
  }

  create(req,res,next){
    res.render('courses/create')
  }
  store(req,res,next){
    const formData = req.body;
    const course = new Course(formData);
    course.save()
        .then(()=>res.redirect('/'))
        .catch()
  }
  //[GET] /course/:id/edit
  edit(req,res,next){
    Course.findById(req.params.id)
      .then(course => res.render('courses/edit',{
        course:mongooseToObject(course)
      }))
      .catch(next)
  }
  //[PUT] /course/:id
  update(req,res,next){
    Course.updateOne({
      _id: req.params.id
    },req.body)
      .then(()=> res.redirect('/me/stored/courses'))
      .catch(next)
  }
  //[delete] /course/:id
  destroy(req,res,next){
    Course.deleteOne({
      _id: req.params.id
    })
      .then(()=>res.redirect('back'))
      .catch(next)
  }
}
//xuất NewsControll ra ngoài
module.exports = new CourseController();

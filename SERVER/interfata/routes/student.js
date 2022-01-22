const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const models = require('../models')


router.get('/students', async(req, res, next) => {
    try {
        let students = await models.Student.findAll();
        res.status(200).json(students);
        
    } catch (err) {
        next(err);
    }
})


router.get('/students/:sid', async(req, res, next) => {
    try {
        let student = await models.Student.findByPk(req.params.sid);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(400).json({
                message : 'not found!'
            })
        }
    } catch (err) {
        next(err);
    }
})


router.post('/students/add', async(req, res, next) => {
    try {
        console.log(req.body)
        let student = await models.Student.create(req.body);
        res.status(200).json({
           message : 'created!',
        });
        
    } catch (err) {
        next(err);
    }
})


router.get('/students/:sid/:aid/feedbacks', async(req, res, next) => {
    try {
       let student = await models.Student.findByPk(req.params.sid, {
           include : [models.Feedback]
       });
       
       let feedbackOnActivity = [];
       if (student) {
           student.feedbacks.forEach(fdb => {
               if (fdb.id_activity == req.params.aid) {
                   feedbackOnActivity.push(fdb)
               }
           })
           res.status(200).json(feedbackOnActivity)
       } else {
           res.status(404).json({
               message : 'not found!'
           });
       }
   } catch (err) {
       next(err);
   }
})


router.get('/students/:sid/feedbacks', async(req, res, next) => {
   try {
       let student = await models.Student.findByPk(req.params.sid, {
           include : [models.Feedback]
       });
       
       if (student) {
           res.status(200).json(student.feedbacks);
           
       } else {
           res.status(404).json({
               message : 'not found!'
           });
       }
   } catch (err) {
       next(err);
   }
});


router.delete('/students/:id', async(req, res, next) => {
    try {
       let student = await models.Student.findByPk(req.params.id);
       
       if (student) {
           await student.destroy();
           res.status(200).json({
              message : 'accepted' 
           });
           
       } else {
           res.status(404).json({
               message : 'not found :('
           });
       }
   } catch(err) {
       next(err);
   }
});


module.exports = router

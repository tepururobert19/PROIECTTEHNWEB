const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const models = require('../models')


router.get('/groups', async(req, res, next) => {
   try {
       let groups = await models.Group.findAll();
       res.status(200).json(groups);
       
   } catch (err) {
       next(err);
   }
});


router.post('/groups/add', async(req, res, next) => {
    try {
        let group = await models.Group.create(req.body);
        res.status(200).json({
            message : 'created!'
        });
        
    } catch (err) {
        next(err);
    }
});


router.get('/groups/:gid/students', async(req, res, next) => {
   try {
       let group = await models.Group.findByPk(req.params.gid, {
           include : [models.Student]
       });
       
       if (group) {
           res.status(200).json(group.students);
           
       } else {
           res.status(404).json({
               message : 'not found!'
           });
       }
   } catch (err) {
       next(err);
   }
});


router.post('/groups/:gid/student/add', async(req, res, next) => {
   try {
       let group = await models.Group.findByPk(req.params.gid);
       
       if (group) {
           let student = req.body;
           student.groupId = group.id;
           await models.Student.create(student);
           
          res.status(200).json({
              message : 'created!'
          });
       } else {
           res.status(404).json({
                message : 'not found'
            });
       }
       
   } catch (err) {
       next(err);
   }
});

module.exports = router;
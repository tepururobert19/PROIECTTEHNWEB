const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const models = require('../models')


router.get('/activities', async(req, res, next) => {
   try {
       let activities = await models.Activity.findAll();
       
       res.status(200).json(activities);
   } catch (err) {
       next(err);
   }
});


router.post('/activities/add', async(req, res, next) => {
    try {
        if (req.body.start_date > req.body.end_date) {
            res.status(400).json({
                message : 'date not valid!'
            })
        } else {
            let activity = await models.Activity.create(req.body);
            res.status(200).json({
                message : 'created!'
            });
        }
    } catch (err) {
        next(err);
    }
});

router.get('/activities/:aid', async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.aid);
        if(activity){
            res.status(200).json(activity);
        }
        else{
            res.status(404).json({message : 'not found'})
        }


    } catch (err) {
        next(err);
    }
});


router.put('/activities/:aid', async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.aid);
        
        if (activity) {
            await activity.update(req.body);
            res.status(200).json({
                message : 'accepted - update succesful!'
            })
        } else {
            
            res.status(400).json({
                message : 'not found :('
            })
        }
        
    } catch (err) {
        next(err);
    }
})


router.put('/activities/:aid/update-count-emoji1', async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.aid);
        
        if (activity) {
            
            let updated = {
                "id" : activity.id,
                "name" : activity.name,
                "start_date" : activity.start_date,
                "end_date" : activity.end_date,
                "count_emoji1" : activity.count_emoji1 + 1,
                "count_emoji2" : activity.count_emoji2,
                "count_emoji3" : activity.count_emoji3,
                "count_emoji4" : activity.count_emoji4,
                "professorId" : activity.professorId
            }
            
            await activity.update(updated);
            
            res.status(200).json({
                message : 'accepted - updated succesfully count_emoji1!'
            })
        } else {
            
            res.status(400).json({
                message : 'not found :('
            })
        }
        
    } catch (err) {
        next(err);
    }
})


router.put('/activities/:aid/update-count-emoji2', async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.aid);
        
        if (activity) {
            
            let updated = {
                "id" : activity.id,
                "name" : activity.name,
                "start_date" : activity.start_date,
                "end_date" : activity.end_date,
                "count_emoji1" : activity.count_emoji1,
                "count_emoji2" : activity.count_emoji2 + 1,
                "count_emoji3" : activity.count_emoji3,
                "count_emoji4" : activity.count_emoji4,
                "professorId" : activity.professorId
            }
            
            await activity.update(updated);
            
            res.status(200).json({
                message : 'accepted - updated succesfully count_emoji2!'
            })
        } else {
            
            res.status(400).json({
                message : 'not found :('
            })
        }
        
    } catch (err) {
        next(err);
    }
})


router.put('/activities/:aid/update-count-emoji3', async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.aid);
        
        if (activity) {
            
            let updated = {
                "id" : activity.id,
                "name" : activity.name,
                "start_date" : activity.start_date,
                "end_date" : activity.end_date,
                "count_emoji1" : activity.count_emoji1,
                "count_emoji2" : activity.count_emoji2,
                "count_emoji3" : activity.count_emoji3 + 1,
                "count_emoji4" : activity.count_emoji4,
                "professorId" : activity.professorId
            }
            
            await activity.update(updated);
           
            res.status(200).json({
                message : 'accepted - updated succesfully count_emoji3!'
            })
        } else {
            
            res.status(400).json({
                message : 'not found :('
            })
        }
        
    } catch (err) {
        next(err);
    }
})


router.put('/activities/:aid/update-count-emoji4', async(req, res, next) => {
    try {
        let activity = await models.Activity.findByPk(req.params.aid);
        
        if (activity) {
            
            let updated = {
                "id" : activity.id,
                "name" : activity.name,
                "start_date" : activity.start_date,
                "end_date" : activity.end_date,
                "count_emoji1" : activity.count_emoji1,
                "count_emoji2" : activity.count_emoji2,
                "count_emoji3" : activity.count_emoji3,
                "count_emoji4" : activity.count_emoji4 + 1,
                "professorId" : activity.professorId
            }
            
            await activity.update(updated);
            
            res.status(200).json({
                message : 'accepted - updated succesfully count_emoji4!'
            })
        } else {
            
            res.status(400).json({
                message : 'not found :('
            })
        }
        
    } catch (err) {
        next(err);
    }
})

module.exports = router;
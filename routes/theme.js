var express = require('express');
var router = express.Router();


const ItemsModle= require('./../schema/items')
const UtilsHelpers = require('./../helper/utils');
const ParamsHelper = require('./../helper/params');

/* GET users listing. */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express'});
  });

router.get('/dashboard', function(req, res, next) {
    res.render('dashboard', { title: 'Express' });
  });

router.get('(/:status)?', (req, res, next) => {
  let objwhere={};
  let currentStatus= ParamsHelper.getParam(req.params,'status','all')
  let statusFilter = UtilsHelpers.createFilterStatus(currentStatus)

  if (currentStatus !== "all") objwhere={status: currentStatus};
  ItemsModle.find(objwhere).then((items) =>{
    res.render('book-list', { 
    title: 'Express', 
    items: items,
    statusFilter:statusFilter,
    });
    
  });
    
  });

router.get('/form', function(req, res, next) {
    res.render('category-form', { title: 'Express' });
  });
module.exports = router;
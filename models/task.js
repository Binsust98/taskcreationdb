const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({

  taskname: {

    type: String,

    required:  false,

  },

   taskid: {

    type: String,

    required: false,

   },

  taskdescription: {

    type: String,

    required:  false,

  },

   files: {

     type: String,

  required:  false,

 },
 leader: {

     type: String,

    required:false,

 },

  associate: {

     type: Array ,  

   required:  false,

  },

  status: {

    type: String,

   required: false,

  },

  approval: {

   type: String,

  required:  false,

 },

});



module.exports = mongoose.model("Tasks", TaskSchema);
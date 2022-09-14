const { Schema, model } = require("mongoose");

const postSchema = new Schema({
    title:{
         type: String,
         require: true,
    },
    body:{
         type: String,
         require: true,
         minLength: ""
    },
    published:{
         type: Boolean,
         default: false,
    }
      
},
 {
        timestamps: true,
    }
);

module.exports = model("Post", postSchema )


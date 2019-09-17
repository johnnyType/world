const mongoose = require("mongoose");
const db = mongoose.connection;
function init() {
    mongoose.connect("mongodb+srv://john:123@cluster0-7yvhh.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true });
    // mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds253891.mlab.com:53891/mini-mech",{ useNewUrlParser: true });
}
db.once("open",function(){
    console.log("--------------- mongoose connected successfully ---------------");
});

module.exports = init;
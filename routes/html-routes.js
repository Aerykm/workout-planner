var path = require("path");

//Will take you to form to create your workout
module.exports = function(app){ 
  app.get("/exercise",function (req,res){   
      res.sendFile(path.join(__dirname,"../public/exercise.html"));
  });

  //Shows information about your latest workout
  app.get("/",function(req,res){    
      res.sendFile(path.join(__dirname,"../public/index.html"));
  });

  //Takes you to the graphs
  app.get("/stats",function(req,res){   
      res.sendFile(path.join(__dirname,"../public/stats.html"));
  });
}
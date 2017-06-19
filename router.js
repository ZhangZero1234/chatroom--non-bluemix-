var express = require("express");
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static("./public"));
app.set("view engine","ejs");



app.get("/",function(req,res){
	
	res.render("chatroom");
		
});

io.on('connection',function(socket){

		console.log("connect");
		socket.on("disconnect",function(){
			console.log("disconnect");
		});	
		socket.on("ask",function(msg){
				socket.broadcast.emit("reply",msg);
		})
		
	});

http.listen(3000);
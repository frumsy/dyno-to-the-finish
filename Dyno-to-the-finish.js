space={keyCode:38,preventDefault:function(){}};
duck={keyCode:40,preventDefault:function(){}};

//ducks until the player is out from under the bird
function quack(bird){
	//ground bird
	if(bird.yPos == 100)
	{
		Runner().onKeyDown(space)
	}
	//low mid bird
	else if (bird.yPos == 75 && bird.xPos > 10 && bird.xPos < 70)
	{
		console.log("duck")
		Runner().onKeyDown(duck)
	}
	//no longer under bird
	else if(bird.yPos == 75 && bird.xPos <= 10)
	{
		console.log("stand")
		Runner().onKeyUp(duck)
	}
	//high bird
	else
	{
		console.log("nope.")
	}
}

//use for debugging
/*
function printType(oType){
	if(oType == "CACTUS_LARGE"){console.log(oType); console.log(" large")}
	else if(oType == "CACTUS_SMALL"){console.log(oType); console.log(" small")}
	else{console.log(oType); console.log(" bird")}
}
*/

window.setInterval(function(){
	if(Runner.instance_.horizon.obstacles.length > 0)
	{
		obstacle = Runner.instance_.horizon.obstacles[0]
		oType = obstacle.typeConfig.type
		rex = Runner.instance_.tRex
		//printType(oType)
		if(oType != "PTERODACTYL" && (obstacle.xPos - rex.xPos) < 100)
		{
			Runner().onKeyDown(space)
		}
		else if (oType == "PTERODACTYL" && (obstacle.xPos - rex.xPos) < 70)
		{
			quack(obstacle)
		}

	};
}, 10);
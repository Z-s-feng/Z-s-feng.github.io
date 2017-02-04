(function(){
	var box = document.getElementById('box');
	var again = document.getElementById('again');
	var over = document.getElementById("over");
	var leave = document.getElementById('leave');
	again.onclick=function(){
		re()
		over.style.display="none"
	}
	leave.onclick=function(){
		
		box.style.display="none"
	}
	re()
	function re(){
		var box = document.getElementById('box');
		var snake = document.getElementById("snake");
		var newS = document.getElementById("new");		
		var sX=100;
		var sY=100;
		var nX=0;
		var nY=0;
		var cont=4;
		var flag=true;
		var timer=0;
		snake.innerHTML='<div class="bodys"></div><div class="bodys"></div><div class="bodys"></div>'
		var bodys=snake.getElementsByClassName('bodys');
		for(var i = 0 ; i < bodys.length ; i++){
			bodys[i].style.top="100px"
			bodys[i].style.left=100+i*10+"px"
		}
		rand()
		function rand(){
			nX=parseInt(Math.random()*50)*10;
			nY=parseInt(Math.random()*50)*10;
			
			
		
			newS.style.display="block"		
			newS.style.left=nX+"px";
			newS.style.top=nY+"px";
		}
		function move(){  //通过键盘事件控制snake移动，其实只是蛇头的坐标在移动，然后更换蛇头
			var bodys=snake.getElementsByClassName('bodys');
			if(cont == 0){
				if(sY > 0){
					sY -= 10;
					genx()
				}else{			    
					gameover()
				}
			}else if(cont == 1){
				if(sX < 490){
					sX += 10;
					genx()
				}else{
				   
					gameover()	
				}
			}else if(cont == 2){
				if(sY < 490){
					sY += 10;
					genx()
				}else{
					
					gameover()
				}
			}else{
				if(sX > 0){
					sX -= 10;
					genx()
				}else{
					
					gameover()
				}
			}
			function genx(){ //找到蛇尾，让蛇尾的位置定位为最新的坐标，然后让蛇尾变成蛇头
				var sLast = snake.lastElementChild;
				sLast.style.left= sX + "px";
				sLast.style.top= sY + "px";
				var sFirst = snake.firstElementChild;
				snake.insertBefore(sLast,sFirst);
			}
			
			for(var i = 0 ; i<bodys.length ; i++){
				if(i>4 && sX === parseInt(bodys[i].style.left) && sY === parseInt(bodys[i].style.top)){
					gameover()
					document.onkeydown=null  //结束后防止键盘事件起作用
				}
			}	
			if(sX == nX && sY == nY){
				long(); //当食物和蛇头位置相同，执行增加函数
				rand();//再随机函数让食物出现在不同位置
			}
			
		}	
		document.onkeydown = function(e){

			if(flag && (e.keyCode == 87 || e.keyCode == 68 || e.keyCode == 83 || e.keyCode == 65)){

				if((e.keyCode == 87) && cont!=2){
					cont = 0;
				}
				if((e.keyCode == 68) && cont !== 3){
					cont = 1;
				}
				if((e.keyCode == 83) && cont !== 0){
					cont = 2;
				}
				if((e.keyCode == 65) && cont !== 1){
					cont = 3;
				}
				clearInterval(timer)		
				move()
				timer=setInterval(function(){
					move()
				},150)
			}
		}		
		function long(){
			var nLast = snake.lastElementChild;
			var newBody = nLast.cloneNode(true);
			snake.appendChild(newBody);

		}
		function gameover(){
			 flag = false;
			 clearInterval(timer)
			 over.style.display="block"
		}
	}
})()
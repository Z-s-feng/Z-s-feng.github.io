(function(){
	var gBox = document.getElementById('gBox');	
	var gmBtn = document.getElementById('gmBtn');
	var uBox = document.getElementById('uBox');
	var spanI = document.getElementById('spanI');
	var Dover = document.getElementById('Dover');
	var Dagain = document.getElementById('Dagain');
	var Dleave = document.getElementById('Dleave');
	var uls = uBox.getElementsByTagName('ul');
	var arr = ["red","blue","green","#a11ada"]
	for(var i = 0 ; i < uls.length ; i++){
		uls[i].style.left=48*i+"px"
	}
	Dleave.onclick=function(){
		gBox.style.display="none";
	}
	Dagain.onclick=function(){
		Dover.style.display="none";
		ag()
	}
	gmBtn.onclick=ag;

	function ag(){
		var timeaa = 0;
		var timecc = 0;
		
		var cont = 0;
		Dover.style.display="none";
		clearA();
		clearInterval(timeaa);
		clearInterval(timecc);
		function clearA(){
			for(var i = 0 ; i < uls.length ; i++){
				
				uls[i].innerHTML="";

			}
			spanI.innerHTML="得分："+cont;
		}

		timeaa = setInterval(function(){

			creatLi()
			gg()

		},2500)

		timecc = setInterval(function(){
			
			clickLi()

		},100)


		function gg(){
			for(var i = 0 ; i < uls.length ; i++ ){
				if(uls[i].children.length>11){
					Dover.style.display="block";
					clearInterval(timeaa);
					clearInterval(timecc);
				
				}
			}
			
		}
		function creatLi(){
			for(var i = 0 ; i < uls.length ; i++){
				var li = document.createElement("li")
				var cl = parseInt(Math.random()*4)
				li.style.borderColor=arr[cl];
				li.style.background=arr[cl];
				uls[i].appendChild(li)

			}
			
		}
		
		function clickLi(){
			var lis = uBox.getElementsByTagName('li');	
			var arr = [];
		
			for(var i = 0 ; i<lis.length;i++){
				
				lis[i].onclick=function(){
					var that = this ;
					var tc = that.style.background;
					var right=0;
					var left=0;
					for(var i=0;i<that.parentNode.children.length;i++){
						if(that.parentNode.children[i]==that){
							var n = i							
						}

					}
					nextE(that);
					prevE(that);
					rightE(that);
					leftE(that);
					function nextE(next){
						var next = next.nextElementSibling;

						if (!next) return;
						if (next.style.background!==tc){
							return;
						} 
						if(next && next.style.background==tc){	
							arr.push(next);
						}
						nextE(next);
						arr.push(that);
					}
					function prevE(prev){
						var prev = prev.previousElementSibling;
						
						if (!prev) return;
						if (prev.style.background!==tc){
							return;
						} 
						if(prev && prev.style.background==tc){	
							arr.push(prev);
						}
						prevE(prev);
						arr.push(that);
					}
					
					function rightE(right){
						
						var pt = right.parentNode;
						var ptN = pt.nextElementSibling;
						if (!ptN) return;
						var cha = ptN.children.length-pt.children.length+n;
						if (!ptN.children[cha]) return;
						if (ptN.children[cha].style.background!==tc){
							return;
						} 
						if(ptN.children[cha]&&ptN.children[cha].style.borderColor==tc){
							
							arr.push(right)
							right=ptN.children[cha];
							arr.push(right)
						}
						rightE(right);
						
					}
					function leftE(left){
						
						var pt = left.parentNode;
						var ptN = pt.previousElementSibling;
						if (!ptN) return;
						var cha = ptN.children.length-pt.children.length+n;
						if (!ptN.children[cha]) return;
						if (ptN.children[cha].style.background!==tc){
							
							return;
						} 
						if(ptN.children[cha]&&ptN.children[cha].style.borderColor==tc){
							
							arr.push(left)
							left=ptN.children[cha];
							arr.push(left)
						}
						leftE(left);
						
					}


					var arrt = [];  //去掉arr中的重复项
					for(var i = 0 ;i<arr.length;i++){
						if(arrt.indexOf(arr[i])==-1){
							arrt.push(arr[i])
						}						
					}
					cont +=100*arrt.length;		
					for(var i = 0 ;i<arrt.length;i++){
						arrt[i].parentNode.removeChild(arrt[i])
					}
				}
					
			}





			spanI.innerHTML="得分："+cont;
		}


	}
})()
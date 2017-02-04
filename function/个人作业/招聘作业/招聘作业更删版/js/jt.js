		
function link(){
			var xp=window.location.search.split('?')[1]
			var cp=window.location.hash.split('#')[1]
			cp=cp-1
			if(xp==0){
				linkA(cp)
			}else if(xp==1){
				linkB(cp)
			}
						
			var inner = ""
						
			function linkA(z){
				inner+="<div class='top'>"+aData.sh.text[z].zw+"</div>"
				inner+="<div class='mid'><div class='Lf'><p>招聘公司:"+aData.sh.text[z].gs+"</p><p>职位性质:"+aData.sh.text[z].gz+"</p><p>工作经验:"+aData.sh.text[z].jsh+"</p><p>招聘人数:"+aData.sh.text[z].rs+"</p><p>发布日期:"+aData.date(aData.sh.text[z].sj,1)+"</p>"
				
				inner+="</div><div class='Rt'><p>公司性质:"+aData.sh.text[z].xz+"</p><p>工作地点:"+aData.sh.text[z].dd+"</p><p>学历要求:"+aData.sh.text[z].xl+"</p><p>薪资待遇:"+aData.sh.text[z].dy+"</p><p>招聘类型:"+aData.sh.text[z].lx+"</p></div></div>"
				if(aData.sh.text[z].info.length>1){

					inner+="<div>"+aData.sh.text[z].info[1].t+"</div>"
					inner+="<div>"+aData.sh.text[z].info[1].l+"</div>"
				}
				inner+="<div class='bot'>"+aData.sh.text[z].info[0].t+"</div>"
				for(var i=0;i<aData.sh.text[z].info[0].l.length;i++){
					inner+="<div class='bot1'>"+aData.sh.text[z].info[0].l[i]+"</div>"
				}
				inner+="<div class='em'>有意者请投递简历至"+aData.email+"</div>"

			}
			function linkB(z){
				inner+="<div class='top'>"+aData.xy.text[z].zw+"</div>"
				inner+="<div class='mid'><div class='Lf'><p>招聘公司:"+aData.xy.text[z].gs+"</p><p>职位性质:"+aData.sh.text[z].gz+"</p><p>工作经验:"+aData.sh.text[z].jsh+"</p><p>招聘人数:"+aData.sh.text[z].rs+"</p><p>发布日期:"+aData.date(aData.sh.text[z].sj,1)+"</p>"
				
				inner+="</div><div class='Rt'><p>公司性质:"+aData.xy.text[z].xz+"</p><p>工作地点:"+aData.sh.text[z].dd+"</p><p>学历要求:"+aData.sh.text[z].xl+"</p><p>薪资待遇:"+aData.sh.text[z].dy+"</p><p>招聘类型:"+aData.sh.text[z].lx+"</p></div></div>"
				if(aData.xy.text[z].info.length>1){

					inner+="<div>"+aData.xy.text[z].info[1].t+"</div>"
					inner+="<div>"+aData.xy.text[z].info[1].l+"</div>"
				}
				inner+="<div class='bot'>"+aData.xy.text[z].info[0].t+"</div>"
				for(var i=0;i<aData.xy.text[z].info[0].l.length;i++){
					inner+="<div class='bot1'>"+aData.xy.text[z].info[0].l[i]+"</div>"
				}
				inner+="<div class='em'>有意者请投递简历至"+aData.email+"</div>"

			}

			sec.innerHTML=inner
}
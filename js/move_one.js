function getStyle(obj1,attr1){
	if(attr1 == 'opacity'){
		if(obj1.currentStyle){
			return parseFloat(obj1.currentStyle[attr1]);
		}else{
			return parseFloat(getComputedStyle(obj1,null)[attr1]);
		}
	}else{
		if(obj1.currentStyle){
			return parseInt(obj1.currentStyle[attr1]);
		}else{
			return parseInt(getComputedStyle(obj1,null)[attr1]);
		}
	}
}

function move(obj,json,fn){
	clearInterval(obj.timer);
	var cur = 0;
	var speed = 0;
	var flag = true;

	obj.timer = setInterval(function(){
		
		for(var attr in json){
			if(attr == 'opacity'){
				cur=Math.round(getStyle(obj,attr)*100);
			}else{
				cur = getStyle(obj,attr);
			}
		
			speed = (json[attr]-cur)/12;
			speed = speed>0? Math.ceil(speed) : Math.floor(speed);
			

			if(cur != json[attr]){
				flag = false;
				if(attr == 'opacity'){
					obj.style.filter = 'alpha(opacity:'+(cur+speed)+')';
					obj.style.opacity = (cur+speed)/100;
				}else{
					obj.style[attr] = cur+speed+'px';
				}
			}else{
				flag = true;
			}
		}
		if(flag == true){
			clearInterval(obj.timer);
			if(fn) fn();
		}
	},15);
}
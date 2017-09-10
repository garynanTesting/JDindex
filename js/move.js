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
	var cur = 0;
	var speed = 0;
	var flag = {};
	var timer = {};
	
	for(var attr in json){
		(function (attr) {
			timer[attr] = setInterval(function(){

				if(attr == 'opacity'){
					cur=Math.round(getStyle(obj,attr)*100);
				}else{
					cur = getStyle(obj,attr);
				}
			
				speed = (json[attr]-cur)/48;
				speed = speed>0? Math.ceil(speed) : Math.floor(speed);

				if(attr == 'opacity'){
					obj.style.filter = 'alpha(opacity:'+(cur+speed)+')';
					obj.style.opacity = (cur+speed)/100;
				}else{
					obj.style[attr] = cur+speed+'px';
				}
				
				if(cur != json[attr]){
					flag[attr] = false;
				}else{
					flag[attr] = true;
				}
				
				if(flag[attr]){
					clearInterval(timer[attr]);
					if(fn) fn();
				}
			},10);
		})(attr)
	}
	console.log(timer)
}
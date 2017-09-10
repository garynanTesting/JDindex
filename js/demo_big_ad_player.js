function jdBigAd (){
	// 京东大广告轮播图部分
	var oBigAdPlayer = document.getElementById('big_ad_player');
	var oBigAdPrev = document.getElementById('big_ad_prev');
	var oBigAdNext = document.getElementById('big_ad_next');
	
	var oBigAd = document.getElementById('big_ad');
	var aBigPic = oBigAd.getElementsByTagName('li');
	var oBigAdTag = document.getElementById('big_ad_tag');
	var aBigAdTags = oBigAdTag.getElementsByTagName('li');

	oBigAd.style.width = aBigPic.length * aBigPic[0].offsetWidth + 'px';
	oBigAdTag.style.width = (aBigAdTags.length * 22) + 'px';
	oBigAdTag.style.marginLeft = -(oBigAdTag.offsetWidth/2) + 'px';

	function tab(){
		oBigAd.style.left = -(now*aBigPic[0].offsetWidth) + 'px';

		for(var i=0; i<aBigAdTags.length; i++){
			if(aBigAdTags[i].index == now){
				move(aBigPic[now],{opacity: 100});
			}else{
				move(aBigPic[i],{opacity: 0});
			}

			if(aBigAdTags[i].index == now){
				aBigAdTags[now].style.background = 'red';
			}else{
				aBigAdTags[i].style.background = 'white';
			}
		}
	}

	function BigAdPrev (){
		now+=-1;
		if(now == -1){
			now = aBigAdTags.length -1;
		}
		tab();
	}
	function BigAdNext(){
		now+=1;
		if(now == aBigAdTags.length){
			now = 0;
		}
		tab();
	}

	aBigPic[0].style.opacity = 1;
	aBigAdTags[0].style.background = 'red';
	var now = 0;
	var flag = 0;
	for(var i=0; i<aBigAdTags.length; i++){
		aBigAdTags[i].index = i;
		aBigAdTags[i].onmouseover = function(){
			now = this.index;
			tab();
		}
	}

	oBigAdPrev.onclick = function(){
		if(flag == 1){
			return false;
		}else{
			BigAdPrev();
			flag = 1;
			setTimeout(function(){
				flag = 0;
			},1000);
		}
	}
	oBigAdNext.onclick = function(){
		if(flag == 1){
			return false;
		}else{
			BigAdNext();;
			flag = 1;
			setTimeout(function(){
				flag = 0;
			},1000);
		}
	}

	var timer0 = setInterval(function(){
		oBigAdNext.onclick();
	},3000);

	oBigAdPlayer.onmouseover = function(){
		move(oBigAdPrev,{opacity: 100});
		move(oBigAdNext,{opacity: 100});
		clearInterval(timer0);
	}
	oBigAdPlayer.onmouseout = function(){
		move(oBigAdPrev,{opacity: 0});
		move(oBigAdNext,{opacity: 0});
		timer0 = setInterval(function(){
			oBigAdNext.onclick();
		},3000);
	}
}
	
function jdLimit(){
	// 京东秒杀倒计时
	var oTimer = document.getElementById('jd_limit_timer');
	var oHours = document.getElementById('jd_limit_timer_hours');
	var oMinutes = document.getElementById('jd_limit_timer_minutes');
	var oSeconds = document.getElementById('jd_limit_timer_seconds');
	
	var oDateLimit = new Date('2017/6/24 21:00:00');

	function counter(){
		var oDateNow = new Date ();
		var sCount = oDateLimit - oDateNow;
		
		var countHours = parseInt(sCount/1000/60/60);
		if(countHours < 10) countHours = '0' + countHours ;

		var countMinutes = parseInt(sCount/1000/60%60);
		if(countMinutes < 10) countMinutes = '0' + countMinutes ;

		var countSceconds = parseInt(sCount/1000%60);
		if(countSceconds < 10) countSceconds = '0' + countSceconds ;

		if(sCount<1) {
			clearInterval(timer1);
			oHours.innerHTML = oMinutes.innerHTML = oSeconds.innerHTML = '00';
		}else{
			oHours.innerHTML = countHours;
			oMinutes.innerHTML = countMinutes;
			oSeconds.innerHTML = countSceconds;
		}
	}

	counter();
	var timer1 = setInterval(counter,1000);
}
	
function jdLive(){
	// 京东直播轮播
	var oVideoPlayer = document.getElementById('vedio_player');

	var oJdLivePrev = document.getElementById('inner_player_prev');
	var oJdLiveNext = document.getElementById('inner_player_next');

	var oJdLiveVideo = document.getElementById('vedio_img');
	var aVideoImg = oJdLiveVideo.getElementsByTagName('img');

	var oJdLiveTag = document.getElementById('inner_player_nav');
	var aJdLiveTags = oJdLiveTag.getElementsByTagName('li');

	var oAdLiveText1 = document.getElementById('vedio_text1');
	var oAdLiveText2 = document.getElementById('vedio_text2');

	oJdLiveVideo.style.width = aVideoImg.length * aVideoImg[0].offsetWidth + 'px';
	oJdLiveTag.style.width = aJdLiveTags.length * 16 + 'px';
	oJdLiveTag.style.marginLeft = -(oJdLiveTag.offsetWidth/2);

	aVideoImg[0].style.opacity = '1';
	aJdLiveTags[0].style.background = 'red';

	var adLiveTitles = ['鞋控联盟之你还缺双拉风的凉鞋' , '染发烫发如何修复' , '益智教育怎么少的得了玩具', '女装甜美T恤低至19元秒杀',
	'百变潮搭秀出你的范']
	var adLiveP = ['凉鞋优惠促销!' , '点赞关注抽奖送礼!' , '满2元减8折!', '关注主播领取20元无门槛优惠券',
	'女装低至19元秒杀']
	
	var now1 = 0;
	function tab1(){
		oAdLiveText1.innerHTML = adLiveTitles[now1];
		oAdLiveText2.innerHTML = adLiveP[now1];
		oJdLiveVideo.style.left = -(now1 * aVideoImg[now1].offsetWidth) + 'px';

		for(var i=0; i<aJdLiveTags.length; i++){
			if(aJdLiveTags[i].index == now1){
				aJdLiveTags[now1].style.background = 'red';
				move(aVideoImg[now1] , {opacity: 100});
			}else{
				aJdLiveTags[i].style.background = 'white';
				move(aVideoImg[i] , {opacity: 0});
			}
		}
	}

	for(var i=0; i<aJdLiveTags.length; i++){
		aJdLiveTags[i].index = i;
		
		aJdLiveTags[i].onmouseover = function(){
			now1 = this.index;
			tab1();
		}
	}

	function LivePrev(){
		now1--;
		if(now1 < 0){
			now1 = aJdLiveTags.length -1;
		}
		tab1();
	}
	function LiveNext(){
		now1++;
		if(now1 > aJdLiveTags.length -1){
			now1 = 0;
		}
		tab1();
	}

	var flag = 0;
	oJdLivePrev.onclick = function(){
		if(flag == 1){
			return false;
		}else{
			LivePrev();
			flag = 1;
			setTimeout(function(){
				flag = 0;
			},1000);
		}
	}
	oJdLiveNext.onclick = function(){
		if(flag == 1){
			return false;
		}else{
			LiveNext();
			flag = 1;
			setTimeout(function(){
				flag = 0;
			},1000);
		}
	}

	var timer2 = setInterval(function(){
		oJdLiveNext.onclick();
	},3000);
	oVideoPlayer.onmouseover = function(){
		clearInterval(timer2);
	}
	oVideoPlayer.onmouseout = function(){
		timer2 = setInterval(function(){
			oJdLiveNext.onclick();
		},3000);
	}
}
	
function jdGoodWoods(){

	function getByClass(oparent,sclass){
		var aEle = document.getElementsByTagName('*');
		var aResult = [];
		for(var i=0; i<aEle.length; i++){
			if(aEle[i].className === sclass){
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	}

	var oGoodWoodsPlayer = document.getElementById('goodwoods_palyer');
	var ojdGoodWood = document.getElementById('goodwoods');
	var aGoodwoods = getByClass(ojdGoodWood , 'jd_s_article2_part2_top');
	var oTag = document.getElementById('goodwoods_tag');
	var aTags = oTag.getElementsByTagName('li');
	
	var ogoodwoodsPrev = document.getElementById('goodwoods_prev');
	var ogoodwoodsNext = document.getElementById('goodwoods_next');

	ojdGoodWood.style.width = aGoodwoods.length * aGoodwoods[0].offsetWidth + 'px';
	oTag.style.width = aTags.length * 22 + 'px';
	oTag.style.marginLeft = -(oTag.offsetWidth)/2 + 'px';

	aGoodwoods[0].style.opacity = 1;
	aTags[0].style.background = 'red';

	var now =0;
	var flag=0;
	function tab(){
		ojdGoodWood.style.left = -(now * aGoodwoods[now].offsetWidth) + 'px';

		for(var i=0; i<aTags.length; i++){
			aGoodwoods[i].style.opacity= 0;
			aTags[i].style.background = '#ccc';
		}
		aTags[now].style.background = 'red';
		move(aGoodwoods[now] , {opacity: 100});
	}

	function prev(){
		now--;
		if(now<0){
			now = aGoodwoods.length-1;
		}
		
		tab();
	}
	function next(){
		now++;
		if(now>aGoodwoods.length-1){
			now = 0;
		}
		
		tab();
	}
	ogoodwoodsPrev.onclick = function(){
		if(flag == 1){
			return false;
		}else{
			prev();
			flag =1;
			setTimeout(function(){
				flag=0;
			},1000);
		}
	}
	ogoodwoodsNext.onclick = function(){
		if(flag == 1){
			return false;
		}else{
			next();
			flag =1;
			setTimeout(function(){
				flag=0;
			},1000);
		}
	}

	var timer = setInterval(function(){
		ogoodwoodsNext.onclick();
	},3000);
	oGoodWoodsPlayer.onmouseover = function(){
		clearInterval(timer);
	}
	oGoodWoodsPlayer.onmouseout = function(){
		timer = setInterval(function(){
			ogoodwoodsNext.onclick();
		},3000);
	}
}

function newsPlayer(){
	var oNews1 = document.getElementById('news1');
	var oNews2 = document.getElementById('news2');

	var oNewsPlayer = document.getElementById('news_player');
	var aNews = oNewsPlayer.getElementsByTagName('div');
	var oNewsFloater = document.getElementById('new_floater');
	
	aNews[0].style.opacity = 1;
	oNews2.onmouseover = function(){
		oNewsPlayer.style.left = -(aNews[0].offsetWidth) + 'px';
		move(aNews[1] , {opacity: 100});
		aNews[0].style.opacity = 0;

		move(oNewsFloater , {left: 50});
	}
	oNews1.onmouseover = function(){
		oNewsPlayer.style.left = 0;
		move(aNews[0] , {opacity: 100});
		aNews[1].style.opacity = 0;

		move(oNewsFloater , {left: 0});
	}
}

function toLink(){
	function getByClass(oparent,sclass){
		var aEle = document.getElementsByTagName('*');
		var aResult = [];
		for(var i=0; i<aEle.length; i++){
			if(aEle[i].className === sclass){
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	}

	var oToLink = document.getElementById('to_link');
	var oFDis = document.getElementById('f_dis');
	
	var aFDisapeare = getByClass(oFDis,'top_section2_partRight_part3_tolink');
	var aDisapeare = getByClass(oFDis,'disapeare');
	
	var oToSmall = document.getElementById('to_small');
	var text = oToSmall.innerHTML;
	// alert(text);

	var oEsc = document.getElementById('cancel_link');
	var now = 0;
	var flag = false;

    function pushing(){
    		
    	move(oToLink , {bottom: 0});
    }

	for(var i=0; i<aDisapeare.length; i++){
		aFDisapeare[i].index = i;
		aFDisapeare[i].onmouseenter = function(ev){
			if(flag == true) return false;

			now = this.index;
			// 弹出显示框；
			pushing();
			aFDisapeare[0].style.borderTopColor = '#f10214';
			
			for(var i=0; i<aDisapeare.length; i++){
				// 隐藏小图标及去除其占位;
				move(aFDisapeare[i] , {paddingTop: 0});
				aDisapeare[i].style.display = 'none';

				if(aFDisapeare[i].index != now){
					aFDisapeare[i].style.borderTopColor = 'transparent';
				}else{
					aFDisapeare[now].style.borderTopColor = '#f10214';
				}
			}

			oToSmall.innerHTML = '';
			move(oToSmall , {top: 2 , right: 2 , height: 4 , width: 4 , borderRadius: 16} );
		}
	}

	oEsc.onclick = function(ev){
		move(oToLink , {bottom: -186});
		for(var i=0; i<aDisapeare.length; i++){
			aFDisapeare[i].style.borderTopColor = 'transparent';
			move(aFDisapeare[i] , {paddingTop: 14});
			aDisapeare[i].style.display = 'block';
		}

		oToSmall.innerHTML = text;
		move(oToSmall , {top: 0 , right: 0 , height: 16 , width: 12 , borderRadius: 0} );

		var oEvent = ev || event;
		var target = ev.target || ev.srcElement; 

		flag = true;
		if(flag == true){
			setTimeout(function(){
				flag = false;
			},2000);
		}
	}
}

function sideNav(){
	var oSideNav =document.getElementById('side_nav');
	var aNavs = oSideNav.getElementsByTagName('li');

	var oEnjoy = document.getElementById('enjoying');
	var oLoveLife = document.getElementById('love_life');
	var oElctirc = document.getElementById('elctirc');
	var oCom = document.getElementById('com');
	var oSports = document.getElementById('sports');
	var oEating = document.getElementById('eating');
	var oBaby = document.getElementById('baby');
	var oCar = document.getElementById('car');
	var oGames = document.getElementById('games');
	var oNotEnouth = document.getElementById('not-enouth');

	var aResult =[oEnjoy.offsetTop , oLoveLife.offsetTop , oElctirc.offsetTop , oCom.offsetTop , oSports.offsetTop ,
	oEating.offsetTop , oBaby.offsetTop , oCar.offsetTop , oGames.offsetTop , oNotEnouth.offsetTop];
 
	var flag = 0;

	var scrollTop = 0;

	var oJdLine2 = document.getElementById('jd_s_article2');
	var oBanner = document.getElementById('under_banner');

	// function scroll(){
	// 	for(var i=0; i<aNavs.length -1; i++){
	// 		if(aNavs[i].index != now){
	// 			aNavs[i].style.background = 'rgb(145,136,136)';
	// 		}else{
	// 			aNavs[now].style.background = '#d70b1c';
	// 			aNavs[now].style.borderBottomColor = '#d70b1c';
	// 		}
	// 	}
	// }

	function scroll1(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

		if(flag == 1){
			return false;
		}else{
			flag = 1;
			setTimeout(function(){
				flag = 0;
			},100);
		}

		if(scrollTop >= (oJdLine2.offsetTop - 80)){
			move(oBanner , {bottom:  0});
		}else{
			move(oBanner , {bottom:  -145});
		}

		if(scrollTop >= (oEnjoy.offsetTop - 80)){
			oSideNav.style.display = 'block';
			move(oSideNav , {opacity:  100});
		}else{
			move(oSideNav , {opacity:  0});
			setTimeout(function(){
				oSideNav.style.display = 'none';
			},50);
		}

		for(var i=0; i<aNavs.length -1; i++){
			if(scrollTop == aResult[i]){
				aNavs[i].style.background = '#d70b1c';
				aNavs[i].style.borderBottomColor = '#d70b1c';
			}else{
				aNavs[i].style.background = 'rgb(145,136,136)';
				aNavs[i].style.borderBottomColor = '#e7e7e7';
			}
		}
	}

	window.onscroll =function(){
		scroll1();
	}

	function tab(){
		for(var i=0; i<aNavs.length -1; i++){
			if(aNavs[i].index != now){
				aNavs[i].style.background = 'rgb(145,136,136)';
				aNavs[i].style.borderBottomColor = '#e7e7e7';
			}else{
				aNavs[now].style.background = '#d70b1c';
				aNavs[now].style.borderBottomColor = '#d70b1c';
			}

			if(document.documentElement.scrollTop){
				document.documentElement.scrollTop = aResult[now];
			}else{
				 document.body.scrollTop = aResult[now];
			}
		}
	}

	// var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var now =0
	for(var i=0; i<aNavs.length -1; i++){
		aNavs[i].index = i;
		aNavs[i].onclick = function(){
			now = this.index;
			
			tab();
		}
	}
	
	aNavs[10].onclick = function(){
		if(document.documentElement.scrollTop){
			document.documentElement.scrollTop = 0;
		}else{
			 document.body.scrollTop = 0;
		}
	}
}

function scrollVar(){
}


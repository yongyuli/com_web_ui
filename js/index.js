//首页-滚动图 进网页加载
function Scrolling(){
	//获取滚动条盒子
	var div1  =  document.getElementById('Scrolling');
	var ul1 = div1.getElementsByTagName('ul')[0];
	var Li = ul1.getElementsByTagName('li');
	ul1.style.width = Li[0].offsetWidth*Li.length+'px';
	var left = div1.getElementsByTagName('a')[0];
	var right = div1.getElementsByTagName('a')[1];

	var speed = 2;

	function mv(){
		//console.log(ul1.offsetLeft);
		//console.log(- ul1.offsetWidth/speed);
		//当减少后的ul的左边距小于浏览器可用宽度一半时，ul的左边距重设为0
		if(ul1.offsetLeft < (- ul1.offsetWidth/speed)){
			ul1.style.left = '0'
		}
//		往左按钮
		left.onclick = function(){
			ul1.style.left = (ul1.offsetLeft + 160) + 'px';
		}
//		往右按钮
		right.onclick = function(){
			ul1.style.left = (ul1.offsetLeft - 160) + 'px';
		}
		ul1.style.left = ul1.offsetLeft-2+'px';//进行左横向滚动
	}
//	定时器
	var t = setInterval(mv,50);
//	鼠标经过
	div1.onmouseover=function(){
		clearInterval(t);
	}
//	鼠标移出
	div1.onmouseout=function(){
		t = setInterval(mv,50);
	}
}
//首页-轮播图 进网页时加载
function carousel(){
//	获取轮播图盒子元素
	var carousel = document.getElementById("carousel");
//	图片
	var img1 = carousel.getElementsByTagName("img")[0];
//	数字序号
	var carouselli = carousel.getElementsByTagName('ul')[0].getElementsByTagName("li");
//	超链接
	var link = carousel.getElementsByTagName("a")[2];
//	上一张
	var left = carousel.getElementsByTagName("a")[0];
//	下一张
	var right = carousel.getElementsByTagName("a")[1];
	var num = 0;
	carouselli[0].style.backgroundColor = "rgba(173,220,239,0.6)";
	var links = ["http://www.baidu.com","http://www.so.com","https://www.guet.edu.cn","https://www.runoob.com","https://vip.iqiyi.com"];

	var mynum = 6;
	function lunbotu(){
		num++;
		if(num == mynum){
			num = 1;
			carouselli[mynum-2].style.backgroundColor = "rgba(173,220,239,0.2";			
		}
		img1.src="../images/carousel/carousel"+num+".jpg";
		link.href = links[num-1];
		carouselli[num-1].style.backgroundColor = "rgba(173,220,239,0.6)";
		carouselli[num-2].style.backgroundColor = "rgba(173,220,239,0.2)";
	}
//	轮播图3秒切换一次
	var t = setInterval(lunbotu,3000)
//	鼠标经过，停止切换
	img1.onmouseover=function(){
		clearInterval(t);
		img1.style.boxShadow = "1px 1px 9px #888888,-1px -1px 9px #888888";
		carouselli[num-1].style.backgroundColor = "rgba(173,220,239,0.6)";
		carouselli[num-2].style.backgroundColor = "rgba(173,220,239,0.2)";
	}	
//	鼠标移出，继续切换
	img1.onmouseout=function(){
		t = setInterval(lunbotu,3000);
		img1.style.boxShadow = "none";
	}
//	点击上一张按钮
	left.onclick=function(){
		num--;
		if(num == 0){
			num = 1;
			carouselli[num-1].style.backgroundColor = "rgba(173,220,239,0.6)";
		}else{
			carouselli[num-1].style.backgroundColor = "rgba(173,220,239,0.6)";
			carouselli[num].style.backgroundColor = "rgba(173,220,239,0.2)";
		}
		img1.src="../images/carousel/carousel"+num+".jpg";
		link.href = links[num-1];
	}
//	点击下一张按钮
	right.onclick=function(){
		var num = 1;
		num++;
		if(num == mynum){
			num = mynum - 1;
			carouselli[mynum-1].style.backgroundColor = "rgba(173,220,239,0.6)";
		}else{
			carouselli[num-1].style.backgroundColor = "rgba(173,220,239,0.6)";
			carouselli[num-2].style.backgroundColor = "rgba(173,220,239,0.2)";
		}
		img1.src="../images/carousel/carousel"+num+".jpg";
		link.href = links[num-1];

	}
//	点击数字序号，跳转
	for(var i = 0 ; i < carouselli.length ; i++){
		carouselli[i].index = i;
		carouselli[i].onclick = function(){
			var num = this.index+1;
			img1.src="../images/carousel/carousel"+num+".jpg";
			link.href = links[num-1];
		}
		carouselli[i].onmouseover = function(){
			var num = this.index+1;
			img1.src="../images/carousel/carousel"+num+".jpg";
			link.href = links[num-1];
		}
	}
}

//首页-新闻缩略图 进网页时加载
function news_img(){
//	获取缩略图的盒子
	var news_img = document.getElementById("news_img");
//	数字序号
	var news_imgli = news_img.getElementsByTagName('ul')[0].getElementsByTagName("li");
//	图片底部标题
	var mystr = document.getElementById("news_img_text");
	var num = 0;
	news_imgli[0].style.backgroundColor = "rgba(173,220,239,0.6)";
//	超链接列表
	var links = ["detail-311.html","detail-312.html","detail-313.html","detail-314.html","detail-315.html","detail-315.html"];
	var mystrs = ["2019-2020学年下学期《社会主义核心价值观》课程重修通知","2018级专科、2017级专升本、2018级本科、2017级本科的学生将于第15周周六（20日）、周日（21日）开始本学期的形势与政策课程学习","通知：请各班学委统计考生的四六级名单（按四、六级模版来填）和电子版照片","关于考试过程中的系统问题，系统是教育厅开发的，不受学校控制，教育厅建议如下","转发本部关于开设家庭经济困难学生线上办公软件培训班的通知，请通知有意向的贫困生可以参加培训，（通知附件）","第六届中国国际“互联网+”大学生创新创业大赛的号角正式吹响，大赛通知具体要求见文件"];
//	默认点击跳转第一个
	news_img.onclick = function(){
		window.open(links[0]);
	};
	news_img.style.backgroundImage = "url(../images/news_img/news_img"+1+".jpg)";
	mystr.innerHTML = mystrs[num-1];
	
	var mynum = 6;
	function news_img_lunbotu(){
		num++;
		if(num == mynum){
			num = 1;
			news_imgli[mynum-2].style.backgroundColor = "rgba(173,220,239,0.2)";			
		}
//		点击跳转
		news_img.onclick = function(){
			window.open(links[num-1]);
		};
//		设置图片
		news_img.style.backgroundImage = "url(../images/news_img/news_img"+num+".jpg)";
//		设置标题
		mystr.innerHTML = mystrs[num-1];
		news_imgli[num-1].style.backgroundColor = "rgba(173,220,239,0.6)";
		news_imgli[num-2].style.backgroundColor = "rgba(173,220,239,0.2)";
	}
//	每3秒切换一组信息
	var t = setInterval(news_img_lunbotu,3000)
//	鼠标经过，跳转切换
	news_img.onmouseover=function(){
		clearInterval(t);
		news_img.style.boxShadow = "1px 1px 9px #888888,-1px -1px 9px #888888";
		news_imgli[num-1].style.backgroundColor = "rgba(173,220,239,0.6)";
		news_imgli[num-2].style.backgroundColor = "rgba(173,220,239,0.2)";
	}	
	news_img.onmouseout=function(){
		t = setInterval(news_img_lunbotu,3000);
		news_img.style.boxShadow = "none";
	}

	for(var i = 0 ; i < news_imgli.length ; i++){
		news_imgli[i].index = i;
		news_imgli[i].onclick = function(){
			var num = this.index+1;
			news_img.onclick = function(){
				window.open(links[num-1]);
			};
			news_img.style.backgroundImage = "url(../images/news_img/news_img"+num+".jpg)";
			mystr.innerHTML = mystrs[num-1];
		}
		news_imgli[i].onmouseover = function(){
			var num = this.index+1;
			news_img.onclick = function(){
				window.open(links[num-1]);
			};
			news_img.style.backgroundImage = "url(../images/news_img/news_img"+num+".jpg)";
			mystr.innerHTML = mystrs[num-1];
		}
	}
}

//设置首页无序列表元素背景
function index_li(){
//	获取所有栏目的a标签
	var cen_a = document.getElementById("min-win").getElementsByTagName("a");
	for(var i = 1; i < cen_a.length; i++){
		cen_a[i].style.display = "block";
		cen_a[i].style.height = "26px";
//		求余2为0的则改变背景突出显示
		if(i % 2 == 0){
			cen_a[i].style.backgroundColor = "rgba(173,220,245,0.2)";
		}
	}
}

//在移动端，栏目默认显示+号及隐藏内容
function lmzd(width){
//	屏幕宽度小于768像素起作用
	if(width <= '768'){
//		获取栏目标题
		var title1 = document.getElementById("min-win").getElementsByClassName("title1_l");
//		获取内容
		var cen1 = document.getElementById("min-win").getElementsByClassName("cen1");
		for(var i = 0; i < title1.length; i++){
//			在标题前增加+号
			title1[i].setAttribute("data-before","+  ");
//			隐藏内容
			cen1[i].style.display = "none";
		}
	}
}

//在网页加载后运行
window.onload = function(){
//	全局函数
	public();
//	底部滚动图
	Scrolling();
//	轮播图
	carousel();
//	专业动态缩略图
	news_img();
//	设置首页栏目背景
	index_li();
	var width3 = window.innerWidth;
	lmzd(width3);
//	设置登陆成功的显示
	user();
}

//在浏览器大小发生变化后运行
window.onresize = function(){
	public();
	index_li();
	var width3 = window.innerWidth;
	lmzd(width3);
	user();
}
//窗口滚动时运行
window.onscroll = function(){
	public();
	index_li();
	user();
}















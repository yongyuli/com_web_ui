//公共函数 进网页及浏览器可用大小有变化时加载
function public(){
	//动态显示网站底部年份
	var myDate = new Date();
	var year = myDate.getFullYear();
	document.getElementById("year").innerHTML = year;
	
	var nav1 = document.getElementById("nav");
	var li11 = nav1.getElementsByTagName("ul")[0].getElementsByTagName("li");
	var mune1 = document.getElementById("menu");
	
	
	//浏览器可用区域宽度
	var width1 = window.innerWidth;
	//导航栏二级菜单指示箭头
	for(var k = 0; k < li11.length; k++){
		var ul2_len = li11[k].getElementsByTagName("ul").length;
		if(ul2_len > 0){
			if(width1 > '768'){
				li11[k].setAttribute("data-after","\u25BC");
				li11[k].onmouseover = function(){
					this.setAttribute("data-after","\u25B2");
				}
				li11[k].onmouseout = function(){
					this.setAttribute("data-after","\u25BC");
				}
			}
			if(width1 <= '768'){
				li11[k].setAttribute("data-after","\u25BA");
				li11[k].onmouseover = function(){
					this.setAttribute("data-after","\u25C4");
					//在移动端如果有二级菜单，一级菜单就清空链接
					this.getElementsByTagName("a")[0].removeAttribute("href");
				}
				li11[k].onmouseout = function(){
					this.setAttribute("data-after","\u25BA");
				}
			}
		}
	}
	
	if(width1 <= '768'){
		nav1.style.display = "none";
		document.onclick = mune1.onmouseover = function (event){
			var e = event || window.event;
			var elem = e.srcElement||e.target;
				//在点击菜单图标或者点击导航栏上的空链接，竖形导航栏呈显示状态
				if(elem.id == "menu" || elem.href == ""){
					var ul21 = nav1.getElementsByTagName("ul");
					//计算二级菜单无序列表元素数量
					var ul22 = 0;
					for(var h = 1; h < ul21.length; h++){
						ul22 = ul22 + ul21[h].getElementsByTagName("li").length;
					}
					//计算纵向导航栏高度
					var nav1len = li11.length - ul22 * 40 + "px";
					nav1.style.height = nav1len;
					nav1.style.display = "block";
				}else{
					nav1.style.display = "none";
				}
		}
	}else{
		nav1.style.display = "block";
		document.onclick = mune1.onmouseover = function (event){
			var e = event || window.event;
			var elem = e.srcElement||e.target;
			if(elem.id){
				return;
			}
		}
	}
	//关闭左侧悬浮栏
	var left_xf = document.getElementById("left_xf");
	var left_xf_a = left_xf.getElementsByTagName("a")[0];
	left_xf_a.onclick = function(){
		left_xf.style.display = "none";
	}

	window.onload = window.onscroll= window.onresize=function(){
		//左侧悬浮窗
		var xf = document.getElementById("left_xf");
		var sTop = Math.max(document.body.scrollTop,document.documentElement.scrollTop)
		xf.style.top = sTop+200+"px";

		//右侧返回顶部
		var go_top = document.getElementById("go_top");
		go_top.style.display = "none";
		var height = document.body.offsetHeight;
		if(sTop >= height/6){
			go_top.style.display = "block";
		}
	}
}

//面板折叠效果
function zd(bt,nr){
	var path = window.location.pathname;
	var width3 = window.innerWidth;
	//判断URL中是否包含关于网站的网页文件名，以及判断屏幕宽度是否小于等于768，满足则执行
	if(path.indexOf("about.html") != -1 || width3 <= '768'){
		if(nr.style.display=='none'){
			nr.style.display='';
			bt.setAttribute("data-before","\u2013  ");
		}else{
			nr.style.display='none';
			bt.setAttribute("data-before","+  ");
		}
	}
}
function mrzd(){
	var list = document.getElementById("describe").getElementsByTagName("li");
	for(var i = 1; i < list.length; i++){
		list[i].getElementsByTagName("div")[0].style.display = "none";
		list[i].getElementsByTagName("h1")[0].setAttribute("data-before","+  ");
	}
}

//模拟会员登录成功结果
function user(){
	var user = sessionStorage.getItem("user");
	if(user != null){
		var public_user = document.getElementById("public_user");
		public_user.getElementsByTagName("a")[0].href = "user.html";
		public_user.getElementsByTagName("a")[0].innerHTML = "会员中心";
		public_user.getElementsByTagName("a")[1].href = "javascript:quit();";
		public_user.getElementsByTagName("a")[1].innerHTML = "退出";
	}
}
function quit(){
	sessionStorage.removeItem("user");
	window.location.href = "login.html";
}






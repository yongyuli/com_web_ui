function set_ce_left_height(){
	//浏览器可用区域宽度
	var width2 = window.innerWidth;
	var ce_left = document.getElementsByClassName("ce_left")[0];
	var ce_left_ul_li = ce_left.getElementsByTagName("ul")[0].getElementsByTagName("li");

	var ce_left_ul_li_len = ce_left_ul_li.length;
	var ce_left_height = 50 * ce_left_ul_li_len + 100 + "px";
	if(width2 > '768'){
		ce_left.style.height = ce_left_height;
	}else{
		ce_left.style.height = "auto";
	}
}



//在网页加载后运行
window.onload = function(){
	public();
	set_ce_left_height();
	user();
}
//	var list1 = [
//		"<div class='ce_right_con_r'><div class='ce_right_con_r_t'>展现重置小</div>"
//		];
//	var list2 = [
//		"<div class='ce_right_con_img'><img src='../images/bg1.jpg' alt=''></div>"
//		];
//	var list3 = [
//		"<div class='ce_right_con_r_b'>简介飒飒飒飒飒飒是地方地方地方地方茶多酚的所多所多所多所多所多多多所多所多多多岁的所得税发给对方答复都非常想常出现呈现出是发的发的发的大幅度阿萨飒飒飒飒飒飒是简介飒飒飒飒飒飒是地方地方地方地方茶多酚的所多所多所多所多所多多多所多所多多多岁的所得税发给对方答复都非常想常出现呈现出是发的发的发的大幅度阿萨飒飒飒飒飒飒是简介飒飒飒飒飒飒是地方地方地方地方茶多酚的所多所多所多所多所多多多所多所多多多岁的所得税发给对方答复都非常想常出现呈现出是发的发的发的大幅度阿萨飒飒飒飒飒飒是</div></div>"
//		];
//	list("ce_right_con",list2,list1,list3);
//	var ce_right_con_ul_li_a = document.getElementsByClassName("ce_right_con").getElementsByTagName("ul")[0].getElementsByTagName("a");
//	var ce_right_con_r = document.getElementsByClassName("ce_right_con_r");
//	var ce_right_con_img = document.getElementsByClassName("ce_right_con_img");
//	for(let i = 0; i < ce_right_con_ul_li_a.length; i++){
//		ce_right_con_ul_li_a[i].style.display = "flex";
//		ce_right_con_img.style.width = "18%";
//		ce_right_con_r.style.width = "80%";
//	}
	
//在浏览器大小发生变化后运行
window.onresize = function(){
	public();
	user();
}
		
//窗口滚动时运行
window.onscroll = function(){
	public();
	user();
}
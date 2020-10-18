function login(){
	//账号
	var username = document.login_content.username.value;
	//密码
	var pwd = document.login_content.password.value;
	//验证码
	var yz = document.login_content.yz.value;
	//判断验证码
	if(username.length != 0 && username == "user"){
		//判断密码
		if(pwd.length != 0 && pwd == "pwd"){
			//判断验证码
			if(yz.length != 0 && yz == "7KAG"){
				//将登陆成功的账号存入session
				sessionStorage.setItem("user",username);
				window.location.href = "index.html";
				return true;
			}else{
				alert("验证码错误！");
				return false;
			}
		}else{
			alert("登录密码错误！");
			return false;
		}
	}else{
		alert("登录账户有误！");
		return false;
	}
	
}

function reg(){
	//账号
	var username = document.reg_content.username.value;
	//密码
	var pwd = document.reg_content.pwd.value;
	//确认密码
	var repwd = document.reg_content.repwd.value;
	//手机号
	var phone = document.reg_content.phone.value;
	//验证码
	var yz = document.reg_content.yz.value;
	//所在地
	var city = document.reg_content.city.value;
	//判断账号
	if(username.length != 0 && 3 < username.length < 12){
		//判断密码
		if(pwd.length != 0 && 6 < pwd.length < 16){
			//判断确认密码与密码是否一致
			if(repwd == pwd){
				//判断电话
				if(phone.length != 0 && phone.length == 11 ){
					//判断验证码
					if(yz.length != 0 && yz == "7KAG"){
						//判断所在地
						if(city.length != 0){
							alert("注册成功！");
							window.location.href = "login.html";
							return true;
						}
					}else{
						alert("验证码错误！");
						return false;
					}
				}else{
					alert("手机号码错误！");
					return false;
				}
			}else{
				alert("确认密码与密码不一致！");
				return false;
			}
		}else{
			alert("密码不符合要求！");
			return false;
		}
	}else{
		alert("用户名不能为空，或者长度不在4到11位！");
		return false;
	}
}


//在网页加载后运行
window.onload = function(){
	public();
	user();
	//根据session跳转
	var username = sessionStorage.getItem("user");
	if(username != null){
		window.location.href = "index.html";
	}
}
	
//在浏览器大小发生变化后运行
window.onresize = function(){
	public();
	user();
	var username = sessionStorage.getItem("user");
	if(username != null){
		window.location.href = "index.html";
	}
}
		
//窗口滚动时运行
window.onscroll = function(){
	public();
	user();
	var username = sessionStorage.getItem("user");
	if(username != null){
		window.location.href = "index.html";
	}
}





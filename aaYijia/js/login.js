function getcode(){
								var codes=['a','b','d','m','f','d','大','小'];
								var code="";
								  for(var i=0;i<4;i++){
								  		var index=Math.floor(Math.random()*codes.length);
								  		code+=codes[index];
								  }
								  document.getElementById("codes").innerHTML=code;
							}
						$("#user_name").blur(function(){
							var _name=$("#user_name").val();
							_pass=$("#password").val();
							var $pass=getCookie(_name);
						
							
							
						})
						$(".submit").click(function(){
							var _name=$("#user_name").val();
							_pass=$("#password").val();
							var $pass=getCookie(_name);
							if(_pass===$pass){
									location.href="index.html";
									
								}else{
									alert("用户名或密码错误");
								}
						});
						
						
					
						
						
						
						function getCookie(_name){
							var str = "";
							var col = document.cookie.split("; ");
							for(var i in col){
								//col[i]//name=value
								var arr = col[i].split("=");
								//console.log(arr);
								if(arr[0] == _name){
									str = arr[1];
									break;
								}
							}
							return str;
						};
					
		
			
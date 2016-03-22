	function getcode(){
								var codes=['a','b','d','m','f','d','大','小'];
								var code="";
								  for(var i=0;i<4;i++){
								  		var index=Math.floor(Math.random()*codes.length);
								  		code+=codes[index];
								  }
								  document.getElementById("scyzm").innerHTML=code;
							}
										$(".yzmgh").click(function(){
											getcode();
										});
		
		
			document.addEventListener("keyup",function(e){
				var pass1=document.getElementById("t-password").value;
				var yzm1=document.getElementById("yzm").value;
				var pass=document.getElementById("password").value;
				
			e||(e=window.event);
			var target = e.target||e.srcElement ;
			var valid;
			if(target.name=="username"){
				valid = /^[A-z0-9]{8,}$/.test(target.value)&&
 					/[A-z]/.test(target.value)&&
 					/[0-9]/.test(target.value);
				dealInvalid(target,valid,"非法用户名");
			}
			else if(target.name==="email"){
				valid = /^[A-z0-9_]+@[A-z0-9_]+\.com$/.test(target.value);
				dealInvalid(target,valid,"邮箱非法");
			}else if(target.name==="t-password"){
				valid = (pass===pass1);
				dealInvalid(target,valid,"俩次密码不一致");
			}
		},false)


		function dealInvalid(target,valid,tip){
			if(valid){
				$(this).addClass("field valid");
				target.nextElementSibling.innerHTML = "";
			}else {
				target.className = "field invalid";
				target.nextElementSibling.innerHTML = tip;
			}
		}
		yz=getcode();
		$("#submit").click(function(){
		var yzm1=document.getElementById("yzm").value;
			
		if ($("#clause").is(":checked")) {
		var $name = $("#user-name").val();
		var $value = $("#t-password").val();
		
		var d=new Date;
		d.setDate(d.getDate()+5)
		document.cookie = $name +"=" + $value + ";expires=" + d.toGMTString();
		location.href="login.html";
	}
		});
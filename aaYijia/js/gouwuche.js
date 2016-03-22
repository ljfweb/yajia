
			window.onload = function(){		
				$.ajax({
				url:"sp.json",
				success:suss
				});
				
				function suss(data){
			var db=data.db;
			var oShop = document.getElementById("shop");
			var str = "";
			for(var i in db){
				var s = db[i];
				str += "<li><img src='"+s.pic+"' /><br>"+s.jieshao+"<br/"+s.name+"<br>"+s.prace+"元<br><a onclick=\"addCart('"+s.id+"', '"+s.pic+"','"+s.jieshao+"', '"+s.name+"', '"+s.prace+"')\">添加到购物车</a></li>";
			}
			oShop.innerHTML = str;
			//
			showCart();
		}

				}
				
				
		
		//添加到购物车
		function addCart(id, pic, jieshao,_name, prace){
			addCookie("i"+id, pic+"|"+jieshao+"|"+_name+"|"+prace, 10);
			showCart();
		}

		//显示购物车内容
		function showCart(){
			var col = document.cookie.split("; ");
			var s = "";
			for(var i in col){
				
				var arr = col[i].split("=");
				if(arr.length == 2){
					//console.log(arr);
					var a2 = arr[1].split("|");
					if(a2.length == 3){
						s += "<li><img src='"+a2[0]+"' /><br>"+a2[1]+"<br>"+a2[2]+"</li>";
					}
				}
			}
			document.getElementById("cart").innerHTML = s;
		}
		//清除所有购物车的商品
		function clearCart(){
			var col = document.cookie.split("; ");
			for(var i in col){
				var arr = col[i].split("=");
				//console.log(arr[0]);
				addCookie(arr[0], "", -1);
			}
			showCart();
		}
		//cookie事件
		function addCookie(_name, _value, _day){
			var day = _day;
			var d = new Date();
			d.setDate(d.getDate()+day);
			document.cookie = _name+"="+_value+";expires="+d.toGMTString();
		}	
		function getCookie(_name){
			var str = "";
			var col = document.cookie.split("; ");
			for(var i in col){
				var arr = col[i].split("=");
				if(arr[0] == _name){
					str = arr[1];
					break;
				}
			}
			return str;
		}
		
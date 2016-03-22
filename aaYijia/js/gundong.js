
function Gundong(odiv,id,oli,pre,next){
	var _this=this
	this.odiv=document.getElementById(odiv)
	this.id=document.getElementById(id)
	this.oli=this.id.getElementsByTagName(oli)	
	this.count=this.oli.length;
	this._index=0
	this._ind=0
	this.pre=document.getElementById(pre)
	this.next=document.getElementById(next)
	var _time=setInterval(function(){
		_this.lunbo(this)
		
	},2000)
	this.odiv.onmouseover=function(){
		clearInterval(_time)
	}
	this.odiv.onmouseout=function(){
		_time=setInterval(function(){
			_this.lunbo(this)
			
		},2000)
	}
	this.pre.onclick=function(){
			_this.lunbo(this)
	}
	this.next.onclick=function(){
			_this.houtui(this)
			
	}
	
}
Gundong.prototype={
	lunbo:function(id){
		//alert(this._index)
		var _width=$(this.oli).width()
		//alert(_width)
		$(this.id).animate({left: -_width*this._index},500);
		if(this._index==this.count-1){
			this._index=0
		}else{
			this._index++
		}
		//alert(this.count);
	},
	houtui:function(id){
		var _width=$(this.oli).width()
			//alert(_width)
			$(this.id).animate({left: _width*this._ind},500);
			//alert(this._index)
			if(this._ind==-this.count+1){
				this._ind=0
			}else{
				this._ind--
			}
	}
}

//----------------home右侧抢购滚动
new Gundong("Gdiv","Goul","li","xs2","xx2");
//——--------------热卖商品滚动
new Gundong("odiv","oul","li","ri","le");
//----------------热卖商品右侧滚动
new Gundong("Tdiv","toul","li","xs1","xx1");

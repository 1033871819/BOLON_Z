$.fn.extend({
    addMasking:function(){
        this.each(function(){
            $(this).createMasking();
            $(this).addEvent();
        });
    },
    createMasking:function(){
        //this :就是盒子
        $("<div>",{
           "style":`
                position: absolute;
				left:1000px;
				top:0px;
				width: ${this.width()}px;
				height: ${this.height()}px;
				background-color: black;
				opacity: 0.2;
				z-index:50;
           `
        }).appendTo(this);
    },
    getDirection:function(mousePosition){
        let boxLeft = this[0].offsetLeft;
        let boxTop = this[0].offsetTop;
        let leftDis = Math.abs(mousePosition.left-boxLeft);
        let topDis = Math.abs(mousePosition.top-boxTop);
        let rightDis = Math.abs(boxLeft+this.width()-mousePosition.left);
        let bottomDis = Math.abs(boxTop+this.height()-mousePosition.top);
        
        let directionObj = {
            "left":leftDis,
            "top":topDis,
            "right":rightDis,
            "bottom":bottomDis
        }
        let min = directionObj["left"];
        let direction ="left";
        for(let key in directionObj){
            if(directionObj[key]<min){
                min = directionObj[key];
                direction = key;
            }
        }
        return direction;
    },
    addEvent:function(){
        //this :就是盒子
         //不同方向的初始位置
        let startPos = {
            "left":{"left":-1*this.width(),"top":0},
            "top":{"left":0,"top":-1*this.height()},
            "right":{"left":this.width(),"top":0},
            "bottom":{"left":0,"top":this.height()}
        }

        this.mouseenter((event)=>{
            //1、获取方向
            let direction = this.getDirection({
                left:event.pageX,
                top:event.pageY
            });
            //2、设置起始值
            this.children().last().css(startPos[direction]);

            //3、动画（进）
            this.children().last().stop().animate({
                left:0,
                top:0
            },1);    
            
        });

        this.mouseleave((event)=>{
            //1、获取方向
            let direction = this.getDirection({
                left:event.pageX,
                top:event.pageY
            });
            console.log(direction);//bottom
            //2、动画（出）
            this.children().last().stop().animate(startPos[direction],1);
        });
    }
});


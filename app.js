angular.module("tictactoe",[])
.controller("tictactoeCtrl",tictactoeCtrl);
function tictactoeCtrl(){
var tictactoe=this;    

tictactoe.number1=[1,2,3];
tictactoe.number2=[4,5,6];
tictactoe.number3=[7,8,9];
tictactoe.turn="x";
tictactoe.xarray=[];
tictactoe.yarray=[];
tictactoe.move=0;
tictactoe.start=false;
tictactoe.game=1;
tictactoe.xpoints=0;
tictactoe.ypoints=0;
tictactoe.setState=function(a){
    if(!tictactoe.start){
    if(tictactoe.xarray.indexOf(a)==-1&&tictactoe.yarray.indexOf(a)==-1){
    if(tictactoe.turn=="x"){
    tictactoe.xarray.push(a);
    console.log("xarray "+tictactoe.xarray);
        
       tictactoe.move=tictactoe.move+1;
       tictactoe.checkx();
            tictactoe.turn="o";
        }
    else if(tictactoe.turn=="o"){
        tictactoe.yarray.push(a);
            console.log("yarray "+tictactoe.yarray);
                           
              tictactoe.move=tictactoe.move+1;

       tictactoe.checky();
        tictactoe.turn="x";
    }}
    else{
        console.log("yes");
    }
}}
tictactoe.checkx=function(){
var x=true;
 if(tictactoe.move>4){
    	for(var j=1;j<4;j++){
	
		if((tictactoe.xarray.indexOf(3*j)>=0&&tictactoe.xarray.indexOf(3*j-1)>=0&&tictactoe.xarray.indexOf(3*j-2)>=0)||(tictactoe.xarray.indexOf(j)>=0&&tictactoe.xarray.indexOf(j+3)>=0&&tictactoe.xarray.indexOf(j+6)>=0)||(tictactoe.xarray.indexOf(j)>=0&&tictactoe.xarray.indexOf(j+4)>=0&&tictactoe.xarray.indexOf(j+8)>=0)||(tictactoe.xarray.indexOf(3*j)>=0&&tictactoe.xarray.indexOf(3*j+2)>=0&&tictactoe.xarray.indexOf(3*j+4)>=0)){
		x=false;
		if(!x){
               alert("The Winner is Player1  X");
		tictactoe.start=true;
		tictactoe.xpoints=tictactoe.xpoints+2;
		}}
        else{
            if(x&&j>=3&&tictactoe.xarray.length==5&&tictactoe.yarray.length==4){
                            alert("The game is a draw");
   			tictactoe.start=true;
			tictactoe.xpoints=tictactoe.xpoints+1;
			tictactoe.ypoints=tictactoe.ypoints+1;
            }
        }
	}
    }
}
tictactoe.checky=function(){
var y=false;
    if(tictactoe.move>4){
    	for(var j=1;j<4;j++){
		if((tictactoe.yarray.indexOf(3*j)>=0&&tictactoe.yarray.indexOf(3*j-1)>=0&&tictactoe.yarray.indexOf(3*j-2)>=0)||(tictactoe.yarray.indexOf(j)>=0&&tictactoe.yarray.indexOf(j+3)>=0&&tictactoe.yarray.indexOf(j+6)>=0)||(tictactoe.yarray.indexOf(j)>=0&&tictactoe.yarray.indexOf(j+4)>=0&&tictactoe.yarray.indexOf(j+8)>=0)||(tictactoe.yarray.indexOf(3*j)>=0&&tictactoe.yarray.indexOf(3*j+2)>=0&&tictactoe.yarray.indexOf(3*j+4)>=0)){
		
               y=true;
				
		}

        
	}
	if(y){alert("The winner is player 2");
			tictactoe.start=true;
			tictactoe.ypoints=tictactoe.ypoints+2;}
    }
}
tictactoe.reset=function(){
	tictactoe.xarray=[];
	tictactoe.yarray=[];
	tictactoe.move=0;
	tictactoe.turn="x";
	tictactoe.start=false;
	tictactoe.game=tictactoe.game+1;
}
}

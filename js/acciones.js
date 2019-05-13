//JavaScript Document
$(document).ready(function (e){
	document.addEventListener ("deviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){
			navigator.notification. alert("Deslizo a la izquierda",function(){"Aplicacion ","Aceptar"});
		});
		
		
		$('#derecha').on("swiperight",function(){
			navigator.notification. confirm("¿Que quieres hacer?",function(opt){
				switch(opt)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(1000);
					break;
				}
			},"Aplicacion ","Beep,Vibrar,Cancelar");
			
		});
	},false);
});

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function(){
			navigator.notification.beep(1);
		});//tap beep
		
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(1000);
		});//tap vibrar
		
	},false);//deviceready
});//ready

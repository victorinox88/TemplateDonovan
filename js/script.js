$(document).ready(function () {
	
	function imprimir(){

		var x = "5"
		alert(x+y);
	}

	var x=3, y=2;
	imprimir();
	alert(x+y);

 	//coloca en negrita el texto del dropdown-menu
	jQuery("#container header nav .navbar-right ul a").attr("style","font-weight:bold;");

	//Quita los padding del ul del dropdown-menu
	jQuery("#container header nav .navbar-right ul").attr("style","padding:0px")

	//Quita el margin top y el magin botom del divider del dropdown-menu
	jQuery("#container header nav .navbar-right ul li.divider").attr("style","margin:0px;")

	//agregar el evento abrir el menu desplegable al pasar por el boton del navbar
	jQuery("li.dropdown").mouseenter(function(){
		$this = jQuery(this);
		$this.addClass('open');
		$this.find("a.dropdown-toggle").attr("aria-expanded",true);
	}).mouseleave(function(){
		$this.removeClass('open');
		$this.find("a.dropdown-toggle").attr("aria-expanded",false);
	});

	/*jQuery("button.navbar-toggle").on("click",function(){
		$this = jQuery(this);
		var valor = $this.attr('aria-expanded');
		if (valor == "false")
		{
			$this.attr("style","background-color:#333;");
		}
		else
		{
			$this.removeAttr("style","background-color:#333;");
		}
	})*/

	/*jQuery("button.navbar-toggle").mouseenter(function(){
		jQuery(this).trigger( "click" );
	}).mouseleave(function()
	{
		jQuery(this).trigger( "click" );
	})*/

	/*jQuery("button.navbar-toggle").mouseenter(function(){
		$this = jQuery(this);
		$this.removeClass('collapsed').attr("aria-expanded",true);
		$("#bs-navbar").addClass("in");
	}).mouseleave(function(){
		$this.addClass('collapsed').attr("aria-expanded",false);
	});*/

	//agrega el evento al pasar el mouse en el menu li
	jQuery("li.option").mouseenter(function(){
		jQuery(this).addClass("hover-li");
		jQuery(this).find("a").attr("style","background-color:#000; color:white; font-weight:bold;");
		jQuery(this).find("i").attr("style","display:inline;");
	}).mouseleave(function(){
		jQuery(this).removeClass("hover-li");
		jQuery(this).find("a").removeAttr("style","background-color:#000; color:white;").attr("style","font-weight:bold;");
		jQuery(this).find("i").attr("style","display:none;");
	});

	jQuery(".menu-responsivo li").mouseenter(function(){
		jQuery(this).addClass("hover-li");
		jQuery(this).find("a").attr("style","background-color:#000; color:white; font-weight:bold;");
		jQuery(this).find("i").attr("style","display:inline;");
	}).mouseleave(function(){
		jQuery(this).removeClass("hover-li");
		jQuery(this).find("a").removeAttr("style","background-color:#000; color:white;").attr("style","font-weight:bold;");
		jQuery(this).find("i").attr("style","display:none;");
	});

///creacion de circulo de porcentaje
/*jQuery("#circle-one").circularloader({
		backgroundColor: "#ffffff",
		fontColor: "#000000",
		progressPercent:88, 
		progressBarWidth:20,
		fontSize: "20px",
		radius:35})

jQuery("#circle-two").circularloader({
		backgroundColor: "#ffffff",
		fontColor: "#000000",
		progressPercent:66, 
		progressBarWidth:20, 
		fontSize: "20px",
		radius:35})

jQuery("#circle-three").circularloader({
		backgroundColor: "#ffffff",
		fontColor: "#000000",
		progressPercent:75, 
		progressBarWidth:20, 
		fontSize: "20px",
		radius:35})


	jQuery("#circle-four").circularloader({
		backgroundColor: "#ffffff",
		fontColor: "#000000",
		progressPercent:33, 
		progressBarWidth:20, 
		fontSize: "20px",
		radius:35})*/



//////////////////////////////////////////////////////
	jQuery(".prev_description").on("click",function(){
		jQuery(".left").trigger("click");
	});

	jQuery(".next-description").on("click",function(){
		jQuery(".right").trigger("click");
	});								

	setInterval(function(){
		var width = jQuery(document).width();
		if (width < 900)
		{
			jQuery("#blog-right").attr("style","display:none");
			jQuery("#central").removeClass("blog-central");
			jQuery("#general").removeClass("row-table");
		}
		else
		{
			jQuery("#blog-right").removeAttr("style","display:none;");
			jQuery("#central").addClass("blog-central");
			jQuery("#general").addClass("row-table");

		}
	},1000);

	setInterval(function(){
		var width = jQuery(document).width();
		if (width <= 991)
		{
			jQuery("#div-mural").attr("style","display:none");
			jQuery("#footer-nav a").attr("style","display:none;");
			jQuery("#navbar-auxiliar").attr("style","display:block");
			jQuery("#filter-auxiliar").attr("style","display:block");
			jQuery(".box-button").attr("style","display:none;");
			jQuery("#div-comment .ocultar").each(function(){
				var contador = 0;
				$this = jQuery(this).find("div.comment-testimonial");
				$this.each(function(){
					if (contador == 0)
					{
						jQuery(this).attr("style","	margin-top:0; padding-top:30px; border-top:1px solid; border-color:#ccc;")
						contador = contador + 1;
					}
				})
			})
			jQuery("#div-comment .ocultar").attr("style","display:block;")
		}
		else
		{
			jQuery("#div-mural").removeAttr("style","display:none");	
			jQuery("#footer-nav a").removeAttr("style","display:block");
			jQuery("#navbar-auxiliar").attr("style","display:none");
			jQuery(".box-button").attr("style","display:block;");
			jQuery("#div-comment .ocultar").each(function(){
				var contador = 0;
				$this = jQuery(this).find("div.comment-testimonial");
				$this.each(function(){
					if (contador == 0)
					{
						jQuery(this).removeAttr("style","margin-top:0; padding-top:30px; border-top:1px solid; border-color:#ccc;")
						contador = contador + 1;
					}
				})
			})
			jQuery("#div-comment .ocultar").removeAttr("style","display:block;")
		}
	},1000);

	setInterval(function(){
		var width = jQuery(document).width();
		if (width <= 991)
		{
			jQuery("#map").attr("style","padding-left:15px; padding-right:15px;");
			jQuery("#googleMap").attr("style","	width: 100%;height: 200px; position: relative;"+
    											"overflow: hidden;transform: translateZ(0px);"+
												"background-color: rgb(229, 227, 223);");
			jQuery(".div-icon-panel-header").attr("style","display:none;");
			jQuery(".triangulo_top_right").attr("style","display:none;");
			jQuery("#portafolio").attr("style","min-height:568px;max-height:none;");
			jQuery("#filter-auxiliar1").removeClass("ocultar");
			jQuery("#filtro").addClass("ocultar");
		}
		else
		{
			jQuery("#map").attr("style","padding:0;");
			jQuery("#googleMap").attr("style","	width: 100%;height: 70px; position: relative;"+
    											"overflow: hidden;transform: translateZ(0px);"+
												"background-color: rgb(229, 227, 223);");
			jQuery(".div-icon-panel-header").removeAttr("style","display:none;");
			jQuery(".triangulo_top_right").removeAttr("style","display:none;");
			jQuery("#portafolio").removeAttr("style","min-height:568px;max-height:none;");
			jQuery("#filter-auxiliar1").addClass("ocultar");
			jQuery("#filtro").removeClass("ocultar");
		}
	},1000);

	setInterval(function(){
		var width = jQuery(document).width();
		if (width <= 619)
		{
			jQuery("#circle-one input").attr("style","color: #000000; font-size: 20px;width: 110px;"+
												    "vertical-align: middle;position: relative;"+
												    "background-color: transparent;border: 0 none;"+
												    "transform: translateY(-48%);-webkit-transform: translateY(-48%);"+
												    "-ms-transform: translateY(-48%);height: 110px;margin-left: 0px;"+
												    "text-align: center; padding: 0; margin-top:-63px");
			jQuery("#circle-three input").attr("style","color: #000000; font-size: 20px;width: 110px;"+
												    "vertical-align: middle;position: relative;"+
												    "background-color: transparent;border: 0 none;"+
												    "transform: translateY(-48%);-webkit-transform: translateY(-48%);"+
												    "-ms-transform: translateY(-48%);height: 110px;margin-left: 0px;"+
												    "text-align: center; padding: 0; margin-top:-63px");
		}
		else
		{
			jQuery("#circle-one input").attr("style","color: #000000; font-size: 20px;width: 110px;"+
												    "vertical-align: middle;position: relative;"+
												    "background-color: transparent;border: 0 none;"+
												    "transform: translateY(-48%);-webk"+
												    "it-transform: translateY(-48%);"+
												    "-ms-transform: translateY(-48%);height: 110px;margin-left: -110px;"+
												    "text-align: center; padding: 0;");
			jQuery("#circle-three input").attr("style","color: #000000; font-size: 20px;width: 110px;"+
												    "vertical-align: middle;position: relative;"+
												    "background-color: transparent;border: 0 none;"+
												    "transform: translateY(-48%);-webkit-transform: translateY(-48%);"+
												    "-ms-transform: translateY(-48%);height: 110px;margin-left: -110px;"+
												    "text-align: center; padding: 0;");
		}
		
	},1000);

	setInterval(function(){
		var width = jQuery(document).width();
		jQuery(".btn-default-aux1").each(function(){
			if (width <= 760)
			{
				$this = jQuery(this).attr("style","width:100%;")
			}
			else
			{
				$this = jQuery(this).attr("style","border:0;width:121.5px;")
			}
		});
		if (width <= 760)
		{
			jQuery(".btn-default-aux1.active").attr("style"," width:100%; background-color:#000; color:white; font-weight:bold;");
		}
		else
		{
			jQuery(".btn-default-aux1.active").attr("style"," border-bottom: 6px solid;border-bottom-color: #ccc;width:121.5px;");
		}
	},1000);

	jQuery(".btn-default-aux.active").attr("style"," border-bottom: 6px solid;border-bottom-color: #ccc;");
	//jQuery(".btn-default-aux1.active").attr("style"," border-bottom: 6px solid;border-bottom-color: #ccc;width:119px;");

	jQuery(".btn-default-aux").on("click",function(){
		jQuery(".btn-default-aux").each(function(){
			$this = jQuery(this).attr("style","border:0;")
		})
		jQuery(this).attr("style"," border-bottom: 6px solid;border-bottom-color: #ccc;");
	})

	jQuery(".btn-default-aux1").on("click",function(){
		var width = jQuery(document).width();
		jQuery(".btn-default-aux1").each(function(){
			if (width <= 760)
			{
				$this = jQuery(this).attr("style","width:100%;")
			}
			else
			{
				$this = jQuery(this).attr("style","border:0;width:121.5px;")
			}
		})
		if (width <= 760)
		{
			jQuery(this).attr("style","width:100%; background-color:#000; color:white; font-weight:bold;");
		}
		else
		{
			jQuery(this).attr("style"," border-bottom: 6px solid;border-bottom-color: #ccc;width:121.5px;");
		}
	})

	jQuery("#filtro").on("click",function(){
		jQuery(".navbar-default").toggleClass( "bolas" );
	})

	/*jQuery("#filtro-aux").on("click", function(){
		jQuery(".nav-aux").toggleClass('bolas');
	})*/
	
})
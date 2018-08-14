
//determine graphic shape to be displayed

// 27 types of graphics

displayGraphic = function (playSurface[i]) {

	var cardImage = "";

	if ( playSurface[i].color === "red" && playSurface[i].symbol === "diamond" && playSurface[i].shading === "solid") {
		cardImage = "resources/RedDiamondSolid.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "red" && playSurface[i].symbol === "diamond" && playSurface[i].shading === "striped") {
		cardImage = "resources/RedDiamondStriped.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "red" && playSurface[i].symbol === "diamond" && playSurface[i].shading === "open") {
		cardImage = "resources/RedDiamondOpen.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "red" && playSurface[i].symbol === "squiggle" && playSurface[i].shading === "solid") {
		cardImage = "resources/RedSquiggleSolid.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "red" && playSurface[i].symbol === "squiggle" && playSurface[i].shading === "striped") {
		cardImage = "resources/RedSquiggleStriped.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "red" && playSurface[i].symbol === "squiggle" && playSurface[i].shading === "open") {
		cardImage = "resources/RedSquiggleOpen.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "red" && playSurface[i].symbol === "oval" && playSurface[i].shading === "solid") {
		cardImage = "resources/RedOvalSolid.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "red" && playSurface[i].symbol === "oval" && playSurface[i].shading === "striped") {
		cardImage = "resources/RedOvalStriped.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "red" && playSurface[i].symbol === "oval" && playSurface[i].shading === "open") {
		cardImage = "resources/RedOvalOpen.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "green" && playSurface[i].symbol === "diamond" && playSurface[i].shading === "solid") {
		cardImage = "resources/GreenDiamondSolid.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "green" && playSurface[i].symbol === "diamond" && playSurface[i].shading === "striped") {
		cardImage = "resources/GreenDiamondStriped.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "green" && playSurface[i].symbol === "diamond" && playSurface[i].shading === "open") {
		cardImage = "resources/GreenDiamondOpen.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "green" && playSurface[i].symbol === "squiggle" && playSurface[i].shading === "solid") {
		cardImage = "resources/GreenSquiggleSolid.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "green" && playSurface[i].symbol === "squiggle" && playSurface[i].shading === "striped") {
		cardImage = "resources/GreenSquiggleStriped.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "green" && playSurface[i].symbol === "squiggle" && playSurface[i].shading === "open") {
		cardImage = "resources/GreenSquiggleOpen.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "green" && playSurface[i].symbol === "oval" && playSurface[i].shading === "solid") {
		cardImage = "resources/GreenOvalSolid.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "green" && playSurface[i].symbol === "oval" && playSurface[i].shading === "striped") {
		cardImage = "resources/GreenOvalStriped.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "green" && playSurface[i].symbol === "oval" && playSurface[i].shading === "open") {
		cardImage = "resources/GreenOvalOpen.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "purple" && playSurface[i].symbol === "diamond" && playSurface[i].shading === "solid") {
		cardImage = "resources/PurpleDiamondSolid.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "purple" && playSurface[i].symbol === "diamond" && playSurface[i].shading === "striped") {
		cardImage = "resources/PurpleDiamondStriped.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "purple" && playSurface[i].symbol === "diamond" && playSurface[i].shading === "open") {
		cardImage = "resources/PurpleDiamondOpen.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "purple" && playSurface[i].symbol === "squiggle" && playSurface[i].shading === "solid") {
		cardImage = "resources/PurpleSquiggleSolid.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "purple" && playSurface[i].symbol === "squiggle" && playSurface[i].shading === "striped") {
		cardImage = "resources/PurpleSquiggleStriped.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "purple" && playSurface[i].symbol === "squiggle" && playSurface[i].shading === "open") {
		cardImage = "resources/PurpleSquiggleOpen.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "purple" && playSurface[i].symbol === "oval" && playSurface[i].shading === "solid") {
		cardImage = "resources/PurpleOvalSolid.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "purple" && playSurface[i].symbol === "oval" && playSurface[i].shading === "striped") {
		cardImage = "resources/PurpleOvalStriped.jpg";
		return cardImage;	
		} else if ( playSurface[i].color === "purple" && playSurface[i].symbol === "oval" && playSurface[i].shading === "open") {
		cardImage = "resources/PurpleOvalOpen.jpg";
		return cardImage;	
	};
};

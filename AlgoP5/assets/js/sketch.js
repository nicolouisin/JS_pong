let taille_ecran;
let vie;
let px;
let pry;
let x;
let horizontal;
let vx;
let y;
let verticale;
let vy;
let Lrectangle;


function preload() {
}

function setup(){
	taille_ecran=1000;
	createCanvas(taille_ecran/1.5,taille_ecran/1.5);
	x=10; //taille de la balle
	px=10;  //possition centre balle
	pry=taille_ecran/1.5-20 ;
	horizontal="droite";
	verticale="bas";
	vx=2;
	y=20;
	vy=1;
	Lrectangle=50;
	vie=1;
}


function draw() {
	//fond de l'ecran
	background(0);

	//gestion de rebond sur les bords lateraux
	if((px>=(taille_ecran/1.5-(x/2)))&&(horizontal=="droite")){
		horizontal="gauche";
		// vx=vx+0.2;
	}
	if((px<=x/2)&&(horizontal=="gauche")){
		horizontal="droite";
		// vx=vx+0.2;
	}

	// calcul de la nouvelle position du centre à l'horizontale
	if(horizontal=="droite"){
		px=px+vx;
	} else {
		px=px-vx;
	}

	//gestion du rebond en haut et sur le rectangle
	if((y>=taille_ecran/1.5 || (y>=mouseY&&(px>=mouseX && px<=mouseX+Lrectangle)) )&& verticale=="bas" ){
		verticale="haut";
		if(!(px>=mouseX && px<=mouseX+Lrectangle)){
			vie=vie-1;
	}
	}
	if((y<=x/2) && (verticale=="haut")){
		verticale="bas";
	}

	// calcul de la nouvelle position du centre à la verticale
	if(verticale=="bas"){
		y=y+vy+2;
	} else {
		y=y-vy-2;
	}


	fill(255,255,255,255);
	ellipse(px,y,x,x);
	rect(mouseX,mouseY,Lrectangle,15);


	rect(800,0,50,50);



}


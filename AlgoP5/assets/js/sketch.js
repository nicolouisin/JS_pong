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
let i=5;
let score;

function preload() {
}

function setup(){
	taille_ecran=1000;
	createCanvas(taille_ecran,taille_ecran/1.5);
	x=10; //taille de la balle
	px=10;  //possition centre balle
	pry=taille_ecran/1.5-20 ;
	horizontal="droite";
	verticale="bas";
	vx=2;
	y=20;
	vy=1;
	Lrectangle=50;
	vie=5;
	lvl=0;
	score=0;
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
	if((y>=taille_ecran/1.5 || ((y>=taille_ecran/1.5&&y<=taille_ecran/1.5+15)&&(px+5>=mouseX && px+5<=mouseX+Lrectangle)) )&& verticale=="bas" ){
		verticale="haut";
		if(!(px>=mouseX && px<=mouseX+Lrectangle)&&y>=taille_ecran/1.5){
			vie=vie-1;
	}
		if((px+5>=mouseX && px+5<=mouseX+Lrectangle)){
			i--;
			score=score+10+lvl*10;
			if(i==0) {
				lvl+=1;
				vx += lvl;
				i=lvl*10;
				if(vie<=5){
					vie+=1;
				}
				if(lvl%2==0){
					vy+=lvl;
				}
				if(lvl%3&&Lrectangle>25){
					Lrectangle-=1;
				}
			}
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

	if(vie<=0){
		window.alert("vous avez perdu au niv "+lvl+"!! fait f5 puis appuie sur ok pour rejouer");
	}

	if(mouseX+Lrectangle>=taille_ecran/1.5){
		mouseX=taille_ecran/1.5-Lrectangle;
	}
	if(mouseX<=0){
		mouseX=0;
	}

	fill(255,255,255,255);
	stroke(255,255,255,255);
	ellipse(px,y,x,x);
	rect(mouseX,taille_ecran/1.5-4,Lrectangle,2);

	rect(taille_ecran/1.5+1,0,5,taille_ecran/1.5);
	fill(0);

	//tableau score, vie, niveau et niveau suivant
	rect(750,0,50,50);
	rect(700,0,50,50);
	rect(800,0,50,50);
	rect(850,0,100,50);
	stroke(0);
	fill(255);
	text("niveau",755,20);
	text(lvl,760,40);
	text("vie",705,20);
	text(vie,710,40);
	text("score",805,20);
	text(score,810,40);
	text("niveau suivant",855,20);
	text(i,860,40);


}


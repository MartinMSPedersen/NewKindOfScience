var blocks = [];
var blockSize = 12;

function init_blocks() {
	var i,j,b,ypos,xpos;

	ypos = blockSize/2;
	for (i = 0; ypos+blockSize/2 <= height; i++) {
		blocks[i] = [];
		xpos = blockSize/2;
		for (j = 0; xpos+blockSize/2 <= width; j++) {
			if ((i==0) && (j==25)) {
				b=new Block(xpos,ypos,blockSize,true);
			} else {
				b=new Block(xpos,ypos,blockSize,false);
			}
			blocks[i].push(b);
			xpos += blockSize;
		}
		ypos += blockSize;
	}
	for (i=1; i<blocks.length; i++) {
		for (j=0; j<blocks[i].length; j++) {
			value=0;
			if ((j>0) && (blocks[i-1][j-1].on)) { value++; }
			if (blocks[i-1][j].on) { value++; }
			if ((j<blocks[i].length-1) && (blocks[i-1][j+1].on)) { value++; }
			if (value==1) {
				blocks[i][j].on=true;
			} else {
				blocks[i][j].on=false;
			}
		}
	}
}

function update_blocks() {
	var last_row=blocks.length-1;
	var last_column=blocks[0].length-1;
	for (i=1; i<=last_row; i++) {
		for (j=0; j<blocks[i].length; j++) {
			blocks[i-1][j].on=blocks[i][j].on;
		}
	}
	for (j=0; j<=last_column; j++) {
		value=0;
		if (blocks[last_row-1][j].on) value++;
		if ((j>0) && (blocks[last_row-1][j-1].on)) value++;
		if ((j<last_column) && (blocks[last_row-1][j+1].on)) value++;
		if (value==1) {
			blocks[last_row][j].on=true;
		} else {
			blocks[last_row][j].on=false;
		}
	}
}


function draw() {
	var i,j,value;
	background(250,120,5);
	for (i=0; i<blocks.length; i++) {
		for (j=0; j<blocks[i].length; j++) { blocks[i][j].show(); }
	}
	update_blocks();

}

function setup() {
	createCanvas(displayWidth,displayHeight);
	noCursor();
	init_blocks();
}

function Block(xpos, ypos, size, on) {
	this.x = xpos;
	this.y = ypos;
	this.on = on;
	this.size = size;

	this.show = function() {
		fill(0);
		strokeWeight(2);
		if (this.on) {
			if (random()>0.11) {
				if (random()>0.55) {
					rect(this.x,this.y,1.1*this.size,1.1*this.size);
				} else {
					ellipse(this.x,this.y,1.1*this.size,1.1*this.size);
				}
			}
		}
	}
}

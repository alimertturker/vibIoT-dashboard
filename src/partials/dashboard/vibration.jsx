

export class Vibration{
    constructor(color) {
        this.data = [];
        this.borderColor = color;
        this.borderWidth = 2;
        this.tension = 0;
        this.pointRadius = 0;
        this.pointHoverRadius = 3;
        //this.pointBackgroundColor = tailwindConfig().theme.colors.indigo[500];
        this.clip = 20;        
    }
}

export default Vibration;
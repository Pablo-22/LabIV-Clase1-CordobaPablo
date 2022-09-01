import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	ageOne: number = 0;
	ageTwo: number = 0;

	sum: number = 0;
	average: number = 0;



	ngOnInit(): void {
		
	}

	calculateValues(){
		this.average = this.getAverage(this.ageOne, this.ageTwo);
		this.sum = this.getSum(this.ageOne, this.ageTwo);
	}

	getAverage(...numbers:number[]){
		let sum = this.getSum(...numbers)
		return sum / numbers.length; 
	}

	getSum(...numbers:number[]){
		return numbers.reduce((a, b) => a + b, 0);
	}

	resetInputs(){
		this.ageOne = 0;
		this.ageTwo = 0;
		this.sum = 0;
		this.average = 0;
	}
}

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
	constructor() {
		const url = './docs/test.pdf';
		let pdfDoc = null;
		let pageNum = 1;
		let pageIsRendering = false;
		let pageNumIsPending = null;

		const scale = 1.5;
		const canvas = document.querySelector('#pdf-render');
		// const context = canvas.getContext('2d');
	}

	ngOnInit() {}
	renderPage(num) {
		// pdfjsLib.getDocument(url).promise.then((pdfDoc_) => {});
	}
}

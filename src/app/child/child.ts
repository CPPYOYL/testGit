import { Component } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.html',
  styleUrls: ['./child.scss']
})
export class ChildComponent {
 	title  = 'Test Tour of Heroes';
 	errorMessage : any;
 	// getQuote() {
 	// 		this.errorMessage = '';
		//   this.quote = this.twainService.getQuote().pipe(
		//     startWith('...'),
		//     catchError( (err: any) => {
		//       // Wait a turn because errorMessage already set once this turn
		//       setTimeout(() => this.errorMessage = err.message || err.toString());
		//       return of('...'); // reset message to placeholder
		//     })
		//   );
 	// }
}

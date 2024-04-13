import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.scss'
})
export class ComicsComponent {

  userId!: string;

  constructor(private activatedRoute: ActivatedRoute) {

    const userId = this.activatedRoute.snapshot.params['id'];
    if (!userId) {
      this.userId = '1';
    } else {
      this.userId = userId
    }
  }

}

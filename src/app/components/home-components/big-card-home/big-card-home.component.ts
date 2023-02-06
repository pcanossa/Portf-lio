import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card-home',
  templateUrl: './big-card-home.component.html',
  styleUrls: ['./big-card-home.component.css']
})
export class BigCardHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeBorder(event: any) {
    let icon:any | null = event.target.id
    icon = document.getElementById(icon)
    if (icon.style.borderColor == '') {
      icon.style.border = '1px solid #00D916'
      icon.style.boxShadow = `0px 0px 24px 4px #00D916`
      console.log(icon.style.boxShadow)
    } else {
      icon.style.border = ''
      icon.style.boxShadow = ''
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Page2firstComponent } from '../page2first/page2first.component';

@Component({
  selector: 'app-page2third',
  templateUrl: './page2third.component.html',
  styleUrls: ['./page2third.component.css']
})
export class Page2thirdComponent implements OnInit {

  constructor() { }
  page2 = new Page2firstComponent();

  page2_3(){
    var page2_3 = document.getElementById("page2-3");
    this.page2.decidePage2site(page2_3);
    this.page2.decidePage2width(page2_3);
    this.page2.decidePage2radius(page2_3);
    page2_3.style.display = "none";
  }

  onSelected2_3(){
    window.location.href = "https://www.baidu.com/";
  }
  onSelectedGet2_3(){
    window.location.href = "https://www.baidu.com/";
  }
  onSelectedButton2_3(){
    window.location.href = "https://www.baidu.com/";
  }

  ngOnInit() {
    this.page2_3();
  }

}

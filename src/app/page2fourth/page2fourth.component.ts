import { Component, OnInit } from '@angular/core';
import { Page2firstComponent } from '../page2first/page2first.component';

@Component({
  selector: 'app-page2fourth',
  templateUrl: './page2fourth.component.html',
  styleUrls: ['./page2fourth.component.css']
})
export class Page2fourthComponent implements OnInit {

  constructor() { }

  page2 = new Page2firstComponent();

  page2_4(){
    var page2_4 = document.getElementById("page2-4");
    var page1Content = document.getElementById("content4");
    page2_4.style.width = document.body.clientWidth + "px";
    this.page2.decidePage2site(page2_4);
    this.page2.decidePage2width(page2_4);
    this.page2.decidePage2radius(page2_4);
    this.page2.setpage2Position(page1Content,page2_4);
    page2_4.style.display = "none";  
  }

  onSelected2_4(){
    window.location.href = "https://www.baidu.com/";
  }
  onSelectedGet2_4(){
    window.location.href = "https://www.baidu.com/";
  }
  onSelectedButton2_4(){
    window.location.href = "https://www.baidu.com/";
  }
  ngOnInit() {
    this.page2_4();
  }

}

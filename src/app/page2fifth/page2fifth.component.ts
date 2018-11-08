import { Component, OnInit } from '@angular/core';
import { Page2firstComponent } from '../page2first/page2first.component';

@Component({
  selector: 'app-page2fifth',
  templateUrl: './page2fifth.component.html',
  styleUrls: ['./page2fifth.component.css']
})
export class Page2fifthComponent implements OnInit {

  constructor() { }

  page2 = new Page2firstComponent();

  page2_5(){
    var page2_5 = document.getElementById("page2-5");
    var page1Content = document.getElementById("content5");
    page2_5.style.width = document.body.clientWidth + "px";
    this.page2.decidePage2site(page2_5);
    this.page2.decidePage2width(page2_5);
    this.page2.decidePage2radius(page2_5);
    this.page2.setpage2Position(page1Content,page2_5);
    page2_5.style.display = "none";
  }

  onSelected2_5(){
    window.location.href = "https://www.baidu.com/";
  }
  onSelectedGet2_5(){
    window.location.href = "https://www.baidu.com/";
  }
  onSelectedButton2_5(){
    window.location.href = "https://www.baidu.com/";
  }
  ngOnInit() {
    this.page2_5();
  }

}

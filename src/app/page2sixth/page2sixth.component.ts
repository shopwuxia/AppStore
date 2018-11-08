import { Component, OnInit } from '@angular/core';
import { Page2firstComponent } from '../page2first/page2first.component';

@Component({
  selector: 'app-page2sixth',
  templateUrl: './page2sixth.component.html',
  styleUrls: ['./page2sixth.component.css']
})
export class Page2sixthComponent implements OnInit {

  constructor() { }
  page2 = new Page2firstComponent();

  page2_6(){
    var page2_6 = document.getElementById("page2-6");
    var page1Content = document.getElementById("content6");
    page2_6.style.width = document.body.clientWidth + "px";
    this.page2.decidePage2site(page2_6);
    this.page2.decidePage2width(page2_6);
    this.page2.decidePage2radius(page2_6);
    this.page2.setpage2Position(page1Content,page2_6);
    page2_6.style.display = "none";
  }
  onSelected2_6(){
    window.location.href = "https://www.baidu.com/";
  }
  onSelectedGet2_6(){
    window.location.href = "https://www.baidu.com/";
  }
  onSelectedButton2_6(){
    window.location.href = "https://www.baidu.com/";
  }

  ngOnInit() {
    this.page2_6();
  }

}

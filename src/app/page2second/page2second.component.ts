import { Component, OnInit } from '@angular/core';
import { Page2firstComponent } from '../page2first/page2first.component';

@Component({
  selector: 'app-page2second',
  templateUrl: './page2second.component.html',
  styleUrls: ['./page2second.component.css']
})
export class Page2secondComponent implements OnInit {

  constructor() { }
  //创建实例
  page2 = new Page2firstComponent();
  
  page2_2(){
    var page2_2 = document.getElementById("page2-2");
    var page1Content = document.getElementById("content2");
    page2_2.style.width = document.body.clientWidth + "px";
    this.page2.decidePage2site(page2_2);
    this.page2.decidePage2width(page2_2);
    this.page2.decidePage2radius(page2_2);
    this.page2.setpage2Position(page1Content,page2_2);
    page2_2.style.display = "none";
  }

  onSelected2_2(){
    window.location.href = "https://www.baidu.com/";
  }
  onSelectedGet2_2(){
    window.location.href = "https://www.baidu.com/";
  }
  onSelectedButton2_2(){
    window.location.href = "https://www.baidu.com/";
  }
  ngOnInit() {
    this.page2_2();
  }

}

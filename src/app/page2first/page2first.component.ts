import { Component, OnInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import * as $ from 'jquery';

@Component({
  selector: 'app-page2first',
  templateUrl: './page2first.component.html',
  styleUrls: ['./page2first.component.css']
})
export class Page2firstComponent implements OnInit {

  constructor() {}

  //函数decidePage2width(page2)；
  //功能：根据设备调整page2的width；
  //输入：page2：第二个界面对象
  //输出：Null
  decidePage2width(page2){
    var sceenSize = document.body.clientWidth;

    if (sceenSize > 450)
    {
      page2.style.width = (sceenSize-200) + "px";
      page2.style.marginLeft = 100 + "px";
    }
  } 

  //函数decidePage2site(page2)；
  //功能：根据设备调整page2的位置；
  //输入：page2：第二个界面对象
  //输出：Null
  decidePage2site(page2){
    var sceenSize = document.body.clientWidth;

    if (sceenSize > 450)
    {
      page2.style.marginTop = "5rem";
    }
  }

  //函数decidePage2radius(page2)；
  //功能：根据设备调整page2的radius；
  //输入：page2：第二个界面对象
  //输出：Null
  decidePage2radius(page2){
    var sceenSize = document.body.clientWidth;
    if (sceenSize > 450)
    {
      page2.style.borderRadius = "2rem 2rem 0rem 0rem";
    }
  }
  setpage2Position(page1Content,page2){
    var left = page1Content.getBoundingClientRect().left;
    var top = page1Content.getBoundingClientRect().top + 3;
    page2.style.left = left + "px";
    page2.style.top = top + "px";
  }
  page2_1(){
    var page2_1 = document.getElementById("page2-1");
    page2_1.style.width = document.body.clientWidth + "px";
    var page1Content = document.getElementById("content1");
    this.decidePage2site(page2_1);
    this.decidePage2width(page2_1);
    this.decidePage2radius(page2_1);
    this.setpage2Position(page1Content,page2_1);
    page2_1.style.display = "none";
  }

  onSelected(){
    window.location.href = "https://www.baidu.com/";
  }
  onSelectedGet(){
    window.location.href = "https://www.baidu.com/";
  }
  onSelectedButton(){
    window.location.href = "https://www.baidu.com/";
  }

  ngOnInit() {
    this.page2_1();
  }

}
 
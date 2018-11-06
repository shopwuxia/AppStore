import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1-foot',
  templateUrl: './page1-foot.component.html',
  styleUrls: ['./page1-foot.component.css']
})
export class Page1FootComponent implements OnInit {

  constructor() { }
  getWidth(){
    var screenWidth = document.body.clientWidth;
    var button1 = document.getElementById("footButton1");
    var button2 = document.getElementById("footButton2");
    var button3 = document.getElementById("footButton3");


    
    if ( screenWidth < 450 )
    {
      button1.style.marginLeft = "1.5rem";
      button2.style.marginLeft = "1.5rem";
      button3.style.marginLeft = "1.5rem";
    }
    else 
    {
      button1.style.marginLeft = "2.2rem";
      button2.style.marginLeft = "2.2rem";
      button2.style.marginLeft = "2.2rem";
    }
  }
  onSelectedButton1(){
    window.location.href = "https://wenku.baidu.com/";
  }
  onSelectedButton2(){
    window.location.href = "https://image.baidu.com/";
  }
  /*getWidth(){
    var content1 = document.getElementById("content1");
    alert(content1);*/
    /*var footButton = document.getElementsByClassName("footButton");
    for(var i = 0;i < footButton.length;i++)
    {
      var footbutton = footButton[i];
      footbutton.
    }
  }*/
  ngOnInit() {
    this.getWidth();
  }

}

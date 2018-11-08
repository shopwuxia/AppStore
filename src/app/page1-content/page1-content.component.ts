import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { elementAttribute } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-page1-content',
  templateUrl: './page1-content.component.html',
  styleUrls: ['./page1-content.component.css']
})
export class Page1ContentComponent implements OnInit {

  constructor() { }

  //函数page1_page2Animation(page2)；
  //功能：page1~page2动画
  //输入：page2：第二个界面对象
  //输出：Null
  page1_page2Animation(page2){
    var appStore = document.getElementById("appStore");
    var winHeight = screen.availHeight;
    var scrolltop = $("html").scrollTop();
    var page1 = document.getElementById("page1");
    var height = page2.outerHeight(true);
    var width = page2.width();
    var changeWidth = 27*12;
    var changeHeight = 30*12;
    var changeTop;
    var changeLeft;
    var changeWidthSpeed = (width-27*12)/100;
    var changeHeightSpeed = (height-30*12)/100;
    var changeTopSpeed;
    var changeLeftSpeed;
    var i = 1;
    var j = 1;
    if (winHeight > height)
    {
      appStore.style.height = winHeight.toString() + "px";
    }
    else
    {
      appStore.style.height = height.toString() + "px";
    }
    appStore.style.overflow = "hidden";
    page1.style.filter = "blur(100px)";
    page1.style.top = "-" + scrolltop + "px";
    page2.css("z-index","2");
    scroll(0,0);//固定从顶部显示
    page2.css("height","30rem");
    page2.css("width","27rem");
    page2.css("overflow","hidden");
    page2.css("display","block");
    page2.css("top",page2.position().top - scrolltop + "px");
    changeTop = page2.position().top;
    changeLeft = page2.position().left;
    changeTopSpeed = changeTop/20;
    changeLeftSpeed = changeLeft/20;
    var slideTopLeft = setInterval(()=>{
      changeTop = changeTop - changeTopSpeed;
      changeLeft = changeLeft - changeLeftSpeed;
      if( j==20 )
      {
        clearInterval(slideTopLeft)
      }
      page2.css("top",changeTop + "px");
      page2.css("left",changeLeft + "px");
      page2.css("overflow","hidden"); 
      j++;
    },5)
    var slide = setInterval(()=>{
      changeWidth = changeWidth + changeWidthSpeed;
      changeHeight = changeHeight + changeHeightSpeed;
      
      if( i==100 )
      {
        clearInterval(slide);
      }
      page2.css("height",changeHeight.toString());
      page2.css("width",changeWidth.toString());
      
      page2.css("overflow","hidden"); 
      i++;
    },5)
    // page2.css("margin_top","4rem");
    // setTimeout(()=>{
    //   page2.css("margin_top","5rem")
    // },600);
  }

  page1_page2Animations(page2,container){
    var appStore = document.getElementById("appStore");
    var winHeight = screen.availHeight;
    var scrolltop = $("html").scrollTop();
    var page1 = document.getElementById("page1");
    var height = page2.outerHeight(true);
    var width = document.body.clientWidth; //page2.width();//
    var changeTop;
    var changeLeft;
    var changeWidth = 27*12;
    var changeHeight = 30*12;
    var changeWidthSpeed;
    var changeTopSpeed;
    var changeLeftSpeed;
    var i = 1;
    var j = 1;

    if (width > 450)
    {
      width = document.body.clientWidth - 200;
    }
    changeWidthSpeed = (width-27*12)/100;
    
    if (winHeight > height)
    {
      appStore.style.height = winHeight.toString() + "px";
    }
    else
    {
      appStore.style.height = height.toString() + "px";
    }
    if(height < winHeight)
    {
      var changeHeightSpeed = (winHeight-30*12)/100;
      container.style.height = "100%";
    }
    else
    {
      var changeHeightSpeed = (height-30*12)/100;
    }
    appStore.style.overflow = "hidden";
    page1.style.filter = "blur(100px)";
    page1.style.top = "-" + scrolltop + "px";
    page2.css("z-index","2");
    scroll(0,0);//固定从顶部显示
    page2.css("height","30rem");
    page2.css("width","27rem");
    page2.css("overflow","hidden");
    page2.css("display","block");
    page2.css("top",page2.position().top - scrolltop + "px");
    changeTop = page2.position().top;
    changeLeft = page2.position().left;
    changeTopSpeed = changeTop/20;
    changeLeftSpeed = changeLeft/20;
    var slideTopLeft = setInterval(()=>{
      changeTop = changeTop - changeTopSpeed;
      changeLeft = changeLeft - changeLeftSpeed;
      if( j==20 )
      {
        clearInterval(slideTopLeft)
      }
      page2.css("top",changeTop + "px");
      page2.css("left",changeLeft + "px");
      page2.css("overflow","hidden"); 
      j++;
    },5)
    var slide = setInterval(()=>{
      changeWidth = changeWidth + changeWidthSpeed;
      changeHeight = changeHeight + changeHeightSpeed;
      if( i==100 )
      {
        clearInterval(slide);
      }
      page2.css("height",changeHeight.toString());
      page2.css("width",changeWidth.toString());
      page2.css("overflow","hidden"); 
      i++;
    },5)
  } 

  //图片到达顶部时，X图标改变样式,以及底部的获取div出现或消失
  public flag: number = 0;
  change(img,getAppDiv,animationPDiv,xbutton,getAppButtomDiv){
    var getPosition = setInterval(()=>{
      var imgPosition = img.offset().top - $("html").scrollTop();
      var divPosition = getAppDiv.offset().top - $("html").scrollTop() - $(window).height();
      var divPosition2 = animationPDiv.offset().top - $("html").scrollTop() - $(window).height();
      // if
      // {
      //   clearInterval(getPosition);
      // }
      if (imgPosition < 0)
      {
        xbutton.css("background-color","gainsboro");
        xbutton.css("color","grey");
      }
      else
      {
        xbutton.css("background-color","grey");
        xbutton.css("color","gainsboro");
      }
      if(this.flag == 0 && divPosition2 > 0)
      {
        getAppButtomDiv.slideUp("fast");
        this.flag = 1; 
      }
      else if((divPosition2 < 0) && this.flag == 1)
      {
        getAppButtomDiv.slideDown("fast");
        this.flag = 2;
      }
      else if(divPosition < 0 && this.flag == 2)
      {
        getAppButtomDiv.slideUp("fast");
        this.flag = 3;
      } 
      else if(this.flag == 3 && divPosition > 0)
      {
        getAppButtomDiv.slideDown("fast");
        this.flag = 2;
      }
      else if(this.flag == 2 && divPosition2 > 0)
      {
        getAppButtomDiv.slideUp("fast");
        this.flag = 1;
      }
    },10);
  }

  onSelected(){
    var page2_1 = $("#page2-1");
    var img = $("#imgChange");
    var getAppDiv = $("#getApp");
    var xbutton = $(".back");
    var getAppButtomDiv = $("#getAppButtom");
    var animationPDiv = $("#animation2_1");
    setTimeout(this.page1_page2Animation,100,page2_1);
    //this.page1_page2Animation(page2_1);
    this.change(img,getAppDiv,animationPDiv,xbutton,getAppButtomDiv);
  }
  onMousedown(){
    var cdiv = document.getElementById("content1");
    cdiv.style.width = "24rem";
    cdiv.style.height = "29rem";
  }
  onSelected2(){
    var page2_2 = $("#page2-2");
    var img = $("#imgChange2_2");
    var getAppDiv = $("#getApp2_2");
    var xbutton = $(".back2_2");
    var getAppButtomDiv = $("#getAppButtom2_2");
    var animationPDiv = $("#animation2_2");
    this.page1_page2Animation(page2_2);
    this.change(img,getAppDiv,animationPDiv,xbutton,getAppButtomDiv);
  }
  onMousedown2(){
    var cdiv = document.getElementById("content2");
    cdiv.style.width = "24rem";
    cdiv.style.height = "29rem";
  }
  onSelected2_2(){
    window.location.href = "https://zhidao.baidu.com/";
    event.stopPropagation();
  }
  onMousedown2_2(){
    var button1 = document.getElementById("button");
    button1.style.color = "gray";
  }
  onSelected3(){
    var page2_3 = $("#page2-3");
    var img = $("#imgChange2_3");
    var getAppDiv = $("#getApp2_3");
    var xbutton = $(".back2_3");
    var getAppButtomDiv = $("#getAppButtom2_3");
    var animationPDiv = $("#animation2_3");
    this.page1_page2Animation(page2_3);
    this.change(img,getAppDiv,animationPDiv,xbutton,getAppButtomDiv);
  }
  onMousedown3(){
    var cdiv = document.getElementById("content3");
    cdiv.style.width = "24rem";
    cdiv.style.height = "29rem";
  }
  onSelected4(){
    var page2_4 = $("#page2-4");
    var img = $("#imgChange2_4");
    var getAppDiv = $("#getApp2_4");
    var xbutton = $(".back2_4");
    var getAppButtomDiv = $("#getAppButtom2_4");
    var animationPDiv = $("#animation2_4");
    this.page1_page2Animation(page2_4);
    this.change(img,getAppDiv,animationPDiv,xbutton,getAppButtomDiv);
  }
  onMousedown4(){
    var cdiv = document.getElementById("content4");
    cdiv.style.width = "24rem";
    cdiv.style.height = "29rem";
  }
  onSelected5(){
    var page2_5 = $("#page2-5");
    var img = $("#imgChange2_5");
    var getAppDiv = $("#getApp2_5");
    var xbutton = $(".back2_5");
    var getAppButtomDiv = $("#getAppButtom2_5");
    var animationPDiv = $("#animation2_5");
    this.page1_page2Animation(page2_5);
    this.change(img,getAppDiv,animationPDiv,xbutton,getAppButtomDiv);
  }
  onMousedown5(){
    var cdiv = document.getElementById("content5");
    cdiv.style.width = "24rem";
    cdiv.style.height = "29rem";
  }
  onSelected6(){
    var page2_6 = $("#page2-6");
    var container = document.getElementById("container7");
    this.page1_page2Animations(page2_6,container);
  }
  onMousedown6(){
    var cdiv = document.getElementById("content6");
    cdiv.style.width = "24rem";
    cdiv.style.height = "29rem";
  }
  onSelected6_1(){
    window.location.href = "https://wenku.baidu.com/";
  }
  playVideo(){
    var v = document.querySelector("video");
    v.muted = true;
    v.play();
  }
  mouseInVideo(){
    var videoItem = document.getElementById("video");
    videoItem.setAttribute("controls",'true');
  }
  //预处理，将body元素的margin设为0
  changeBodycss(){
    $("body").css("margin","0rem");
  }
  ngOnInit() {
    this.changeBodycss();
    this.playVideo();
  }

}

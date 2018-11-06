import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { detachEmbeddedView } from '@angular/core/src/view';

@Component({
  selector: 'app-page1-head',
  templateUrl: './page1-head.component.html',
  styleUrls: ['./page1-head.component.css']
})
export class Page1HeadComponent implements OnInit {

  constructor() { }
  
  Time = this.getDate();

  getDate(){
    var date = new Date();
    var year = date.getFullYear();
    var mouth = date.getMonth() + 1;
    var day = date.getDate();
    var weekday = date.getDay();
    var time = year + "年" + mouth + "月" + day + "日" + ' ' + this.weekdayToChinese(weekday);
    return time;
  }
  weekdayToChinese(weekday){
    if(weekday = 1)
      return "星期一";
    else if(weekday = 2)
      return "星期二";
    else if(weekday = 3)
      return "星期三";
    else if(weekday = 4)
      return "星期四";
    else if(weekday = 5)
      return "星期五";
    else if(weekday = 6)
      return "星期六";
    else if(weekday = 7)
      return "星期七";
    else  
      return "获取日期错误";
  }

  ngOnInit() {
  }

}

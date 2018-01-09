import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'adv-dictionary-search',
  templateUrl: './adv-dictionary-search.component.html',
  styleUrls: ['./adv-dictionary-search.component.scss']
})
export class AdvDictionarySearchComponent implements OnInit, OnChanges {
  @Input() titleData = {};
  @Input() keyColumn = '';
  @Input() nameColumn = '';
  @Input() orginTitleData = {}
  @Output() emitterPersonData = new EventEmitter();

  _titleArray = [];
  _modalShow = false;
  advDictionaryListData = [];
  _personName = '';

  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    let newTitle = changes['titleData'].currentValue;
    if(newTitle){
      this.advDictionaryListData = newTitle.AdvDictionaryListData || [];
      let title = this.orginTitleData[this.keyColumn] || {};
      this._personName = title['ColDispName'];
      // console.info("advDictionaryListData",this.advDictionaryListData)
    }
  }

  selectParamsClick(){ this._modalShow = true }

  ngOnInit() {
    
  }

  alertModalEM() { 
    this._modalShow = false;
    // this.emitterPersonData.emit();
    // this.emitterTitleArray.emit(this.titleData);
  }

  formItemResourceNoti(note){
    if(window.debug) console.info("formItemResourceNoti",note)
    let title = note['title'];
    let nameTitle = title.filter(item => item.CDZ2_COL1 == this.nameColumn);
    title = title.filter(item => item.CDZ2_COL1 == this.keyColumn)//过滤字段，为1的不能匹配
    let cmswhere = '';
    if(Array.isArray(title) && title.length == 1){
      title = title[0];
      cmswhere = this.keyColumn + " = " + note.data[title.CDZ2_COL2];
    }
    
    let personName = '';
    if(Array.isArray(nameTitle) && nameTitle.length == 1){
      nameTitle = nameTitle[0];
      personName = note.data[nameTitle.CDZ2_COL2];
    }

    this.emitterPersonData.emit({cmswhere,personName});
    this._modalShow = false;
  }

}

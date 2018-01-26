import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output,OnChanges} from '@angular/core';
import {isNullOrUndefined} from "util";
import {PostService} from '../../../post.service';

@Component({
  selector: 'app-post-editcli',
  template: `<textarea id="{{elementId}}"></textarea>`
})
export class PostEditcliComponent implements OnInit,AfterViewInit, OnDestroy,OnChanges  {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();
  baseURL: string = '/';
  editor;
  didSetValue: boolean = false;
  defaultValue: String ="";
  constructor(
    private postservice : PostService,
  ) {
    this.defaultValue = this.postservice.getBody();
  }
  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      height: '480',
      plugins: ['link', 'paste', 'table'],
      skin_url: this.baseURL+'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        this.editor.on('init', ()=>{
           editor.setContent(this.defaultValue.toString());
        });
        this.editor.on('keyup',()=>{
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });

      },

    });


  }
  ngOnInit() {

  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  ngOnChanges(){

  }

  setCC(body:String){
    this.editor.setContent(body.toString());
    console.log(body);
  }
}

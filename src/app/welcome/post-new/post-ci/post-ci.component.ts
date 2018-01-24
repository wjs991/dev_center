import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-post-ci',
  templateUrl: './post-ci.component.html',
  template: `<textarea id="{{elementId}}"></textarea>`
})
export class PostCiComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Input() defaultvalue: any;
  @Output() onEditorKeyup = new EventEmitter<any>();

  baseURL: string = '/';
  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: this.baseURL+'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },

    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}

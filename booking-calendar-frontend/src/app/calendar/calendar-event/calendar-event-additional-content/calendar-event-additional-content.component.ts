import { Component, Output, OnInit, SimpleChanges, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-calendar-event-additional-content',
  templateUrl: './calendar-event-additional-content.component.html',
  styleUrls: ['./calendar-event-additional-content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarEventAdditionalContentComponent implements OnInit {
  @Input() eventForm: FormGroup;
  @Output() fileLoaded = new EventEmitter();
  public festivals = [];
  public specialPricings = [];
  public isImageFromBase64 = false;
  public genreTypes = [];
  public image: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('additional-options').subscribe( resp => {
      this.festivals = this.mapData(resp, 'festivals');
      this.genreTypes = this.mapData(resp, 'genre_type');
      this.specialPricings = this.mapData(resp, 'special_pricing');
    });
  }

  mapData(resp, key) {
    return _.map(_.values(resp[key]), option => {
      return {
        'tid': option.tid,
        'name': option.name
      };
    });
  }

  onFileChange(event, isImage = false): void {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      const extension = file.name.split('.').pop();
      reader.onload = (readedFile) => {
        if (isImage) {
          const image = new Image();
          image.src = readedFile.target['result'];
          image.onload = (img) => {
            this.image = reader.result;
            this.isImageFromBase64 = true;
            this.fileLoaded.emit({
              'key': 'poster',
              'value': reader.result,
              'extension': extension,
              'width': image['width'],
              'height': image['height']
            });
          };
        } else {
          this.fileLoaded.emit({
            'key': 'rider',
            'value': reader.result,
            'extension': extension,
            'width': null,
            'height': null
          });
        }
      };
    }
  }
  remove(performer) {
    const performers = this.eventForm.value['supportingPerformers'];
    if (performers.length === 0) {
      return false;
    }
    const modifiedPerformers = _.reject(performers, oldPerformer => {
      return oldPerformer.value === performer['value'];
    });
    const values = {...this.eventForm.value};
    this.eventForm.setValue({...values, 'supportingPerformers': modifiedPerformers});
  }

  add(event) {
    const performers = this.eventForm.value['supportingPerformers'];
    if (performers.length >= 5) {
      return false;
    }
    const values = {...this.eventForm.value};
    performers.push({'value': event.value});
    this.eventForm.setValue({...values, 'supportingPerformers': performers}, {onlySelf: false, emitEvent: true});

  }
}

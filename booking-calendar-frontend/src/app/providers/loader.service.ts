import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoaderService {
  loadingSubject: any;
  private _loader: boolean;
  constructor() {
    this.loadingSubject = new BehaviorSubject<boolean>(true);
  }

  set loader (loader: boolean) {
    this.loadingSubject.next(loader);
  }

  get loader () {
      return this._loader;
  }
}

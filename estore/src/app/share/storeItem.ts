import { BehaviorSubject, Observable } from 'rxjs';

export class StoreItem<T> {
  private _state$: BehaviorSubject<T>;

  public constructor(initialState: T) {
    this._state$ = new BehaviorSubject(initialState);
  }

  public setValue(newValue: T): void {
    this._state$.next(newValue);
  }

  public get value$(): Observable<T> {
    return this._state$.asObservable();
  }

  public get value(): T {
    return this._state$.value;
  }
}


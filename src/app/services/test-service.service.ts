import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  constructor() {}

  isLogin(): boolean {
    return !!localStorage.getItem('token');
  }
}

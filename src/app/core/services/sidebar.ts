import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private _open = signal(false);
  private _isMobile = signal(false);

  isOpen = this._open.asReadonly();
  isMobile = this._isMobile.asReadonly();

  isOverlay = computed(() => this._isMobile() && this._open());

  setMobile(value: boolean) {
    this._isMobile.set(value);
    if (!value) {
      this._open.set(true); // desktop default open
    }
  }

  toggle() {
    this._open.update(v => !v);
  }

  close() {
    this._open.set(false);
  }
}

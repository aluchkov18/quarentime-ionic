import { Component, OnInit } from '@angular/core';
import {PageInterface} from '../../core/page-interface';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

import {locale as english} from './i18n/en';
import {locale as spanish} from './i18n/es';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.page.html',
  styleUrls: ['./personal-data.page.scss'],
})
export class PersonalDataPage extends PageInterface implements OnInit {

  constructor(public translateService: TranslateService,
              private router: Router) {
    super(translateService, english, spanish);
  }

  ngOnInit(): void {
  }

  get currentPageTitle(): string {
    const url = this.router.url.split('/');
    switch (url[url.length - 1]) {
      case 'info':
        return 'PERSONAL_INFORMATION';
      case 'symptoms':
        return 'SYMPTOMS';
      case 'questions':
        return 'QUESTIONS';
      default:
        return '';
    }
  }
}

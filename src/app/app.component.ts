import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from './providers/auth.service';
import {Router} from '@angular/router';
import {PersonalDataService} from './pages/personal-data/personal-data.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authService: AuthService,
        private router: Router,
        private dataService: PersonalDataService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.authService.init();
        this.platform.ready().then(() => {
            this.dataService.loadData();
            if (this.platform.is('ios')) {
                this.statusBar.styleDefault();
            }
            this.authService.loggedIn.subscribe(state => {
                if (!state) {
                    // this.router.navigateByUrl('onboarding');
                }
            });
        });
    }
}

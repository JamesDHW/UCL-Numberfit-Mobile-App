import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Play',
      url: '/play',
      icon: 'play'
    },
    {
      title: 'Leaderboard',
      url: '/leaderboard',
      icon: 'list'
    },
    {
      title: 'Progress',
      url: '/student-list',
      icon: 'analytics'
    },
    {
      title: 'My Account',
      url: '/my-account',
      icon: 'person'
    },
    {
      title: 'Sign-Out',
      url: '/sign-out',
      icon: 'exit'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

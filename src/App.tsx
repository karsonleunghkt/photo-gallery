import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonList,
  IonContent,
  IonSplitPane,
  IonMenu
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, shareSocialSharp, phonePortrait, phoneLandscapeOutline, home, personCircleOutline, carOutline, cartOutline, wallet } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import {Card} from './pages/card';
import {apphome} from './pages/apphome';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { PhotosAlbumType } from '@capacitor/core';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>          
          <Route Path="/apphome" component={apphome}  exact={true}/>
          <Route path="/tab1" component={Tab1} exact={true} />
          {/* <Route path="/tab2" component={Tab2} exact={true}/> */}
          <Route path="/card" component={Card} exact={true} />
          <Route path="/tab3" component={Tab3} exact={true}/>          
          {/* <Route Path="/profile" component={profile} exact={true}/> */}
          <Route path="/" render={() => <Redirect to="/apphome" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="apphome" href="/apphome">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={cartOutline} />
            <IonLabel>Shopping</IonLabel>
          </IonTabButton>
          <IonTabButton tab="card" href="/card">
            <IonIcon icon={wallet} />
            <IonLabel>My Wallet</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          
        
        
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    <IonMenu side="start" content-id="main-content"></IonMenu>
  </IonApp>
);

export default App;

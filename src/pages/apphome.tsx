import React, {useState} from 'react';
import { IonSearchbar, IonContent, IonItem, IonLabel, IonHeader, IonIcon, IonButtons,IonTitle, IonToolbar, IonBackButton,IonButton} from '@ionic/react';
import { personCircle, search, ellipsisHorizontal, ellipsisVertical, ellipse, square, triangle, shareSocialSharp, phonePortrait, phoneLandscapeOutline, home, notifications } from 'ionicons/icons';



export const apphome: React.FC = () => (
  
  <IonContent
    scrollEvents={true}
    onIonScrollStart={() => {}}
    onIonScroll={() => {}}
    onIonScrollEnd={() => {}}>
         
    <IonToolbar color="primary">
    <IonButtons slot="secondary">
      <IonButton href="/tab3">
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton >
        <IonIcon slot="icon-only" ios={notifications} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>MyHKT</IonTitle>
    
  </IonToolbar>
      <IonSearchbar value="" ></IonSearchbar>
      
        <IonItem href="./tab1">
          <IonLabel>
            Shopping
          </IonLabel>
        </IonItem>
        <IonItem href="./card">
          <IonLabel>
            My Wallet
          </IonLabel>
        </IonItem>
        <IonItem href="./tab3">
          <IonLabel>
            Customer Profile
          </IonLabel>
        </IonItem>
        <IonItem href="./tab2">
          <IonLabel>
            Photo Gallery
          </IonLabel>
        </IonItem>
      
         
        {/* <IonItem detail={false} href="https://www.ionicframework.com">
          <IonLabel>
            Anchor Item with no Detail Arrow
          </IonLabel>
        </IonItem> */}

  </IonContent>
)
export default apphome;
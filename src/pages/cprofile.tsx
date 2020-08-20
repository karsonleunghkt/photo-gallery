import React from 'react';
import { IonHeader, IonButtons, IonTitle, IonBackButton, IonToolbar, IonAvatar, IonChip, IonItem, IonLabel, IonContent } from '@ionic/react';


export const cprofile: React.FC = () => {
    return(
    
  <IonContent>
    <IonHeader>
    <IonToolbar>
          <IonButtons slot="start">
      <IonBackButton defaultHref="./apphome" />
    </IonButtons>
    <IonTitle>My Profile</IonTitle>
    </IonToolbar>
    </IonHeader>
    

    <IonChip>
      <IonAvatar>
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonAvatar>
      <IonLabel>Chip Avatar</IonLabel>
    </IonChip>

    
  </IonContent>

    )}
export default cprofile;

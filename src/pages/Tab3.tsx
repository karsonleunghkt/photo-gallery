import React, {useState} from 'react';
import { IonInput, IonItemDivider, IonChip, IonAvatar, IonLabel, IonBackButton, IonMenu, IonButtons, IonMenuButton, IonItem, IonList,IonRouterOutlet , IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonPopover } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

export const Tab3: React.FC = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="./apphome" />
        </IonButtons></IonToolbar> 
        <IonTitle>My profile</IonTitle>
       
          
        
      </IonHeader>
      
      <IonContent  className="ion-padding">
        <IonHeader collapse="condense">
        <IonAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
        <IonToolbar>
         <IonTitle size="large">Karson Leung</IonTitle>
         
      
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItemDivider>Customer Information</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="UserName" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>

          {/* <IonItemDivider>Input with clear button when there is a value</IonItemDivider> */}
          <IonItem>
            <IonInput value={text} placeholder="Change Your password Input" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
          </IonItem>

          <IonItemDivider>Contact Information</IonItemDivider>
          <IonItem>
            <IonInput type="number" value={number} placeholder="Enter Your Phone Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>

          <IonItemDivider>Disabled input</IonItemDivider>
          <IonItem>
            <IonInput value={text} disabled></IonInput>
          </IonItem>

          <IonItemDivider>HKID</IonItemDivider>
          <IonItem>
            <IonInput value="E1214997" readonly></IonInput>
          </IonItem>

          <IonItemDivider>Inputs with labels</IonItemDivider>

          <IonItem>
            <IonLabel>Default Label</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Floating Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="fixed">Fixed Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Stacked Label</IonLabel>
            <IonInput value={text}> </IonInput>
          </IonItem>
        </IonList>
       
        {/* <ExploreContainer name="Tab 3 page" /> */}
      </IonContent>
      
    </IonPage>
    
  );
};




export default Tab3;

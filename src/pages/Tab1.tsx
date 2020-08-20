import React, {useState} from 'react';
import {IonButtons, IonButton, IonBackButton, IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFabList, IonInput, IonItem, IonList, IonItemDivider, IonLabel, IonDatetime, IonLoading } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

export const Tab1: React.FC = () => {
  const [showLoading, setShowLoading] = useState(false);
  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
      <IonBackButton defaultHref="./apphome" />
    </IonButtons>
    <IonTitle>Shopping</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonHeader>
        <IonToolbar> <IonTitle> CSL</IonTitle></IonToolbar>
         
         </IonHeader>
       <IonContent fullscreen>
      {/* <IonList>
        <IonItem>
          <IonInput placeholder="Title"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput placeholder="Location"></IonInput>
        </IonItem>
        <IonItemDivider></IonItemDivider>
        <IonItem>
          <IonLabel>Start Date</IonLabel>
          <IonDatetime value="1990-02-19" placeholder="Select Date"></IonDatetime>
        </IonItem>
      </IonList>
        <IonItem>
          <IonLabel>Start Time</IonLabel>
          <IonDatetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></IonDatetime>
        </IonItem>
        <IonItem>
          <IonLabel>Ends</IonLabel>
          <IonDatetime value="1990-02-20" placeholder="Select Date"></IonDatetime>
        </IonItem>
        <IonItem>
          <IonLabel>Repeat</IonLabel>
          <IonDatetime placeholder="Never" disabled></IonDatetime>
        </IonItem>
        <IonItem>
          <IonLabel>Travel Time</IonLabel>
          <IonDatetime placeholder="None" disabled></IonDatetime>
        </IonItem>
        <IonItemDivider></IonItemDivider>
        <IonItem>
          <IonLabel>Alert</IonLabel>
          <IonDatetime placeholder="None" disabled></IonDatetime>
        </IonItem>  */}
       <iframe max-width="100%" max-height="100%" width="100%" height="100%" scrolling="auto" data-tap-disabled="false" src="https://hkcsl.com/"></iframe>
      </IonContent>
     
      <IonContent>
        {/*-- fab placed to the top end --*/}
        {/* <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab> */}

        {/*-- fab placed to the bottom end --*/}
        {/* <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={arrowForwardCircle} />
          </IonFabButton>
        </IonFab> */}

        {/*-- fab placed to the top start --*/}
        {/* <IonFab vertical="top" horizontal="start" slot="fixed">
          <IonFabButton>
            <IonIcon icon={arrowBackCircle} />
          </IonFabButton>
        </IonFab> */}

        {/*-- fab placed to the bottom start --*/}
        {/* <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton>
            <IonIcon icon={arrowUpCircle} />
          </IonFabButton>
        </IonFab> */}

        {/*-- fab placed to the (vertical) center and start --*/}
        {/* <IonFab vertical="center" horizontal="start" slot="fixed">
          <IonFabButton>
            <IonIcon icon={share} />
          </IonFabButton>
        </IonFab> */}

        {/*-- fab placed to the (vertical) center and end --*/}
        {/* <IonFab vertical="center" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab> */}

        {/*-- fab placed to the top and end and on the top edge of the content overlapping header --*/}
        {/* <IonFab vertical="top" horizontal="end" edge slot="fixed">
          <IonFabButton>
            <IonIcon icon={person} />
          </IonFabButton>
        </IonFab> */}

        {/*-- fab placed to the bottom and start and on the bottom edge of the content overlapping footer with a list to the right --*/}
        {/* <IonFab vertical="bottom" horizontal="start" edge slot="fixed">
          <IonFabButton>
            <IonIcon icon={settings} />
          </IonFabButton>
          <IonFabList side="end">
            <IonFabButton><IonIcon icon={logoVimeo} /></IonFabButton>
          </IonFabList>
        </IonFab> */}

        {/*-- fab placed in the center of the content with a list on each side --*/}
        
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton> 
            <IonIcon icon={share} />
          </IonFabButton>
          <IonFabList side="top" >
            <IonFabButton><IonIcon icon={logoVimeo} /></IonFabButton>
          </IonFabList>
          <IonFabList side="bottom">
            <IonFabButton color="dark"><IonIcon icon={logoFacebook} /></IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton onClick={() => setShowLoading(true)}>
              <IonLoading
                cssClass='my-custom-class'
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'Please wait to connect to Instagram'}
                duration={1000}
              />
               <IonIcon icon={logoInstagram} />
               </IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton><IonIcon icon={logoTwitter} /></IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};


export default Tab1;
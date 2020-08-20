import React from 'react';
import { IonButtons, IonBackButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonInfiniteScroll } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

export const Card: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="black">
          <IonButtons slot="start">
            <IonBackButton defaultHref="./apphome" />
          </IonButtons>
          <IonTitle>Coupons</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonInfiniteScroll>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Cash Coupon</IonCardSubtitle>
            <IonCardTitle>$50 Cash Coupon</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Trade in Coupon</IonCardSubtitle>
            <IonCardTitle>$1000 Cash Coupon</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>
        
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Gift Coupon</IonCardSubtitle>
            <IonCardTitle>Rice Cooker X 1</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>

        

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

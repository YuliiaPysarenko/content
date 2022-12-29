import React from "react";
import { useTranslation } from 'react-i18next';
import Container from '../../components/Container/Container';
import imgDiiaExport from '../../assets/images/Diia_Business.jpg';
import imgFlyUIA from '../../assets/images/FlyUIA.jpg';
import imgYellowPlane from '../../assets/images/yellowplane.jpg';
import imgBorscht from '../../assets/images/borscht.jpg';
import imgViasat from '../../assets/images/viasat.jpg';
import imgVodafone from '../../assets/images/vodafone.jpg';
import imgWetronic from '../../assets/images/wetronic.jpg';
import imgTascombank from '../../assets/images/Tascombank.jpg';
import styles from './PromoPage.module.scss';

export default function PromoPage() {
  const { t } = useTranslation();
  return (
    <Container className={styles.promoPage}>
      <Container className={styles.promoBlock}>
        <Container className={styles.videoZone}>
          <div className={styles.promoVideoContainer}>
            <img className={styles.projectImage} src={imgDiiaExport} alt={"Diia.Business"} />
          </div>
        </Container>
        <Container className={styles.promoText}>
          <h3 className={styles.promoTitle}>Diia. Business</h3>

          <p>{t('diia.description')}</p>

          <ul className={styles.achievementList}>
            <li>{t('diia.articles')} <a href="https://export.gov.ua/4-iak_prokhodit_mitne_oformlennia_tovariv" target="_blank" rel="noreferrer">Як проходить митне оформлення товарів</a> (UA), <a href="https://imp.export.gov.ua/107-it" target="_blank" rel="noreferrer">IT Cluster</a> (EN), <a href="https://imp.export.gov.ua/93-discover_ukraine" target="_blank" rel="noreferrer">Discover Ukraine</a> (EN); {t('diia.guides')} "<a href="https://export.gov.ua/255-iak_diznatisia_tarifni_ta_netarifni_obmezhennia" target="_blank" rel="noreferrer">Як дізнатися тарифні та нетарифні обмеження?</a>" (UA), "<a href="https://export.gov.ua/245-onlain_resursi_dlia_provedennia_doslidzhennia" target="_blank" rel="noreferrer">Онлайн-ресурси для проведення дослідження</a>" (UA)</li>
            <li>{t('diia.cards')} <a href="https://export.gov.ua/country/103-polshcha" target="_blank" rel="noreferrer">{t('diia.PL')}</a>, <a href="https://export.gov.ua/country/78-velika_britaniia" target="_blank" rel="noreferrer">{t('diia.GB')}</a></li>
            <li>{t('testing product')}</li>
            <li>{t('diia.news')}</li>
            <li>{t('diia.manual')}</li>
          </ul>
        </Container>
      </Container>

      <Container className={styles.promoBlock}>
        <Container className={styles.videoZone}>
          <div className={styles.promoVideoContainer}>
            <img className={styles.projectImage} src={imgFlyUIA} alt={"UIA"} />
          </div>
        </Container>
        <Container className={styles.promoText}>
          <h3 className={styles.promoTitle}>Ukrainian International Airlines (МАУ)</h3>
          <p>{t('uia.description')}</p>

          <ul className={styles.achievementList}>
            <li>{t('uia.editing')}</li>
            <li>{t('uia.schedules')}</li>
            <li>{t('uia.landings')} (<a href="https://www.flyuia.com/ua/en/services/sale-of-pcr-tests" target="_blank" rel="noreferrer">Buy PCR tests</a>, <a href="https://www.flyuia.com/ua/en/services/travel-insurance" target="_blank" rel="noreferrer">Travel Insurance</a>)</li>
            <li>{t('uia.news')}</li>
            <li>{t('uia.emails')}</li>
          </ul>
        </Container>
      </Container>

      <Container className={styles.promoBlock}>
        <Container className={styles.videoZone}>
          <div className={styles.promoVideoContainer}>
            <img className={styles.projectImage} src={imgViasat} alt={"Viasat"} />
          </div>
        </Container>
        <Container className={styles.promoText}>
          <h3 className={styles.promoTitle}>Viasat</h3>

          <p>{t('viasat.description')}</p>
          
          <ul className={styles.achievementList}>
            <li>{t('viasat.admin')}</li>
            <li>{t('viasat.manuals')} (<a href="https://viasat.com.ua/uploads/files/connection_instruction.pdf" target="_blank" rel="noreferrer">{t('viasat.linking device')}</a>, <a href="https://viasat.com.ua/userfiles/files/doc/Instrukcia-BOT.pdf" target="_blank" rel="noreferrer">{t('viasat.viber bot')}</a>, {t('viasat.personal')}, {t('viasat.post')})</li>
            <li>{t('viasat.ivr')}</li>
            <li>{t('viasat.announcements')} ({t('viasat.examples')}: "<a href="https://viasat.com.ua/announcement/9061" target="_blank" rel="noreferrer">{t('viasat.Bold Type')}</a>", "<a href="https://viasat.com.ua/announcement/8983" target="_blank" rel="noreferrer">{t('viasat.Forgotten engineering')}</a>")</li>
            <li>{t('viasat.posts')} ({t('viasat.examples')}: "<a href="https://www.facebook.com/Viasat.TVGuide/posts/pfbid02CapnZ2WdPCsdQJSqfg4o66dHwKBwbkQ3rDTFrRAQDP58ekL8MsEU4fMpD7znybcml?__cft__[0]=AZWm6NVKIHWIvscd2QP-4xpQpGHa0T4jmEVKhKSLL2BQwW50krWWfVzrLP98j6rp1L_23Xhsu_EpC4kAn_5mEQmrvHtf08_mblyjC3ciZ-tY7jlaqIPauyFqa7bSVoE1xTs&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">{t('viasat.Time loop')}</a>", "<a href="https://www.facebook.com/Viasat.TVGuide/posts/pfbid03LGzJYQ3jfGadqQdDP6NzN7ieY66dQFMGfU5z8wp7vLZedH1LoZThRnoG2D2d9Xnl?__cft__[0]=AZXnKBxLR1MWriqfO9-hvvmjdXKaHQ6Od2XcLZ-PmEsP1LrROM3BBDJFbhFz8CrjAcY4qhLgceo_Uzk3SNAFsP7mi1Bmv3a_PHfKWbCbiJQkybRJTXm-hg9yGXJoD-IxP7d2kSbdBd9qu9wQO4fS9iLr&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">{t('viasat.Amnesia')}</a>")</li>
            <li>{t('testing product')}</li>
          </ul>
        </Container>
      </Container>

<Container className={styles.promoBlock}>
  <Container className={styles.videoZone}>
    <div className={styles.promoVideoContainer}>
      <img className={styles.projectImage} src={imgVodafone} alt={"Vodafone"} />
    </div>
  </Container>
  <Container className={styles.promoText}>
    <h3 className={styles.promoTitle}>Vodafone</h3>

    <p>{t('vodafone.description')}</p>
    
    <ul className={styles.achievementList}>
      <li>{t('vodafone.admin')}</li>
      <li>{t('vodafone.testing site')}</li>
      <li>{t('vodafone.seo')}</li>
      <li>{t('vodafone.gtm')}</li>
      <li>{t('vodafone.analytics')}</li>
      <li>{t('vodafone.manuals')}</li>
    </ul>
  </Container>
</Container> 

      <Container className={styles.promoBlock}>
        <Container className={styles.videoZone}>
          <div className={styles.promoVideoContainer}>
            <img className={styles.projectImage} src={imgYellowPlane} alt={"Yellow Plane"} />
          </div>
        </Container>
        <Container className={styles.promoText}>
          <h3 className={styles.promoTitle}>Yellow Plane</h3>

          <p>{t('yp.description')}</p>
          
          <ul className={styles.achievementList}>
            <li>{t('yp.admin')}</li>
            <li>{t('yp.content')} ({t('yp.events')}: <a href="https://yellowplane.ua/banketi-i-fursheti/" target="_blank" rel="noreferrer">{t('yp.Banquets')}</a>, <a href="https://yellowplane.ua/konferentsiyi-i-seminary/" target="_blank" rel="noreferrer">{t('yp.Conferences and seminars')}</a>)</li>
            <li>{t('testing product')}</li>
            <li>{t('yp.social')}</li>
            <li>{t('yp.banners')}</li>
          </ul>
        </Container>
      </Container>

      <Container className={styles.promoBlock}>
        <Container className={styles.videoZone}>
          <div className={styles.promoVideoContainer}>
            <img className={styles.projectImage} src={imgBorscht} alt={"Borscht.nl"} />
          </div>
        </Container>
        <Container className={styles.promoText}>
          <h3 className={styles.promoTitle}>Borscht.nl</h3>

          <p>{t('borscht.description')}</p>
          
          <ul className={styles.achievementList}>
            <li>{t('borscht.admin')}</li>
            <li>{t('borscht.content')} ({t('borscht.for example')}, <a href="https://borscht.nl/en/product/ukrainian-borscht/" target="_blank" rel="noreferrer">{t('borscht.Borscht')}</a>, <a href="https://borscht.nl/ua/product/mlynczi-z-myasom/" target="_blank" rel="noreferrer">{t('borscht.Pancakes with chicken')}</a>)</li>
            <li>{t('testing product')}</li>
          </ul>
        </Container>
      </Container>

      <Container className={styles.promoBlock}>
        <Container className={styles.videoZone}>
          <div className={styles.promoVideoContainer}>
            <img className={styles.projectImage} src={imgTascombank} alt={"Tascombank"} />
          </div>
        </Container>
        <Container className={styles.promoText}>
          <h3 className={styles.promoTitle}>Tascombank</h3>

          <p>{t('tascombank.description')} <a href="https://tascombank.ua" target="_blank" rel="noreferrer">tascombank.ua</a>, <a href="https://tas24b.ua/" target="_blank" rel="noreferrer">TAS24 {t('tascombank.for business')}</a>, <a href="https://private.tascombank.ua/" target="_blank" rel="noreferrer">private banking</a>{t('tascombank.etc')}</p>
          
          <ul className={styles.achievementList}>
            <li>{t('tascombank.tech support')} (React.js)</li>
            <li>{t('tascombank.admin')}</li>
            <li>{t('tascombank.content')} (<a href="https://tascombank.ua/you/cards/very_card" target="_blank" rel="noreferrer">Very Card</a>)</li>
            <li>{t('tascombank.calculators')}</li>
            <li>{t('tascombank.manuals')}</li>
            <li>{t('testing product')}</li>
          </ul>
        </Container>
      </Container> 

      <Container className={styles.promoBlock}>
        <Container className={styles.videoZone}>
          <div className={styles.promoVideoContainer}>
            <img className={styles.projectImage} src={imgWetronic} alt={"WeTronic"} />
          </div>
        </Container>
        <Container className={styles.promoText}>
          <h3 className={styles.promoTitle}>Wetronic</h3>

          <p>{t('wetronic.description')}</p>
          
          <ul className={styles.achievementList}>
            <li>{t('wetronic.frontend')} (JS, PHP, HTML/CSS (Gulp) )</li>
            <li>{t('wetronic.admin')}</li>
            <li>{t('testing product')}</li>
          </ul>
        </Container>
      </Container> 
    </Container>
  )
}
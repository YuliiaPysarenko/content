import { React, useContext } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import Container from "../../components/Container/Container";
import { useTranslation } from 'react-i18next';
import { ThemeContext, getThemeProps } from '../../components/ThemeProvider';
import "react-vertical-timeline-component/style.min.css";
import sprite from "../../assets/images/common-sprite.svg";
import styles from "./History.module.scss";

const Note = () => {
  return (
    <svg className={styles.historyIcon}>
      <use href={`${sprite}#icon-calendar`}></use>
    </svg>
  );
};

export default function History() {
  const [{theme}] = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
  <>
  <h2 className={styles.historyTitle}>{t('Why?')}</h2>
    <Container className={styles.historyContainer}>
      <Container className={styles.history}>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2004 - 2011"
            iconStyle={getThemeProps(theme, "backgroundColor", "color")}
            contentStyle={{
              background: "transparent",
              color: theme.color,
              border: "5px solid #fff",
            }}
            contentArrowStyle={{ borderRight: `15px solid #fff` }}
            icon={<Note />}
          >
            <h3 className="vertical-timeline-element-title">{t('StoryTitle1')}</h3>
            <p>
              {t('Story1')}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "transparent",
              color: theme.color,
              border: "5px solid #fff",
            }}
            contentArrowStyle={{ borderRight: `15px solid #fff` }}
            date="2012 - 2017"
            iconStyle={getThemeProps(theme, "backgroundColor", "color")}
            icon={<Note />}
          >
            <h3 className="vertical-timeline-element-title">{t('StoryTitle2')}</h3>
            <p>
              {t('Story2')}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2018"
            iconStyle={getThemeProps(theme, "backgroundColor", "color")}
            contentStyle={{
              background: "transparent",
              color: theme.color,
              border: "5px solid #fff",
            }}
            contentArrowStyle={{ borderRight: `15px solid #fff` }}
            icon={<Note />}
          >
            <h3 className="vertical-timeline-element-title">{t('StoryTitle3')}</h3>
            <p>
              {t('Story3')}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2019"
            iconStyle={getThemeProps(theme, "backgroundColor", "color")}
            contentStyle={{
              background: "transparent",
              color: theme.color,
              border: "5px solid #fff",
            }}
            contentArrowStyle={{ borderRight: `15px solid #fff` }}
            icon={<Note />}
          >
            <h3 className="vertical-timeline-element-title">{t('StoryTitle4')}</h3>
            <p>
              {t('Story4')}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2022"
            iconStyle={getThemeProps(theme, "backgroundColor", "color")}
            contentStyle={{
              background: "transparent",
              color: theme.color,
              border: "5px solid #fff",
            }}
            contentArrowStyle={{ borderRight: `15px solid #fff` }}
            icon={<Note />}
          >
            <h3 className="vertical-timeline-element-title">{t('StoryTitle5')}</h3>
            <p>
              {t('Story5a')}
                <a href="https://www.vaccinationsopreis.nl" target="_blank">Vaccinaties op Reis</a>, <a href="https://www.vodafone.ua" target="_blank">Vodafone UA</a>, <a href="https://u-lead.org.ua/" target="_blank">U-Lead</a>.
              {t('Story5b')}
                <a href="https://www.export.gov.ua" target="_blank">Diia. Business</a>
              {t('Story5c')}
                <a href="https://www.export.gov.ua" target="_blank">Diia. Business</a>, <a href="https://www.viasat.ua" target="_blank">Viasat</a>, <a href="https://u-lead.org.ua/" target="_blank">U-Lead</a>
              {t('Story5d')}
                <a href="https://www.flyuia.com" target="_blank">UIA</a>, <a href="https://ryaba.ua/" target="_blank">Nasha Ryaba</a>, <a href="https://shellsmart.com.ua/" target="_blank">Shell Smart</a>, <a href="https://www.duyvis.nl/" target="_blank">Duyvis</a> (NL), <a href="https://looza.be/" target="_blank">Looza</a> (FR), <a href="https://www.yellowplane.ua/" target="_blank">Yellow Plane</a>.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - 2022"
            iconStyle={getThemeProps(theme, "backgroundColor", "color")}
            contentStyle={{
              background: "transparent",
              color: theme.color,
              border: "5px solid #fff",
            }}
            contentArrowStyle={{ borderRight: `15px solid #fff` }}
            icon={<Note />}
          >
            <h3 className="vertical-timeline-element-title">{t('StoryTitle6')}</h3>
            <p>
              {t('Story6a')}
                <a href="https://www.tascombank.ua" target="_blank">Tascombank</a>
              {t('Story6b')}
                <a href="https://www.wetronic.nl" target="_blank">WeTronic</a>
              {t('Story6c')}
                <a href="https://www.vodafone.ua" target="_blank">Vodafone</a>
              {t('Story6d')}
                <a href="https://borscht.nl/" target="_blank">Borscht.nl</a> (UA, EN)
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </Container>
    </Container>
  </>
  );
}

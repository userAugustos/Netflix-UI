import React from 'react';

import { Container, VideoAd, TextAd, Card } from './styles';

import { Icon } from "react-icons-kit";
import { ic_vertical_align_bottom } from 'react-icons-kit/md/ic_vertical_align_bottom';

import Tv from '../../images/tab-tv.png';
import Mobile from '../../images/mobile-stranger-things.jpg';
import Desktop from "../../images/device-pile.png";
import BoxShot from "../../images/boxshot-stranger-things.png";
import Tvideo from '../../images/video-tab-tv.m4v';
import DeviceVideo from '../../images/video-devices.m4v';

function Advertisement() {
  function CardMobile(props){
    return(
      <Card>
        <img src={BoxShot} alt="" className="image"/>
        <div>
          <strong>Stranger Things</strong>
          <span>Download</span>
        </div>
        <Icon icon={ic_vertical_align_bottom} size="22px"/>
      </Card>
    );
  }
  function AnnouncementBox(props) {
    return(
      <>
      <TextAd>
        <h1>{props.title}</h1>
        <h3>{props.text}</h3>
      </TextAd>
      <VideoAd isDesktop={props.isDesktop}>
        <img src={props.image} alt=""/>
        {props.isMobile ? <CardMobile image={props.image} /> : ''}
        {props.hasVideo ? <video autoPlay muted > <source src={props.video}/> </video> : '' }
      </VideoAd>
      </>
    );
  }
  return(
    <>
    <Container >
      <AnnouncementBox title="Aproveite na TV." text="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros aparelhos." image={Tv} hasVideo  video={Tvideo}/>
    </Container>
    <Container reverse>
      <AnnouncementBox title="Baixe séries para assistir offline." text="Salve seus títulos favoritos e sempre tenha algo para assistir." image={Mobile} isMobile />
    </Container>
    <Container>
      <AnnouncementBox title="Assista quando quiser." text="Assista no celular, tablet, smart TV ou notebook sem pagar a mais por isso." image={Desktop} hasVideo video={DeviceVideo} isDesktop />
    </Container>
    </>
  );
}

export default Advertisement;
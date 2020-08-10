import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import features from './headlines.json';
import {
  Section,
  Banner,
  Stories,
  Story,
  TextBlock,
  Text,
  LightCta,
  SectionTitle,
  SectionHeader,
  Hero
} from '@algolia/ui-library';

const dataTrending = [
  {
    "title": "Palm oil fuel",
    "imageUrl": "img/home/bahanBakarMinyak.png",
    "link":'/trend',
    "description": `PT Pertamina (Persero) focuses on developing the production of environmentally friendly fuels or green energy. In addition to protecting the environment, the development of environmentally friendly energy is encouraged to reduce dependence on fossil fuels, whose reserves are depleting. 
    Crude palm oil (CPO) is one of the main renewable energy (EBT) commodities used by Pertamina to substitute fossil fuels and produce environmentally friendly energy.`
  }
]
function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Trending({imageUrl, title, description, link}){
  return (
    <Story
      image={imageUrl}
      reverse={false}
    >
      <TextBlock label={title} color="black">
        <Text>
          {description}
        </Text>
        <LightCta href={link}>Show More</LightCta>
      </TextBlock>
    </Story>
  )
}
function PointStory(data) {
  let story = data.data;
  return ( 
    <Stories
      reverse={false}
      alternate={true}
  >
    {story.map((item, index) => (
      <Story
        key={index}
        image={item.imageUrl}
      >
        <TextBlock
          label={item.title}
          title={''}
          color="nebula"
        >
          <Text>
           {item.description}
          </Text>
          <LightCta href={item.link}>Show More</LightCta>
        </TextBlock>
      </Story>
    ))}
  </Stories>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">       
      <div className={styles.bannerBackColor}>
        <Section background="transparent" noPaddingBottom noPaddingTop>
        <Banner
          className="uil-m-auto uil-maw-1200"
          button="Explore"
          href="#"
          image={`img/home/palmBanner.png`}
          subtitle={siteConfig.tagline}
          theme="mars"
          title={siteConfig.title}
        />
        </Section>
      </div>
      <div className={styles.headlinesBackColor}>
        <Section background="transparent">
          <SectionHeader title="Headlines" align="left">
            some important things that will be discussed in this documentation
          </SectionHeader>
          <PointStory data={features}></PointStory>        
        </Section >
      </div>
      <div className={styles.trendBackColor}>
        <Section background="transparent">
          <SectionHeader title="Trending" align="left">
            Hot news about palm oil
          </SectionHeader>
          <Trending {...dataTrending[0]}></Trending>        
        </Section >
      </div>      
    </Layout>
  );
}

export default Home;

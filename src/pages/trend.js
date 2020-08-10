import React, { Component } from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import {
  TextBlocksGrid,
  TextBlock,
  Hero,
  Section,
  SectionTitle,
  SectionHeader,
  SectionSubtitle,
  Text,
  Input,
} from '@algolia/ui-library';
import trendData from './trendData.json';
import TrendItem from './trendItem';

class Trending extends Component {
  constructor() {
    super();
    this.state = {
      newsList : trendData,
      searchNews : '',
    };
    this.onChangeForm = this.onChangeForm.bind(this);
  }

  componentWillMount() {
  }

  onChangeForm(data){
    let {newsList} = this.state;
    let tempList = [];
    const {value, name} = data.target;
    if(value != ''){
      newsList.map(item =>{
        let exist = item.title.toLowerCase().includes(value.toLowerCase());
        if(exist){
          tempList.push(item);
        }
      });
     
    } else {
      tempList = trendData;
    }
    this.setState({
      searchNews : value,
      newsList : tempList
    })
  }
  
  render() {
    const {newsList, searchNews} = this.state;
    return (
      <Layout title="Trending">
        <div className={styles.backBannerTrend}>
          <Hero
            background={'bubbles'}
            padding="small"
            title={""}
          >
            <div className={styles.childHero}>
              <div>
                <SectionTitle className={styles.titleBannerTrend}>Trend News</SectionTitle>
                <SectionSubtitle className={styles.titleBannerTrend}>Hot news about making fuel using Palm Oil</SectionSubtitle>
                <input
                  type='text'
                  placeholder="🔍 Search news . . ."
                  onChange={this.onChangeForm}
                  className={styles.searchNews}    
                  name="searchNews" 
                  value={searchNews}            
                />
              </div>
              <div className={styles.childHeroRight}>
                <img src={"img/home/bahanBakarMinyak.png"} className={styles.imgBannerTrend} />
              </div>
            </div>
          </Hero>
        </div>
        <div className={styles.backTrendList}>
          <Section background="transparent" noPaddingBottom noPaddingTop className={styles.sectionListTrend}>
          {newsList.length > 0 ? newsList.map((item,index) => (
            <TrendItem
              key={index}
              link={item.link}
              title={item.title}
              description={item.description}>
            </TrendItem>
          )):(
            <SectionSubtitle className={styles.noDataFound}>No Data Found</SectionSubtitle>
          )}
          </Section>
        </div>
      </Layout>

    );
  }

}
export default Trending;

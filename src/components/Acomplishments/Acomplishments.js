import React from 'react';
// import { ExternalLinks } from './AcomplishmentsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, BoxTextBulletPoints } from './AcomplishmentsStyles';
import Button from '../../styles/GlobalComponents/Button';
const data = [
  { number: 5, text: 'Open Source Projects'},
  
];
const coding_profile = [
  { rank: '3 * rating', text: 'CODECHEF', rating: 'Contest Rating: 1638', profile: 'https://www.codechef.com/users/bravura_coder'},
  { rank: '3 * rating', text: 'LEETCODE', rating: 'Contest Rating: 1371', profile: 'https://leetcode.com/mihir_adarsh/'},
  { rank: '5 * rating', text: 'HACKERRANK', rating: 'College Rank: 18', profile: 'https://leetcode.com/mihir_adarsh/'}
];
const application = [
  {name: 'IIC Android App', downloads_number: "100+", live: "Google Play Store", link: "https://play.google.com/store/apps/details?id=com.sit.adarsh.iic"}
];
// const leetcode = [
//   { number: 3, text: 'Leetcode', rating: 'Contest Rating: 1371'}
// ];


const Acomplishments = () => (
  <Section id="accomplishments">
    <SectionDivider/>
    <br/>
    <SectionTitle>Achievements</SectionTitle>
    <Boxes>
      {/* {data.map((card, index) => (
        <Box key = {index}>
          <BoxNum>{card.number}*</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))} */}
      {coding_profile.map((card, index) => (
        <Box key = {index}>
          <BoxNum>{card.rank}</BoxNum>
          <BoxText>{card.text}</BoxText>
          <BoxTextBulletPoints><h3>{card.rating}</h3></BoxTextBulletPoints>
          {/* <ExternalLinks href = {card.profile}>{card.text}</ExternalLinks> */}
          {/* <Button size = "10dp" onClick = {() => window.location = 'https://drive.google.com/file/d/1QizbM0_7uadkyJh0s9lsz32DdzBUX3TT/view?usp=sharing'}>Download Resume</Button> */}
        </Box>
      ))}
      
    </Boxes>
    <Boxes>
    {application.map((card, index) => (
        <Box key = {index}>
          <BoxNum>{card.name}</BoxNum>
          <BoxText>{card.downloads_number} downloads</BoxText>
          {/* <BoxText><h3>Live on {card.live}</h3></BoxText> */}

          <BoxTextBulletPoints><br/><h3>Live on {card.live}</h3><br/></BoxTextBulletPoints>
          {/* <ExternalLinks href = {card.link}>{card.name}</ExternalLinks> */}
        </Box>
      ))}
      </Boxes>
  </Section>
);

export default Acomplishments;

import React from 'react';
import { AboutUsWrapper } from './AboutUs.styles';
import Layout from '../../Components/Layout/Layout';
import people from './../../assets/img/people.png';
import { Paragraph, Title } from '../../styles/Typography';
const AboutUs = () => {
  return (
    <Layout>
      <AboutUsWrapper>
        <div className='content'>
          <Title>Who we are?</Title>
          <Paragraph>
            <p>
              The Codigo Saurios Squad from the Universidad Centroamericana
              "José Simeón Cañas". We are a group of individuals that are not just colleagues but also close friends.
              We possess a passion for coding that extends beyond the classroom,
              often but too ofeten we spend time exploring Minecraft. When we are
              not immersed in lines of code or on minecraft, you can find us
              gathered together, enjoying pupusas.
            </p>

            <p>If you have any question you can reach us by our github:</p>
            <ul>
              <li>
                <a href='https://github.com/HeyChobe/' target='_blank'>HeyChobe</a>
              </li>
              <li>
                <a href='https://github.com/sugeyth02' target='_blank'>sugeyth02</a>
              </li>
              <li>
                <a href='https://github.com/00258219' target='_blank'>00258219</a>
              </li>
              <li>
                <a href='https://github.com/marioRodriguez6' target='_blank'>marioRodriguez6</a>
              </li>
            </ul>
          </Paragraph>
        </div>
        <img src={people} />
      </AboutUsWrapper>
    </Layout>
  );
};

export default AboutUs;

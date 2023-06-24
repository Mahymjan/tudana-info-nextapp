import { Background } from '../background/Background';
import { About } from '../about/About';
import { Section } from '../layout/Section';
import {useTranslation} from 'next-i18next'

const AboutSection = () => {
  const { t } = useTranslation()
  return (
    <div id='about'>
      <Background color='bg-sky-400'>
          <Section>
            <About
              title={ t('about_us_header')}
              description={'\n ' + t('about_us_def1') + '\n ' + t('about_us_def2')}
              image="/assets/images/fruit-juice.png"
              imageAlt="Second feature alt text"
            />
          </Section>
        </Background>
    </div>
  )
  
}

export { AboutSection };

import { ThemeProvider } from 'theme-ui';
import theme from '../theme/index';
import SEO from '../components/seo';
import Banner from '../sections/banner';
import Services from '../sections/services';
// import Testimonials from 'sections/testimonials';
// import OurTeam from 'sections/our-team';
// import OtherServices from 'sections/other-services';
// import WhyUs from 'sections/why-us';
import SubscribeUs from '../sections/subscribe-us';
// import Blog from 'sections/blog';
import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="AnalyticalMind Datalabs"
          description="AnalyticalMind Datalabs landing page"
        />
        <Banner />
        <Services />
        {/* <Testimonials /> */}
        {/* <OurTeam /> */}
        {/* <OtherServices /> */}
        {/* <WhyUs /> */}
        {/* <Blog /> */}
        <SubscribeUs />
      </Layout>
    </ThemeProvider>
  );
}

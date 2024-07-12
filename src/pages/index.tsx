import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <header className="text-center py-8">
        <div className="flex flex-col">
          <h1 className="text-white font-['Baloo_2'] md:text-[72px] text-[60px] font-black drop-shadow-md">
            {siteConfig.title}
          </h1>
          <p className="px-2 text-white text-xl md:text-2xl">{siteConfig.tagline}</p>
          <div className="mt-4">
            <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
              Getting started
            </Link>
          </div>
        </div>
      </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
      <>
        <Layout
            title={`Chibi Engine — Modern TypeScript 2D Web Game Engine`}
            description="Description will go into a meta tag in <head />">
          <div style={{background: "linear-gradient(0deg,#3586FF 0%,#68A4FF 100%) 0% 0% / 100% 100% repeat"}}>
            <HomepageHeader/>
            <main className="overflow-hidden flex flex-col">
              <div className="w-[3800px] h-24 self-center relative" style={{color: "var(--ifm-background-surface-color)"}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2730 1021" height="1em" width="1em"
                     className="absolute top-[-25px] block min-w-full w-auto object-cover h-[1546px]" role="img">
                  <ellipse cx="1365" cy="510.5" rx="1365" ry="510.5" fill="currentcolor"></ellipse>
                </svg>
              </div>
              <HomepageFeatures/>
            </main>
          </div>
        </Layout>
      </>
  );
}

import { LinkButton } from "@components/ui/interactive/link-button";
import { Container } from "@components/ui/structure/container";
import { Image } from "@components/ui/structure/image";
import { Heading } from "@components/ui/text/heading";
import { useClasses } from "@styles";

export function HomeView() {
  return (<>
    <Container className={useClasses('home-view')}>
      <Container className={useClasses('home-view-hero')}>
        <Container
          className={useClasses('home-view-hero-effect')}
          children={null}
        />

        <Container className={useClasses('home-view-hero-promo')}>
          <Image
            src="/logo.png"
            alt="Delivr Logo"
            className={useClasses("home-view-logo")}
          />

          <Heading size="max" className={useClasses('home-view-title')}>
            The Delivery Chaos Ends Here!
          </Heading>
        </Container>

        <Container className={useClasses('home-view-hero-actions')}>
          <LinkButton
            url="/legal"
            icon="PrivacyPolicyRegular"
            title="Legal Info"
            urlText=""
            newTab={false}
          />

          <LinkButton
            url={(window as any).downloadUrl}
            icon="RocketRegular"
            title="Start Using!"
            urlText="Download App"
          />
        </Container>
      </Container>
    </Container>
  </>);
}


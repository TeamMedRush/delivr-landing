import { PrivacyPolicy } from "@attaditya/iconoir-preact";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

export function LegalView() {
  return (<>
    <Container className={useClasses('legal-view')}>
      <Container className={useClasses("legal-view-header")}>
        <Container className={useClasses("legal-view-header-icon")}>
          <PrivacyPolicy />
        </Container>

        <Heading size="max">
          Legal Information
        </Heading>
      </Container>

      <Container className={useClasses("legal-view-content")}>
        <Container className={useClasses("legal-view-info-item")}>
          <Heading size="medium">
            Last Updated
          </Heading>

          <Text className={useClasses("legal-view-info-text")}>
            August 5, 2026
          </Text>
        </Container>

        <Container className={useClasses("legal-view-info-item")}>
          <Heading size="medium">
            Privacy Policy
          </Heading>

          <Text className={useClasses("legal-view-info-text")}>
            This legal information is still in drafting and shall be added soon.
          </Text>
        </Container>

        <Container className={useClasses("legal-view-info-item")}>
          <Heading size="medium">
            Terms of Use
          </Heading>

          <Text className={useClasses("legal-view-info-text")}>
            This legal information is still in drafting and shall be added soon.
          </Text>
        </Container>
      </Container>

      <Container
        className={useClasses("legal-view-filler")}
        children={null}
      />
    </Container>
  </>);
}


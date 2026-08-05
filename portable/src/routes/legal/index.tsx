import { Container } from "@components/ui/structure/container";
import { LegalView } from "@components/view/legal-view";
import { useClasses } from "@styles";
import { PageProps, useRouter } from "@utils/router";

function Layout() {
  return (<>
    <Container className={useClasses("legal-page")}>
      <LegalView />
    </Container>
  </>);
}

export function LegalPage({ forwarded } : PageProps) {
  return useRouter(forwarded, Layout, {});
}


import { Navbar } from "@components/block/navbar";
import { Container } from "@components/ui/structure/container";
import { ContentFrame } from "@components/ui/structure/content-frame";
import { Top } from "@components/ui/structure/top";
import { HomeView } from "@components/view/home-view";
import { ErrorView } from "@components/view/not-found-view";
import { PopupProvider } from "@contexts/popup";
import { UserProvider } from "@contexts/user";
import { LegalPage } from "@routes/legal";
import { useForwarded } from "@utils/path";
import { type LayoutProps, useRouter } from "@utils/router";

function Layout({
  forwarded = [],
  dynamic = "",
  children
}: LayoutProps) {
  let path = "";

  if (dynamic)
    path = `/${dynamic}`;

  if (forwarded?.length)
    path += `/${forwarded?.join('/')}`;

  return (<>
    <PopupProvider>
      <Container attributes={{ id: "main" }}>
        <ContentFrame>
          <Top />
          <Navbar path={path} />

          {!!children ? children : (
            !dynamic ? <HomeView /> : <ErrorView
              code={404}
              message={`Can't reach: ${path}`}
            />
          )}
        </ContentFrame>
      </Container>
    </PopupProvider>
  </>);
}

export function IndexPage() {
  return useRouter(useForwarded(), Layout, {
    "legal": LegalPage,
  });
}


import { useEffect, useRef, useState } from 'react';
import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
// import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
import Guestbook from '@/layout/Guestbook/Guestbook.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Main from '@/layout/Main/Main.tsx';

function App() {
  // const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
      <Container>
        <Wrapper>
          <Main />
        </Wrapper>
        <Wrapper>
          <Heading1>邀请辞</Heading1>
          <Invitation />
        </Wrapper>
        <Wrapper ref={galleryRef}>
          <Heading1>画廊</Heading1>
          <GalleryWrap />
        </Wrapper>
        {/*<Wrapper>*/}
        {/*  <Heading1>表达心意的地方</Heading1>*/}
        {/*  <Account />*/}
        {/*</Wrapper>*/}
        <Wrapper>
          <Heading1>来访路线</Heading1>
          <div>待实现</div>
        </Wrapper>
        <Wrapper>
          <Heading1>给新郎新娘的话</Heading1>
          <Guestbook />
        </Wrapper>
        <FloatingBar isVisible={isVisible} />
      </Container>
  );
}

export default App;

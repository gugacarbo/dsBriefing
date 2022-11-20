import { useEffect, useState } from "react";
import { SplashContainer, StyledLogo, StyledText } from "./Styled";

const MyComponent = () => {
  const [Loaded, setLoaded] = useState(0);
  const [CloseSplash, setCloseSplash] = useState(0);

  // This will run one time after the component mounts
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onPageLoad = () => {
      setLoaded(1);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  useEffect(() => {
    if (Loaded) {
      setTimeout(() => {
        setCloseSplash(1);
        document.body.style.overflowY = "scroll";
      }, 1500);
    }
  }, [Loaded]);

  return (
    <SplashContainer loaded={Loaded} done={CloseSplash}>
      <StyledLogo loaded={Loaded ? 1 : 0} />
      <StyledText loaded={Loaded ? 1 : 0} />
    </SplashContainer>
  );
};

export default MyComponent;

import ClientBriefingProvider from "./ClientBriefingContext/ClientBriefingProvider";
import BrandBriefingProvider from "./BrandBriefingContext/BrandBriefingProvider";
import TargetPublicBriefingProvider from "./TargetPublicBriefingContext/TargetPublicBriefingProvider";
import PersonalityBriefingProvider from "./PersonalityBriefingContext/PersonalityBriefingProvider";
import BudgetBriefingProvider from "./BudgetBriefingContext/BudgetBriefingProvider";
import StyleProvider from "./StyleContext/StyleProvider";

function AppContextProvider({ children }) {
  return (
    <StyleProvider>
      <BrandBriefingProvider>
        <TargetPublicBriefingProvider>
          <PersonalityBriefingProvider>
            <BudgetBriefingProvider>
              <ClientBriefingProvider>{children}</ClientBriefingProvider>
            </BudgetBriefingProvider>
          </PersonalityBriefingProvider>
        </TargetPublicBriefingProvider>
      </BrandBriefingProvider>
    </StyleProvider>
  );
}

export default AppContextProvider;

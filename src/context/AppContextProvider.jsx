import ClientBriefingProvider from "./ClientBriefingContext/ClientBriefingProvider";
import BrandBrandriefingProvider from "./BrandBrandriefingContext/BrandBrandriefingProvider";
import TargetPublicBriefingProvider from "./TargetPublicBriefingContext/TargetPublicBriefingProvider";
import PersonalityBriefingProvider from "./PersonalityBriefingContext/PersonalityBriefingProvider";
import BudgetBriefingProvider from "./BudgetBriefingContext/BudgetBriefingProvider";
import StyleProvider from "./StyleContext/StyleProvider";

function AppContextProvider({ children }) {
  return (
    <StyleProvider>
      <BrandBrandriefingProvider>
        <TargetPublicBriefingProvider>
          <PersonalityBriefingProvider>
            <BudgetBriefingProvider>
              <ClientBriefingProvider>{children}</ClientBriefingProvider>
            </BudgetBriefingProvider>
          </PersonalityBriefingProvider>
        </TargetPublicBriefingProvider>
      </BrandBrandriefingProvider>
    </StyleProvider>
  );
}

export default AppContextProvider;

import { useEffect, useState } from "react";

import BrandBrandriefingContextBrandBrandriefingProvider from "./index";
import { useStateTimer } from "../../util/Hooks";

export default ({ children }) => {
  useEffect(() => {
    const localBrandData = localStorage.getItem("BriefingBrandData");
    if (JSON.parse(localBrandData)) {
      setBrandFormData(JSON.parse(localBrandData));
    }
  }, []);

  const [brandFormData, setBrandFormData] = useState(DefaultBrandData);

  const handleSetBrandFormData = (data) => {
    if (data) {
      setBrandFormData(data);
      localStorage.setItem("BriefingBrandData", JSON.stringify(data));
    }
  };

  const brandFormDataTimer = useStateTimer(handleSetBrandFormData, 1200);

  const validateBrandForm = (values) => {
    let errors = {};
    Object.keys(values).map((value, index, array) => {
      if (values[value] == "") {
        errors[value] = "Obrigatório";
      }
    });

    brandFormDataTimer(values);
    return errors;
  };
  return (
    <BrandBrandriefingContextBrandBrandriefingProvider.Provider
      value={{
        brandFormData,
        validateBrandForm,
      }}
    >
      {children}
    </BrandBrandriefingContextBrandBrandriefingProvider.Provider>
  );
};

const DefaultBrandData = {
  brandName: "",
  brandSlogan: "",
  brandLocation: "",
  brandExpand: "",
  brandNameReason: "",
  brandBornReason: "",
  brandResume: "",
  brandTime: "",
  brandServices: "",
  brandDiferential: "",
  brandCompetitors: "",
  brandCompetitorsDiferential: "",
};

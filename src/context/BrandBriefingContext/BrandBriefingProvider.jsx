import { useEffect, useState } from "react";

import BrandBriefingContext from "./index";
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
      setBrandFormData({ ...DefaultBrandData, ...data });
      localStorage.setItem(
        "BriefingBrandData",
        JSON.stringify({ ...DefaultBrandData, ...data })
      );
    }
  };

  const brandFormDataTimer = useStateTimer(handleSetBrandFormData);

  function handleValidation(values) {
    brandFormDataTimer(values);
    return validateBrandForm(values);
  }

  return (
    <BrandBriefingContext.Provider
      value={{
        brandFormData,
        validateBrandForm: handleValidation,
        brandValidation: validateBrandForm,
      }}
    >
      {children}
    </BrandBriefingContext.Provider>
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

const validateBrandForm = (values) => {
  let errors = {};
  Object.keys(values).map((value, index, array) => {
    if (values[value] == "") {
      errors[value] = "Obrigatório";
    }
  });

  return errors;
};

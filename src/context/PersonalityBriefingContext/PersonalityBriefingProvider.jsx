import { useEffect, useState } from "react";

import PersonalityBriefingContext from "./index";
import { useStateTimer } from "../../util/Hooks";

export default ({ children }) => {
  useEffect(() => {
    const localPersonalityData = localStorage.getItem(
      "BriefingPersonalityData"
    );
    if (JSON.parse(localPersonalityData)) {
      setPersonalityFormData(JSON.parse(localPersonalityData));
    }
  }, []);

  const [personalityFormData, setPersonalityFormData] = useState(
    DefaultPersonalityData
  );

  const handleSetPersonalityFormData = (data) => {
    if (data) {
      setPersonalityFormData(data);
      localStorage.setItem("BriefingPersonalityData", JSON.stringify(data));
    }
  };

  const personalityFormDataTimer = useStateTimer(
    handleSetPersonalityFormData,
    1200
  );

  const validatePersonalityForm = (values) => {
    let errors = {};
    if (values.brandCaracteristics.length < 3) {
      errors.brandCaracteristics = "Selecione Pelo Menos 3";
    }
    if (
      values.brandCaracteristics.includes("Outro") &&
      !values.brandCaracteristicsOtherVal
    ) {
      errors.brandCaracteristicsOtherVal = "Digite a Opção";
    }

    if (!values.brandTopCaracteristics) {
      errors.brandTopCaracteristics = "Obrigatório";
    }
    if (!values.brandNotCaracteristics) {
      errors.brandNotCaracteristics = "Obrigatório";
    }
    if (!values.brandColor) {
      errors.brandColor = "Obrigatório";
    }
    if (!values.brandNotColor) {
      errors.brandNotColor = "Obrigatório";
    }
    if (!values.competitorsReference) {
      errors.competitorsReference = "Obrigatório";
    }
    personalityFormDataTimer(values);
    return errors;
  };
  return (
    <PersonalityBriefingContext.Provider
      value={{
        personalityFormData,
        validatePersonalityForm,
      }}
    >
      {children}
    </PersonalityBriefingContext.Provider>
  );
};

const DefaultPersonalityData = {
  brandCaracteristics: [],
  brandCaracteristicsOtherVal: "",
  brandTopCaracteristics: "",
  brandNotCaracteristics: "",
  brandColor: "",
  brandNotColor: "",
  competitorsReference: "",
};

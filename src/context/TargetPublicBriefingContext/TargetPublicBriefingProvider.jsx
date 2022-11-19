import { useEffect, useState } from "react";

import TargetPublicBriefingContext from "./index";
import { useStateTimer } from "../../util/Hooks";

export default ({ children }) => {
  useEffect(() => {
    const localTargetPublicData = localStorage.getItem(
      "BriefingTargetPublicData"
    );
    if (JSON.parse(localTargetPublicData)) {
      setTargetPublicFormData(JSON.parse(localTargetPublicData));
    }
  }, []);

  const [targetPublicFormData, setTargetPublicFormData] = useState(
    DefaultTargetPublicData
  );

  const handleSetTargetPublicFormData = (data) => {
    if (data) {
      setTargetPublicFormData(data);
      localStorage.setItem("BriefingTargetPublicData", JSON.stringify(data));
    }
  };

  const targetPublicFormDataTimer = useStateTimer(
    handleSetTargetPublicFormData,
    1200
  );

  const validateTargetPublicForm = (values) => {
    let errors = {};
    if (!values.clientType) {
      errors.clientType = "Selecione Um";
    }
    if (!values.clientGender) {
      errors.clientGender = "Selecione";
    }

    if (values.clientGender == "Outro" && values.clientGenderOtherVal == "") {
      errors.clientGender = "*";
      errors.clientGenderOtherVal = "Digite A Opção";
    }

    if (!values.targetPublicDescription) {
      errors.targetPublicDescription = "Obrigatório";
    }
    if (!values.targetPublicHopeDescription) {
      errors.targetPublicHopeDescription = "Obrigatório";
    }
    if (!values?.targetPublicAge?.[0] || !values?.targetPublicAge?.[1]) {
      errors.targetPublicAge = "Selecione";
    }
    if (values.clientPurchasingPower == 0) {
      errors.clientPurchasingPower = "Selecione";
    }
    targetPublicFormDataTimer(values);
    return errors;
  };
  return (
    <TargetPublicBriefingContext.Provider
      value={{
        targetPublicFormData,
        validateTargetPublicForm,
      }}
    >
      {children}
    </TargetPublicBriefingContext.Provider>
  );
};

const DefaultTargetPublicData = {
  clientType: "",
  clientGender: "",
  clientGenderOtherVal: "",
  targetPublicDescription: "",
  clientPurchasingPower: 0,
  targetPublicHopeDescription: "",
  targetPublicAge: [],
};

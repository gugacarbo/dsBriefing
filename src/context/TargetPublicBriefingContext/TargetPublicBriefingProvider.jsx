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
      setTargetPublicFormData({
        ...DefaultTargetPublicData,
        ...data,
      });
      localStorage.setItem(
        "BriefingTargetPublicData",
        JSON.stringify({
          ...DefaultTargetPublicData,
          ...data,
        })
      );
    }
  };

  const targetPublicFormDataTimer = useStateTimer(
    handleSetTargetPublicFormData
  );

  function handleValidation(values) {
    targetPublicFormDataTimer(values);
    return validateTargetPublicForm(values);
  }

  return (
    <TargetPublicBriefingContext.Provider
      value={{
        targetPublicFormData,
        validateTargetPublicForm: handleValidation,
        targetPublicValidation: validateTargetPublicForm,
      }}
    >
      {children}
    </TargetPublicBriefingContext.Provider>
  );
};

const DefaultTargetPublicData = {
  targetPublicType: "",
  targetPublicGender: "",
  targetPublicGenderOtherVal: "",
  targetPublicDescription: "",
  targetPublicPurchasingPower: 0,
  targetPublicHopeDescription: "",
  targetPublicAge: [],
};
const validateTargetPublicForm = (values) => {
  let errors = {};
  if (!values.targetPublicType) {
    errors.targetPublicType = "Selecione Um";
  }
  if (!values.targetPublicGender) {
    errors.targetPublicGender = "Selecione";
  }

  if (
    values.targetPublicGender == "Outro" &&
    values.targetPublicGenderOtherVal == ""
  ) {
    errors.targetPublicGender = "*";
    errors.targetPublicGenderOtherVal = "Digite A Opção";
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
  if (
    !values.targetPublicPurchasingPower ||
    values.targetPublicPurchasingPower == 0
  ) {
    errors.targetPublicPurchasingPower = "Selecione";
  }
  return errors;
};

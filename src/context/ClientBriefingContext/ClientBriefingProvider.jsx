import { useEffect, useState } from "react";

import ClientBriefingContext from "./index";
import { useStateTimer } from "../../util/Hooks";

export default ({ children }) => {
  useEffect(() => {
    const localClientData = localStorage.getItem("BriefingClientData");
    if (JSON.parse(localClientData)) {
      setClientFormData(JSON.parse(localClientData));
    }
  }, []);

  const [clientFormData, setClientFormData] = useState(DefaultClientData);

  const handleSetClientFormData = (data) => {
    if (data) {
      setClientFormData(data);
      localStorage.setItem("BriefingClientData", JSON.stringify(data));
    }
  };

  const clientFormDataTimer = useStateTimer(handleSetClientFormData, 1200);

  const validateClientForm = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Digite Seu Nome";
    }

    if (!values.email) {
      errors.email = "Digite Seu Email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email Inválido";
    }

    if (!values.clientOffice) {
      errors.clientOffice = "Obrigatório";
    }

    if (!values.brandGoal) {
      errors.brandGoal = "Selecione Um";
    }

    if (values.brandGoal == "Outro" && values.brandGoalOtherVal == "") {
      errors.brandGoal = "*";
      errors.brandGoalOtherVal = "Digite a Opção";
    }
    if (values.dsMeet == "Outro" && values.dsMeetOtherVal == "") {
      errors.dsMeet = "*";
      errors.dsMeetOtherVal = "Digite a Opção";
    }

    if (!values.dsMeet) {
      errors.dsMeet = "Selecione Um";
    }
    clientFormDataTimer(values);
    return errors;
  };

  return (
    <ClientBriefingContext.Provider
      value={{
        clientFormData,
        validateClientForm,
      }}
    >
      {children}
    </ClientBriefingContext.Provider>
  );
};

const DefaultClientData = {
  name: "",
  email: "",
  phone: "",
  clientOffice: "",
  brandGoal: "",
  brandGoalOtherVal: "",
  dsMeet: "",
  dsMeetOtherVal: "",
};

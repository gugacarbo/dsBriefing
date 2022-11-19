import { useEffect, useState } from "react";

import BudgetBriefingContext from "./index";
import { useStateTimer } from "../../util/Hooks";

export default ({ children }) => {
  useEffect(() => {
    const localBudgetData = localStorage.getItem("BriefingBudgetData");
    if (JSON.parse(localBudgetData)) {
      setBudgetFormData(JSON.parse(localBudgetData));
    }
  }, []);

  const [budgetFormData, setBudgetFormData] = useState(DefaultBudgetData);

  const handleSetBudgetFormData = (data) => {
    if (data) {
      setBudgetFormData({
        ...DefaultBudgetData,
        ...data,
      });
      localStorage.setItem("BriefingBudgetData", JSON.stringify(data));
    }
  };

  const budgetFormDataTimer = useStateTimer(handleSetBudgetFormData, 1200);

  const validateBudgetForm = (values) => {
    let errors = {};
    if (!values.todayBudget || values.todayBudget == 0) {
      errors.todayBudget = "Selecione";
    }
    if (!values.futureBudget || values.futureBudget == 0) {
      errors.futureBudget = "Selecione";
    }
    if (values.hurry == '') {
      errors.hurry = "Selecione";
    }
    budgetFormDataTimer(values);
    
    return errors;
  };
  return (
    <BudgetBriefingContext.Provider
      value={{
        budgetFormData,
        validateBudgetForm,
      }}
    >
      {children}
    </BudgetBriefingContext.Provider>
  );
};

const DefaultBudgetData = {
  todayBudget: 0,
  futureBudget: 0,
  hurry: "",
};

import { createContext } from "react";

const BudgetBriefingContext = createContext({
  budgetFormData: {},
  setBudgetFormData: () => {},
  validateBudgetForm: () => {},
});

export default BudgetBriefingContext;

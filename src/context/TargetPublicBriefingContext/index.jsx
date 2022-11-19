import { createContext } from "react";

const TargetPublicBriefingContext = createContext({
  targetPublicFormData: {},
  setTargetPublicFormData: () => {},
  validateTargetPublicForm: () => {},
});

export default TargetPublicBriefingContext;

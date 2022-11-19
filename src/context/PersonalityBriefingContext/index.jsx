import { createContext } from "react";

const PersonalityBriefingContext = createContext({
  personalityFormData: {},
  setPersonalityFormData: () => {},
  validatePersonalityForm: () => {},
});

export default PersonalityBriefingContext;

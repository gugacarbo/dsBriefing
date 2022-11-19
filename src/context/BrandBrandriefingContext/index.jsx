import { createContext } from "react";

const BrandBrandriefingContext = createContext({
  brandFormData: {},
  setBrandFormData: () => {},
  validateBrandForm: () => {},
});

export default BrandBrandriefingContext;

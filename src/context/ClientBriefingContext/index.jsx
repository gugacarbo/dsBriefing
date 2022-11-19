import { createContext } from "react";

const ClientBriefingContext = createContext({
  clientFormData: {},
  setClientFormData: () => {},
  validateClientForm: () => {},
});

export default ClientBriefingContext;

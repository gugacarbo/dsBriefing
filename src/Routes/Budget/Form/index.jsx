import { Formik } from "formik";
import styled from "styled-components";

import { StyledForm } from "../../../components/Styled";
import Buttons from "../../../components/Buttons";
import Range from "../../../components/Range";
import Radio from "../../../components/Radio";
import Text from "../../../components/Text";
import Rating from "../../../components/Rating";

function Form() {
  return (
    <FormContainer>
      <Formik
        initialValues={{
          clientType: "",
          clientGender: "",
          targetPublicDescription: "",
          clientPurchasingPower: 0,
          targetPublicHopeDescription: "",
          targetPublicAge: [],
        }}
        validate={(values) => {
          let errors;
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setValues,
          setFieldValue,

          /* and other goodies */
        }) => (
          <BudgetForm onSubmit={handleSubmit}>
            <Rating
              title="NUMA ESCALA DE 1 A 5, QUANTO A SUA EMPRESA EM INVESTE EM MARKETING HOJE?"
              required
              value={values.todayBudget}
              onChange={setFieldValue}
              name="todayBudget"
            />
            <Rating
              title="NUMA ESCALA DE 1 A 5, QUANTO A SUA EMPRESA PRETENDE INVESTIR?"
              required
              value={values.futureBudget}
              onChange={setFieldValue}
              name="futureBudget"
            />
            <Radio
              name="hurry"
              title="VOCÊ TEM PRESSA PARA O SEU PROJETO?"
              required={true}
              other={false}
              options={[
                ["Sim", "Sim"],
                ["Não", "Nao"],
              ]}
            />
          </BudgetForm>
        )}
      </Formik>
      <Buttons back="/personalidade" to="/" />
    </FormContainer>
  );
}

const BudgetForm = styled(StyledForm)`
  grid-template-areas: "todayBudget todayBudget" " futureBudget futureBudget" " hurry .";
`;
const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Form;

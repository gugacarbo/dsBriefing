import { Formik } from "formik";
import styled from "styled-components";

import { StyledForm } from "../../../components/Styled";
import Buttons from "../../../components/Buttons";
import Range from "../../../components/Range";
import Radio from "../../../components/Radio";
import Text from "../../../components/Text";
import Rating from "../../../components/Rating";
import BudgetBriefingContext from "../../../context/BudgetBriefingContext";
import { useContext } from "react";
function Form() {
  const { budgetFormData, validateBudgetForm } = useContext(
    BudgetBriefingContext
  );
  return (
    <FormContainer>
      <Formik
        initialValues={budgetFormData}
        enableReinitialize={true}
        validate={validateBudgetForm}
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
          validateForm,

          /* and other goodies */
        }) => (
          <BudgetForm onSubmit={handleSubmit}>
            <Rating
              title="NUMA ESCALA DE 1 A 5, QUANTO A SUA EMPRESA EM INVESTE EM MARKETING HOJE?"
              required
              value={values.todayBudget}
              onChange={setFieldValue}
              name="todayBudget"
              error={errors.todayBudget}
            />
            <Rating
              title="NUMA ESCALA DE 1 A 5, QUANTO A SUA EMPRESA PRETENDE INVESTIR?"
              required
              value={values.futureBudget}
              onChange={setFieldValue}
              name="futureBudget"
              error={errors.futureBudget}
            />
            <Radio
              name="hurry"
              title="VOCÊ TEM PRESSA PARA O SEU PROJETO?"
              required={true}
              error={errors.hurry}
              options={[
                ["Sim", "Sim"],
                ["Não", "Nao"],
              ]}
            />
            <Buttons
              back="/personalidade"
              to="/"
              onClick={handleSubmit}
              errors={errors}
              validateForm={validateForm}
            />
          </BudgetForm>
        )}
      </Formik>
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

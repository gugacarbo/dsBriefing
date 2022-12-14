import { Formik } from "formik";
import styled from "styled-components";
import Buttons from "../../../components/Buttons";
import Radio from "../../../components/Radio";
import { StyledForm } from "../../../components/Styled";
import Text from "../../../components/Text";
import InputMask from "react-input-mask";
import { useContext } from "react";
import ClientBriefingContext from "../../../context/ClientBriefingContext";
function Form() {
  const { clientFormData, validateClientForm } = useContext(
    ClientBriefingContext
  );
  return (
    <FormContainer>
      <Formik
        initialValues={clientFormData}
        enableReinitialize={true}
        validate={validateClientForm}
        onSubmit={(values, { setSubmitting, ...rest }) => {
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
          validateForm,

          /* and other goodies */
        }) => (
          <AboutYouForm onSubmit={handleSubmit}>
            <Text
              title="NOME"
              type="text"
              name="name"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={errors.name}
              touched={touched.name}
            />

            <Text
              title="EMAIL"
              type="email"
              name="email"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email}
              touched={touched.email}
            />
            <Text
              title="TELEFONE"
              type="text"
              as={InputMask}
              mask="(99) 99999-9999"
              maskChar=""
              name="phone"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              error={errors.phone}
              touched={touched.phone}
            />
            <Text
              title="QUAL SUA FUN????O NA EMPRESA"
              type="text"
              name="clientOffice"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.clientOffice}
              error={errors.clientOffice}
              touched={touched.clientOffice}
            />
            <Radio
              name="brandGoal"
              error={errors.brandGoal}
              title="QUAL ?? O OBJETIVO DO SEU CONTATO?"
              other={true}
              otherName="brandGoalOtherVal"
              otherOnChange={handleChange}
              otherError={errors.brandGoalOtherVal}
              otherVal={values.brandGoalOtherVal}
              options={[
                [
                  "Design - Quero criar a identidade visual da minha marca",
                  "Design",
                ],
                [
                  "Reesign - quero ajustar ou recriar o visual da minha marca",
                  "Redesign",
                ],
              ]}
            />
            <Radio
              name="dsMeet"
              error={errors.dsMeet}
              title="COMO VOCE CONHECEU A DIGITAL SCUDERO?"
              other={true}
              otherName="dsMeetOtherVal"
              otherOnChange={handleChange}
              otherError={errors.dsMeetOtherVal}
              otherVal={values.dsMeetOtherVal}
              options={[
                ["Indica????o", "Indicacao"],
                ["Instagram", "Instagram"],
                ["Facebook", "Facebook"],
                ["Site", "Site"],
                ["Whatsapp", "Whatsapp"],
              ]}
            />
            <Buttons
              to="/sua-marca"
              onClick={handleSubmit}
              errors={errors}
              validateForm={validateForm}
            />
          </AboutYouForm>
        )}
      </Formik>
    </FormContainer>
  );
}

const AboutYouForm = styled(StyledForm)`
  grid-template-areas:
    "name email"
    "phone clientOffice"
    "brandGoal brandGoal"
    "dsMeet dsMeet"
    "buttons buttons ";

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-areas:
      "name "
      "email"
      "phone"
      " clientOffice"
      "brandGoal"
      "dsMeet "
      "buttons ";
  }
`;
const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export default Form;

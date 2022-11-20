import { Formik } from "formik";
import styled from "styled-components";

import { StyledForm } from "../../../components/Styled";
import Buttons from "../../../components/Buttons";
import Range from "../../../components/Range";
import Radio from "../../../components/Radio";
import Text from "../../../components/Text";
import Rating from "../../../components/Rating";
import Checkbox from "../../../components/Checkbox";
import { useContext } from "react";
import PersonalityBriefingContext from "../../../context/PersonalityBriefingContext";
function Form() {
  const { personalityFormData, validatePersonalityForm } = useContext(
    PersonalityBriefingContext
  );
  return (
    <FormContainer>
      <Formik
        enableReinitialize={true}
        initialValues={personalityFormData}
        validate={validatePersonalityForm}
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
          <PersonalityForm onSubmit={handleSubmit}>
            <Checkbox
              title="SE SUA EMPRESA FOSSE UMA PESSOA, COMO ELA SERIA? ESCOLHA QUANTAS OPÇÕES ACHAR NECESSÁRIO."
              name="brandCaracteristics"
              value={values.brandCaracteristics}
              error={errors.brandCaracteristics}
              required={true}
              other={true}
              otherOnChange={handleChange}
              otherName={"brandCaracteristicsOtherVal"}
              otherVal={values.brandCaracteristicsOtherVal}
              otherError={errors.brandCaracteristicsOtherVal}
              onBlur={handleBlur}
              options={[
                "Séria",
                "Discreta",
                "Energética",
                "Extrovertida",
                "Delicada",
                "Acessível",
                "Alegre",
                "Sensível",
                "Exclusiva",
                "Brincalhona",
                "Madura",
                "Científica",
                "Tecnológica",
                "Conservadora",
                "Aventureira",
                "Romântica",
                "Moderna",
                "Rústica",
                "Rebelde",
                "Tradicional",
                "Nerd",
                "Calma",
                "Elegante",
              ]}
            />
            <Text
              title="DESSAS PALAVRAS QUE VOCÊ ESCOLHEU, CITE 3 QUE VOCÊ CONSIDERA SEREM AS MAIS FORTES."
              name="brandTopCaracteristics"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandTopCaracteristics}
              error={errors.brandTopCaracteristics}
              touched={touched.brandTopCaracteristics}
            />

            <Text
              title="SE SUA EMPRESA FOSSE UMA PESSOA, CITE 3 PALAVRAS QUE REFLITAM O QUE ELA NÃO SERIA"
              name="brandNotCaracteristics"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandNotCaracteristics}
              error={errors.brandNotCaracteristics}
              touched={touched.brandNotCaracteristics}
            />

            <Text
              title="HÁ ALGUMA COR QUE VOCE QUEIRA NA SUA MARCA?"
              name="brandColor"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandColor}
              error={errors.brandColor}
              touched={touched.brandColor}
            />
            <Text
              title="HÁ ALGUMA COR QUE VOCE NÃO QUEIRA NA SUA MARCA?"
              name="brandNotColor"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandNotColor}
              error={errors.brandNotColor}
              touched={touched.brandNotColor}
            />
            <Text
              title="VOCÊ TEM REFERENCIA DE MARCAS/EMPRESAS QUE VOCE GOSTA? SE SIM, INSIRA LINKS"
              name="competitorsReference"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.competitorsReference}
              error={errors.competitorsReference}
              touched={touched.competitorsReference}
            />
            <Buttons
              back="/seu-publico"
              to="/orcamento"
              onClick={handleSubmit}
              validateForm={validateForm}
              errors={errors}
            />
          </PersonalityForm>
        )}
      </Formik>
    </FormContainer>
  );
}

const PersonalityForm = styled(StyledForm)`
  grid-template-areas:
    "brandCaracteristics brandCaracteristics"
    "brandTopCaracteristics brandTopCaracteristics"
    " brandNotCaracteristics brandNotCaracteristics"
    " brandColor brandColor"
    " brandNotColor brandNotColor"
    " competitorsReference competitorsReference"
    " buttons buttons";
  @media (max-width: 600px) {
    grid-template-areas:
      "brandCaracteristics"
      "brandTopCaracteristics"
      " brandNotCaracteristics"
      " brandColor "
      " brandNotColor"
      " competitorsReference"
      " buttons ";
  }
`;
const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Form;

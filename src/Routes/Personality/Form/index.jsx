import { Formik } from "formik";
import styled from "styled-components";

import { StyledForm } from "../../../components/Styled";
import Buttons from "../../../components/Buttons";
import Range from "../../../components/Range";
import Radio from "../../../components/Radio";
import Text from "../../../components/Text";
import Rating from "../../../components/Rating";
import Checkbox from "../../../components/Checkbox";

function Form() {
  return (
    <FormContainer>
      <Formik
        initialValues={{
          otherVal: "",

          brandCaracteristics: [],
          brandCaracteristicsOtherVal: "",
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
          <PersonalityForm onSubmit={handleSubmit}>
            <Checkbox
              title="SE SUA EMPRESA FOSSE UMA PESSOA, COMO ELA SERIA? ESCOLHA QUANTAS OPÇÕES ACHAR NECESSÁRIO."
              name="brandCaracteristics"
              value={values.brandCaracteristics}
              required={true}
              other={true}
              otherOnChange={setFieldValue}
              otherName={"brandCaracteristicsOtherVal"}
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
              title="DESSAS PALAVRAS QUE VOCÊ ESCOLHEU, CITE 3 QUE VOCÊ CIBSUDERA SEREN AS MAIS FORTES."
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
          </PersonalityForm>
        )}
      </Formik>
      <Buttons back="/seu-publico" to="/orcamento" />
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
    " competitorsReference competitorsReference";
`;
const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Form;

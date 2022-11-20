import { Formik } from "formik";
import styled from "styled-components";

import { StyledForm } from "../../../components/Styled";
import Buttons from "../../../components/Buttons";
import Range from "../../../components/Range";
import Radio from "../../../components/Radio";
import Text from "../../../components/Text";
import Rating from "../../../components/Rating";
import { useContext } from "react";
import TargetPublicBriefingContext from "../../../context/TargetPublicBriefingContext";

function Form() {
  const { targetPublicFormData, validateTargetPublicForm } = useContext(
    TargetPublicBriefingContext
  );
  return (
    <FormContainer>
      <Formik
        initialValues={targetPublicFormData}
        enableReinitialize={true}
        validate={validateTargetPublicForm}
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
          validateForm

          /* and other goodies */
        }) => (
          <BrandForm onSubmit={handleSubmit}>
            <Radio
              name="clientType"
              error={errors.clientType}
              title="QUE O TIPO DE CLIENTE VOCÊ ATENDE?"
              required={true}
              options={[
                ["B2B - Sua empresa atende outras empresas", "B2B"],
                ["B2C - Sua empresa atende o consumidor final", "B2C"],
                ["Ambos", "Ambos"],
              ]}
            />
            <Radio
              name="clientGender"
              error={errors.clientGender}
              title="QUAL O GÊNERO DO SEU PÚBLICO?"
              required={true}
              other={true}
              otherName="clientGenderOtherVal"
              otherOnChange={handleChange}
              otherError={errors.clientGenderOtherVal}
              otherVal={values.clientGenderOtherVal}
              options={[
                ["Totalmente Masculino", "TMas"],
                ["Totalmente Feminino", "TFem"],
                ["Parcialmente Masculino", "PFem"],
                ["Parcialmente Feminino", "PFem"],
                ["Ambos", "Ambos"],
              ]}
            />
            <Text
              title="DESCREVA SEU CLIENTE/PUBLICO ALVO COM SUAS PALAVARAS"
              type="text"
              name="targetPublicDescription"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.targetPublicDescription}
              error={errors.targetPublicDescription}
              touched={touched.targetPublicDescription}
            />
            <Text
              title="COMO VOCÊ GOSTARIA QUE SEUS CLIENTES DESCREVESSEM SUA EMPRESA?"
              type="text"
              name="targetPublicHopeDescription"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.targetPublicHopeDescription}
              error={errors.targetPublicHopeDescription}
              touched={touched.targetPublicHopeDescription}
            />
            <Range
              title="QUAL A FAIXA ETÁRIA DO SEU CLIENTE?"
              subtitle="Anos"
              name="targetPublicAge"
              min={13}
              required={true}
              max={60}
              onChange={setFieldValue}
              onBlur={handleBlur}
              value={values.targetPublicAge}
              error={errors.targetPublicAge}
              touched={touched.targetPublicHopeDescription}
            />
            <Rating
              title="NUMA ESCALA DE 1 A 5, QUAL O PODER DE COMPRA DO SEU CLIENTE?"
              required
              value={values.clientPurchasingPower}
              onChange={setFieldValue}
              error={errors.clientPurchasingPower}
              touched={touched.clientPurchasingPower}
              name="clientPurchasingPower"
            />
            <Buttons
              back="/sua-marca"
              to="/personalidade"
              onClick={handleSubmit}
              errors={errors}
              validateForm={validateForm}
            />
          </BrandForm>
        )}
      </Formik>
    </FormContainer>
  );
}

const BrandForm = styled(StyledForm)`
  grid-template-areas:
    "clientType clientType"
    "clientGender clientGender"
    "targetPublicDescription targetPublicDescription"
    "targetPublicHopeDescription targetPublicHopeDescription"
    "targetPublicAge ."
    "clientPurchasingPower .";
`;
const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Form;

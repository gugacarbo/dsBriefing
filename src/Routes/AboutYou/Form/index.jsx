import { Formik } from "formik";
import styled from "styled-components";
import Buttons from "../../../components/Buttons";
import Radio from "../../../components/Radio";
import { StyledForm } from "../../../components/Styled";
import Text from "../../../components/Text";

function Form() {
  return (
    <FormContainer>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          let errors = {};

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
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
              name="phone"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              error={errors.phone}
              touched={touched.phone}
            />
            <Text
              title="QUAL SUA FUNÇÃO NA EMPRESA"
              type="text"
              name="position"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.position}
              error={errors.position}
              touched={touched.position}
            />
            <Radio
              name="goal"
              title="QUAL É O OBJETIVO DO SEU CONTATO?"
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
              name="meet"
              title="COMO VOCE CONHECEU A DIGITAL SCUDERO?"
              options={[
                ["Indicação", "Indicação"],
                ["Instagram", "Instagram"],
                ["Facebook", "Facebook"],
                ["Site", "Site"],
                ["Whatsapp", "Whatsapp"],
              ]}
            />
          </AboutYouForm>
        )}
      </Formik>
      <Buttons to="/sua-marca" />
    </FormContainer>
  );
}

const AboutYouForm = styled(StyledForm)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5rem;
  grid-template-areas:
    "name email"
    "phone position"
    "goal goal"
    "meet meet";
`;
const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Form;

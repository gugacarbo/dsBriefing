import { Formik } from "formik";
import { useContext } from "react";
import styled from "styled-components";
import Buttons from "../../../components/Buttons";
import Radio from "../../../components/Radio";
import { StyledForm } from "../../../components/Styled";
import Text from "../../../components/Text";
import BrandBriefingContext from "../../../context/BrandBriefingContext";

function Form() {
  const { brandFormData, validateBrandForm } = useContext(BrandBriefingContext);
  return (
    <FormContainer>
      <Formik
        initialValues={brandFormData}
        enableReinitialize={true}
        validate={validateBrandForm}
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
          validateForm,
          /* and other goodies */
        }) => (
          <BrandForm onSubmit={handleSubmit}>
            <Text
              title="DIGA-NOS O NOME DA SUA EMPRESA (CASO TENHA)"
              type="text"
              name="brandName"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandName}
              error={errors.brandName}
              touched={touched.brandName}
            />
            <Text
              title="SUA EMPRESA POSSIU UM SLOGAN/TAGLINE? SE SIM, QUAL?"
              type="text"
              name="brandSlogan"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandSlogan}
              error={errors.brandSlogan}
              touched={touched.brandSlogan}
            />
            <Text
              title="AONDE SUA EMPRESA ATUA"
              type="text"
              name="brandLocation"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandLocation}
              error={errors.brandLocation}
              touched={touched.brandLocation}
            />
            <Text
              title="EXISTE INTERESSE DE EXPANDIR A EMPRESA? PARA AONDE?"
              type="text"
              name="brandExpand"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandExpand}
              error={errors.brandExpand}
              touched={touched.brandExpand}
            />
            <Text
              title="POR QUE A EMPRESA TEM ESSE MOME? O QUE ELE SIGNIFICA PARA VOCÊ?"
              type="text"
              name="brandNameReason"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandNameReason}
              error={errors.brandNameReason}
              touched={touched.brandNameReason}
            />
            <Text
              title="QUAIS OS MOTIVOS QUE TE LEVARAM A ABRIR A SUA EMPRESA?"
              type="text"
              name="brandBornReason"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandBornReason}
              error={errors.brandBornReason}
              touched={touched.brandBornReason}
            />
            <Text
              title="DEFINA, RESUMIDAMENTE, DO QUE SE TRATA A SUA EMPRESA."
              type="text"
              name="brandResume"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandResume}
              error={errors.brandResume}
              touched={touched.brandResume}
            />
            <Text
              title="QUAL O MOMENTO ATUAL DA EMPRESA? A QUANTO TEMPO ELA EXISTE?"
              type="text"
              name="brandTime"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandTime}
              error={errors.brandTime}
              touched={touched.brandTime}
            />
            <Text
              title="QUE PRODUTOS E/OU SERVIÇOS SUA EMPRESA OEFERECE?"
              type="text"
              name="brandServices"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandServices}
              error={errors.brandServices}
              touched={touched.brandServices}
            />
            <Text
              title="O QUE FAZ SUA EMPRESA SER ESPECIAL/DIFERENTE?"
              type="text"
              name="brandDiferential"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandDiferential}
              error={errors.brandDiferential}
              touched={touched.brandDiferential}
            />
            <Text
              title="SUA EMPRESA TEM CONCORRENTES? QUEM SÃO? FALE UM POUCO SOBRE ELES, SE ACHAR NECESSÁRIO, COLOQUE NOMES E LINKS DE REDES SOCIAIS POR EXEMPLO."
              type="text"
              name="brandCompetitors"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandCompetitors}
              error={errors.brandCompetitors}
              touched={touched.brandCompetitors}
            />
            <Text
              title="SEUS CONCORRENTES OFERECEM ALGO QUE SUA EMPRESA NÃO OFERECE?"
              type="text"
              name="brandCompetitorsDiferential"
              required={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brandCompetitorsDiferential}
              error={errors.brandCompetitorsDiferential}
              touched={touched.brandCompetitorsDiferential}
            />
            <Buttons
              back="/"
              to="/seu-publico"
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
    "brandName brandSlogan"
    "brandLocation brandExpand"
    "brandNameReason brandNameReason"
    "brandBornReason brandBornReason"
    "brandResume brandResume"
    "brandTime brandTime"
    "brandServices brandServices"
    " brandDiferential brandDiferential"
    "brandCompetitors brandCompetitors"
    "brandCompetitorsDiferential brandCompetitorsDiferential"
    "buttons buttons";

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-areas:
      "brandName "
      " brandSlogan"
      "brandLocation"
      " brandExpand"
      " brandNameReason"
      " brandBornReason"
      " brandResume"
      " brandTime"
      " brandServices"
      " brandDiferential"
      " brandCompetitors"
      " brandCompetitorsDiferential"
      "buttons ";
  }
`;
const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Form;

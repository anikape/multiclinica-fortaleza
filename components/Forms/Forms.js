import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from './forms.module.css'

const ExameForm = () => {

  const exames = [
    { id: 1, nome: "Tomografia Computadorizada" },
    { id: 2, nome: "Ultrasonografia" },
    { id: 3, nome: "Teste Ergomético" },
    { id: 4, nome: "Momografia" },
    { id: 5, nome: "Densiometria" },
    { id: 6, nome: "Raio-X" },
    { id: 7, nome: "Espirometria" },
   
  ];

  const initialValues = {
    nome: "",
    telefone: "",
    email: "",
    exame: "",
    nomeMedico: "",
    cid: "",
    dataExame: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    // Lógica para lidar com os dados do formulário
  };

  

  const validate = (values) => {
    const errors = {};

    if (!values.nome) {
      errors.nome = "Campo obrigatório";
    }

    if (!values.telefone) {
      errors.telefone = "Campo obrigatório";
    }

    if (!values.email) {
      errors.email = "Campo obrigatório";
    }

    if (!values.exame) {
      errors.exame = "Por favor, selecione uma opção";
    }

    if (!values.nomeMedico) {
      errors.nomeMedico = "Campo obrigatório";
    }

    if (!values.cid) {
      errors.cid = "Campo obrigatório";
    }

    if (!values.dataExame) {
      errors.dataExame = "Campo obrigatório";
    }

    return errors;
  };

  return (
    <section className={styles.bg}>
      <section className={styles.sides}>
        <div className={styles.left}></div>
        <div className={styles.rigth}>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
      <Form className={styles.formContainer}>
        
        <div>
        <h1>Agendamento</h1>
          <label htmlFor="nome">Nome:</label>
          <Field type="text" id="nome" name="nome" />
          <ErrorMessage name="nome" component="div" />
        </div>

        <div>
          <label htmlFor="telefone">Telefone:</label>
          <Field type="text" id="telefone" name="telefone" />
          <ErrorMessage name="telefone" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="exame">Exame:</label>
          <Field className={styles.exames} as="select" id="exame" name="exame">
            <option className={styles.opcoesExames} value="">Selecione um exame</option>
            {exames.map((exame) => (
              <option key={exame.id} value={exame.nome}>
                {exame.nome}
              </option>
            ))}
          </Field>
          <ErrorMessage name="exame" component="div" />
        </div>

        <div>
          <label htmlFor="nomeMedico">Nome do Médico:</label>
          <Field type="text" id="nomeMedico" name="nomeMedico" />
          <ErrorMessage name="nomeMedico" component="div" />
        </div>

        <div>
          <label htmlFor="cid">CID:</label>
          <Field type="text" id="cid" name="cid" />
          <ErrorMessage name="cid" component="div" />
        </div>

        <div>
          <label htmlFor="dataExame">Data do Exame:</label>
          <Field type="date" id="dataExame" name="dataExame" />
          <ErrorMessage name="dataExame" component="div" />
        </div>

        <button type="submit">Enviar</button>
      </Form>
    </Formik>
    </div>
    </section>
    </section>
  );
};

export default ExameForm;

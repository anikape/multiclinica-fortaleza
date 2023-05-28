"use client";
import React from 'react';
import { CCard, CCardImage, CCardBody, CButton, CCardTitle, CCardText } from '@coreui/react';
import styles from './cards.module.css'

const Card = () => {
  const cards = [
    {
      id: 1,
      nome: "SERVIÇOS",
      description: "Oferecemos uma variedade de serviços médicos abrangentes, visando proporcionar o melhor cuidado para você e sua família. Nossos médicos especialistas estão disponíveis para consultas, realizando um diagnóstico preciso e fornecendo tratamentos personalizados.",
      title: "Especialidades",
      path: "",
      image: "/serviços.png"
    },
    {
      id: 2,
      nome: "CLÍNICA GERAL",
      description: "Todos os atendimentos da clínica como consultas, exames e pequenos procedimentos deverão ser previamente agendados através do nosso TELE ATENDIMENTO ou através de marcação presencial na própria clínica. Nosso objetivo é ajudá-lo a alcançar e manter um estilo de vida saudável.",
      title: "Agendar Consultas",
      path: "",
      image: "/clinicaGeral.png"
    },
    {
      id: 3,
      nome: "EXAMES",
      description: "Nossa clínica também oferece uma variedade de exames de diagnóstico, utilizando equipamentos modernos e tecnologia avançada. Esses exames desempenham um papel fundamental na identificação precoce de doenças e auxiliam nossos médicos no planejamento do tratamento adequado.",
      title: "Agendar Exame",
      path: "",
      image: "/exames.png"
    },
  ];

  return (
    <div className={styles.cardContainer}>
      {cards.map(({ id, nome, description, title, path, image }) => (
        <CCard key={id} className={styles.cardContent}>
          <CCardImage className={styles.image} orientation="top" src={image} alt={nome} />
          <CCardBody>
            <CCardTitle className={styles.nome}>{nome}</CCardTitle>
            <CCardText className={styles.texto}>{description}</CCardText>
            <CButton href={path} className={styles.button}>{title}</CButton>
          </CCardBody>
        </CCard>
      ))}
    </div>
  );
};

export default Card;

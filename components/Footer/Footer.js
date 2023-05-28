import Image from 'next/image';
import styles from './footer.module.css'

const Footer = () => {
  const socials = [
    {
      id: 1,
      img: '/icons/FACE.svg',
      nome: 'Logo do facebook',
      path: '',
    },
    {
      id: 2,
      img: '/icons/INSTA.svg',
      nome: 'Logo do instagram',
      path: '',
    },
    {
      id: 3,
      img: '/icons/TELEFONE.svg',
      nome: 'Imagem de um telefone',
      path: '',
    },
    {
      id: 4,
      img: '/icons/WHATS.svg',
      nome: 'Logo do whatsapp',
      path: '',
    },
  ];

  return (
   
    <section className={styles.footerContainer}>
      <section className={styles.footer}>
         <Image
          className={styles.logoFooter}
          src="/logoMaior.png"
          alt="Logo Multiclinica"
          width={472}
          height={107}
        />
      <section className={styles.footerAdress}>
   

        <div className={styles.infos}>
          <div className={styles.adress}>
            <h2>Endereço</h2>
            <p>
              Rua Guaratinguetá, 60. Parangaba.<br/> Fortaleza - Ceará - Brasil. Cep:
              60710-180
            </p>
          </div>

          <div className={styles.contact}>
            <h2>TELE ATENDIMENTO</h2>
            <p>
              85 3048.5850 - 85 3048.5802
              <br />
              85 3048.5801 - 85 3048.5803
            </p>
          </div>

          <div className={styles.socials}>
            <h2>Redes Sociais</h2>

            <div className={styles.icons}>
              {socials.map(({ img, path, nome, id }) => (
                <>
                  <ul key={id}>
                    <li>
                      <a href={path}>
                        <Image src={img} alt={nome} width={80} height={80}/>
                      </a>
                    </li>
                  </ul>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <Image
            src="/icons/Line 1.svg"
            className={styles.line}
            alt="imagem de uma linha horizontal"
            width={1400}
            height={100}
          />
          <p>
            © 2022 MULTICLINICA FORTALEZA LTDA. CNPJ 01.373.946/0001-66. TODOS
            OS DIREITOS RESERVADOS.
          </p>


          
        </div>
      </section>
      </section>
      </section>
  );
};

export default Footer;

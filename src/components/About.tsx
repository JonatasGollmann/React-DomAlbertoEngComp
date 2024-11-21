import DescriptionCard from "./cards/DescriptionCards";
import Carousel from "./carousel/Carousel";
import Creativity from "/src/assets/images/aula_pratica.jpg";
import EngineerComp from "/src/assets/images/aula_sisemb.jpeg";
import Working from "/src/assets/images/aula_redes.jpg";
import Partners from "./cards/PartnersCards";
import NetWorking from "/src/assets/images/network_imply.jpg";
import { motion } from "framer-motion";
import { entrada } from "../AnimationVariants";

export default function About() {
  return (
    <>
      
      <section className="2xl:w-4/5 w-full mx-auto flex flex-col justify-center items-center text-center gap-16 my-[12vh] overflow-hidden">
        <motion.h1 
        variants={entrada("bottom", 0.48)}
        initial="opHidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.7 }}
        className="bg-clip-text bg-gradient-to-bl to-blue_4 from-blue_1 text-transparent text-2xl 2xl:text-3xl font-semibold">
          Conheça mais sobre o curso
        </motion.h1>
        <DescriptionCard
          title="Transforme ideias em tecnologia"
          description="O curso de Engenharia da Computação forma profissionais capazes de criar soluções tecnológicas inovadoras, desde a construção de sistemas de software e hardware até o desenvolvimento de dispositivos inteligentes. A graduação oferece uma base sólida em matemática, física, programação e eletrônica, preparando os estudantes para atuar em áreas que moldam o futuro digital."
          imagem={EngineerComp}
          alt="Imagem de uma aula de sistemas embarcados com Raspberry Pi."
        />
        <DescriptionCard
          reverse={true}
          title="Formação requisitada"
          description="A graduação em Engenharia da Computação integra conhecimentos de diversas áreas, como eletrônica, programação, inteligência artificial e redes de computadores. Essa abordagem multidisciplinar capacita o aluno a atuar em diferentes setores da economia, desde desenvolvimento de softwares até a automação industrial, tornando-o um profissional versátil e requisitado no mercado."
          imagem={Creativity}
          alt="Imagem de estudantes do curso realizando uma prática de eletrônica."
        />
        <DescriptionCard
          title="Formação que combina conhecimento e prática"
          description="Nosso curso utiliza uma metodologia ativa, onde os alunos participam de projetos, desenvolvendo soluções inovadoras em equipes interdisciplinares. Desde o início da graduação, você terá a oportunidade de aplicar os conhecimentos adquiridos em sala de aula para resolver desafios reais da indústria e da sociedade."
          imagem={Working}
          alt="Imagem de um grupo de estudantes em uma aula prática de redes de computadores."
        />
        <DescriptionCard
          title="Parcerias com empresas de tecnologia"
          description="Para preparar os alunos para o mercado de trabalho, a faculdade mantém parcerias com grandes empresas de tecnologia, possibilitando estágios, programas de trainee e desenvolvimento de projetos em conjunto. Essa proximidade com o mercado garante uma formação alinhada com as demandas atuais e facilita a sua inserção no setor de tecnologia."
          imagem={NetWorking}
          alt="Imagem de uma saída de campo com realização de palestra e troca de conhecimentos com a empresa Imply."
          reverse={true}
        />
        <Partners />
      </section>

      <Carousel />
    </>
  );
}

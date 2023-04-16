import childCareImage from "../assets/child-care.svg";
import schoolImage from "../assets/school.svg";
import autoDetectVoiceImage from "../assets/auto-detect-voice.svg";
import diversityImage from "../assets/diversity.svg";
import { iCardContent } from "./@types";

const cardsInfo: iCardContent[] = [
  {
    imagePath: childCareImage,
    title: "Escolas",
    description:
      "Crie planos de ensino complementares ao currículo escolar da sua instituição, todo mundo aprende junto.",
  },
  {
    imagePath: schoolImage,
    title: "Estudantes",
    description:
      "Consuma videos, textos informativos e muito conteúdo interativo para complementar seus estudos.",
  },
  {
    imagePath: autoDetectVoiceImage,
    title: "Criadores de conteúdo",
    description:
      "Crie e venda seus conteúdos aqui em um único lugar, você terá acesso a todas as ferramentas para criar experiências interativas e cativar sua base de alunos.",
  },
  {
    imagePath: diversityImage,
    title: "Empreendedores",
    description:
      "Tenha acesso a nossa gama de soluções educativas e faça com que sua empresa entre para o metatarso.",
  },
];

export default cardsInfo;

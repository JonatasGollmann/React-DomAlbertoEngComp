import { Facebook, Github, Instagram, Youtube } from "lucide-react";

const linksMidias = [
  {
    id: 1,
    nome: "Instagram",
    title: "Instagram da faculdade Dom Alberto",
    link: "https://www.instagram.com/dom.alberto/",
    icone: <Instagram />,
  },
  {
    id: 2,
    nome: "Facebook",
    title: "Facebook da faculdade Dom Alberto",
    link: "https://www.facebook.com/domalberto/",
    icone: <Facebook />,
  },
  {
    id: 3,
    nome: "Github",
    title: "Github do desenvolvedor",
    link: "https://github.com/jonatasGollmann/",
    icone: <Github />,
  },
  {
    id: 4,
    nome: "Youtube",
    title: "Youtube da faculdade Dom Alberto",
    link: "https://www.youtube.com/user/domalbertovideos",
    icone: <Youtube />,
  },
];

export default function Midias() {
  return (
    <nav className="flex gap-3">
      {linksMidias.map((midia, index: number) => (
        <a key={index}
          className="p-2.5 hover:bg-white_2 hover:text-preto rounded-lg transition-all text-blue_4"
          href={midia.link}
          title={midia.title}
        >
          {midia.icone}
        </a>
      ))}
    </nav>
  );
}

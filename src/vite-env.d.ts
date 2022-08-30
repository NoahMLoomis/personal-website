/// <reference types="vite/client" />
type IProjectCard = {
  title: string;
  img: string;
  desc: string;
  tech: string[];
  src: string;
  liveLink?: string;
};

type IColors =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

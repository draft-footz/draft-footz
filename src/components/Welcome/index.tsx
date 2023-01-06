import { SectionWelcome } from "./style";

export const Welcome = () => {
  return (
    <SectionWelcome>
      <div className="div-global-welcome">
        <figure className="figure-welcome">
          <img className="img-welcome" src="/logo-welcome.svg" alt="" />
        </figure>
        <div className="div-text">
          <h2 className="text">Bem-vindo ao Draft Footz, Fulano!</h2>
        </div>
      </div>
    </SectionWelcome>
  );
};

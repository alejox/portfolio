import "./ScrollTop.scss";
import arrow from '../icons/flecha-arriba.svg'

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="scroll">
      <button className="btnTop " onClick={scrollToTop}>
        <img width={30} src={arrow} alt="" />
      </button>
    </div>
  );
};

export default ScrollTop;

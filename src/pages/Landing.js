import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby intelligentsia squid pinterest shabby chic aesthetic vape
              tilde cred. Umami asymmetrical tofu vibecession, mlkshk truffaut
              yuccie franzen tote bag cronut humblebrag trust fund man bun.
              Sriracha 90's kale chips mlkshk jean shorts hexagon. PBR&B iceland
              +1 blackbird spyplane, yuccie flexitarian sartorial ramps locavore
              deep v art party shoreditch gentrify slow-carb.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login / Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};
export default Landing;

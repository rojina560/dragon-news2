import logo from "../../assets/logo.png"
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
      <div>
        <img className="mx-auto" src={logo} alt="" />
        <h1 className="text-center text-xl ">
          Juarnalism Without Fear or Favor
        </h1>
        <p className="text-center">{moment().format("MMMM D YYYY, ")}</p>

        <div className="flex bg-slate-200 p-4 gap-2">
          <button className="bg-pink-600 px-5 py-2 rounded-sm"> latest</button>
          <Marquee className="  " pauseOnHover={true} speed={200}>
            Latest Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
      </div>
    );
};

export default Header;
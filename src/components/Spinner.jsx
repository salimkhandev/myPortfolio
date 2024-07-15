
import { Bars } from "react-loader-spinner";
function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Bars
        height={80}
        width={80}
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass="" 
        visible={true}/>
    </div>
  );
}

export default Spinner;

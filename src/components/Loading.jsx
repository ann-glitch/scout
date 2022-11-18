import { LineWave } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <LineWave
        height="100"
        width="100"
        color="#00BFFF"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};

export default Loading;

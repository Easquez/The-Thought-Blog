import Image from "next/image";
function Loading() {
  return (
    <div className="text-center">
      <Image src="loading.gif" alt="loading"></Image>
    </div>
  );
}

export default Loading;

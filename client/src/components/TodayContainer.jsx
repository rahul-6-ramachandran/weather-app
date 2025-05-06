import { SunIcon } from "@heroicons/react/24/outline";

export default function TempTodayContainer() {
  return (
    <>
      <div className="rounded-4xl w-full h-full bg-[#FAE2BD] flex flex-col p-6 text-[#EFAA82]">
        <div>
          <p className="flex items-center gap-2 text-3xl text-center font-medium">
            Today{" "}
            <svg
              className="w-3 h-3 text-[#EFAA82]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
          </p>
        </div>
        <div className="flex gap-7 w-70  mx-0 m-0 p-0 ">
            <img src="/images/Vector.png" alt="" className="w-full h-full"/>

          <span className="text-9xl font-medium font-poppins w-full h-full" style={{fontFamily:"poppins"}}> 32</span>
        </div>
        <div className="flex flex-col gap-3 text-xl">
        <p className="font-bold">Sunny</p>
        <p>California, Los Angelas</p>
        <p>21 Oct 2019</p>
        <p>Feels like | Sunset 18:20</p>
        </div>
      </div>
    </>
  );
}

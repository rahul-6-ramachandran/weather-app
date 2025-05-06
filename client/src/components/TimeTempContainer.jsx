export default function TimeTempComponent() {
  return (
    <>
      <div className="relative md:w-full md:h-full bg-white/25 backdrop-blur-xl  flex   rounded-4xl">
        <div className="text-2xl w-full h-full flex flex-wrap font-semibold text-gray-800">
          <div className="md:w-full py-4 flex flex-col gap-5">
            <table className="flex flex-col gap-3">
              <tr className="flex gap-10 text-white text-md font-light">
                <td>Now</td>
                <td>1 Am</td>
                <td>2 Am</td>
                <td>3 Am</td>
                <td>4 Am</td>
                <td>5 Am</td>
              </tr>

              <tr className="flex gap-10 text-white text-md font-light w-full">
                <td className="flex gap-1">
                  <img src="/images/Cloud.png" alt="" className="w-5 h-4" /> 30
                </td>
                <td>30</td>
                <td>30</td>
                <td>30</td>
                <td>30</td>
                <td>30</td>
              </tr>
            </table>

            <div className="border-t border-white my-4 w-4/5"></div>

            <table className="flex flex-col gap-5">
              <tr className="flex gap-10 text-white text-md font-light">
                <td>6 AM</td>
                <td>7 AM</td>
                <td>8 AM</td>
                <td>9 AM</td>
                <td>10 AM</td>
                <td>11 AM</td>
              </tr>

              <tr className="flex gap-10 text-white text-md font-light w-full">
                <td className="flex gap-1">
                  <img src="/images/Cloud.png" alt="" className="w-5 h-4" /> 30
                </td>
                <td>30</td>
                <td>30</td>
                <td>30</td>
                <td>30</td>
                <td>30</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

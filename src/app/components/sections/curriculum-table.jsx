const data = [
  {
    label: "Duration",
    fullTime: "3-4 months",
    partTime: "4-6 months",
  },
  {
    label: "Study Hours",
    fullTime: "6-7 hrs a day",
    partTime:
      "Up to You! Regardless, we are available between 10am-5pm & 7pm-10pm mon-fri to teach you.",
  },
  {
    label: "Class Hours",
    fullTime: "Mon - Fri: 10am - 5pm",
    partTime:
      "Up to You! Regardless, we are available between 10am-5pm & 7pm-10pm mon-fri to teach you.",
  },
  {
    label: "Cost",
    fullTime: "USD 1.6K-USD 2.8K",
    partTime: "USD 1.6K-USD 2.8K",
  },
  {
    label: "On-site",
    fullTime: "✔️ (Selangor, Malaysia)",
    partTime: "X",
  },
  {
    label: "Full Curricullum (AI projects, e-commerce marketplace etc.)",
    fullTime: "✔️",
    partTime: "✔️",
  },
  // {
  //   label: "Build App for Real Business (we connect you to them)",
  //   fullTime: "✔️",
  //   partTime: "✔️",
  // },

  {
    label: "Career Support",
    fullTime: "✔️",
    partTime: "✔️",
  },
];

export function TableDemo() {
  return (
    <section className="max-w-[1280px] mx-auto py-2 lg:px-0 sm:px-4">
      <div className="sm:mx-0 mx-3 border overflow-auto bg-white rounded-[15px] shadow-lg">
        <table className=" w-full text-center table-auto border-collapse rounded-lg overflow-hidden">
          <thead className="bg-[white]">
            <tr>
              <th className="py-4 px-6"></th>
              <th className="py-4 px-6 bg-primary text-white font-bold">
                Full-Time
               
              </th>
              <th className="py-4 px-6 bg-secondary text-white font-bold">
                Part-Time 
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`border-b last:border-none ${
                  index % 2 === 0 ? "bg-[white]" : "bg-white"
                }`}
              >
                <td className="py-4 px-6 text-left border-t text-[#0F243DCC]">
                  {row.label}
                </td>
                <td className="py-4 px-6 text-[#0F243DCC] border-l border-t">
                  {row.fullTime}
                </td>
                <td className="py-4 px-6 border-t border-l text-[#0F243DCC]">
                  {row.partTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const CurriculumTable = () => {
  return (
    <div id="fixed-vs-flexible-option" className=" bg-[#F7F8F9]">
      <section className="max-w-[1300px] mx-auto py-12 ">
        <div className="px-4 lg:px-0 text-start mb-8">
          <h2 className=" sm:text-4xl text-[1.5rem] leading-[1.5rem] font-bold text-primary">
            Full-TIme vs Part-Time <br /> Option
          </h2>
          {/* <p className="text-gray-500 mt-2">
            Our bootcamp is only $500, a 90% discount from the regular price of
            $5,000. <br /> And, if you don’t land a job after completing our
            program, you get a full refund. <br /> 100% risk-free.
          </p> */}
        </div>
        <TableDemo /> {/* Use TableDemo here instead of CurriculumTable */}
      </section>
    </div>
  );
};

export default CurriculumTable;

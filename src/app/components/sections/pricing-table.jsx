const data = [
  {
    label: "Total Tuition (AUD)",
    degree: "AUD 25K-500K",
    ourBootcamp: "< AUD 4K",
  },

  {
    label: "Job Guarantee",
    degree: "X",
    ourBootcamp: "✔️",
  },
  {
    label: "Time Commitment",
    degree: "3-4 years (Bachelor) • 1.5-2 years (Master's)",
    ourBootcamp: "3-4 months",
  },

  {
    label: "Cohort Size",
    degree: "100+",
    ourBootcamp: "Max 6",
  },
  {
    label: "Project-Based, Job-Ready Skills",
    degree: "X",
    ourBootcamp: "✔️",
  },
  {
    label: "Dedicated Career Support",
    degree: "X",
    ourBootcamp: "✔️",
  },
  // {
  //   label: "Real-life Project for a real business",
  //   degree: "X",
  //   ourBootcamp: "✔️",
  // },
];

export function TableDemo() {
  return (
    <div
      id="zez-academy-vs-university"
      className="max-w-[1280px] mx-auto py-2 lg:px-0 sm:px-4"
    >
      <div className="border overflow-auto bg-white rounded-[15px] shadow-lg">
        <table className=" w-full text-center table-auto border-collapse rounded-lg overflow-hidden">
          <thead className="bg-[white]">
            <tr>
              <th className="py-4 px-6"></th>
              <th className="py-4 px-6 text-gray-700 border-l">
                Degree / Master's
              </th>
              <th className="py-4 px-6 bg-secondary text-white font-bold">
                Our Program
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
                <td className="py-4 px-6 text-left  border-t text-[#0F243DCC]">
                  {row.label}
                </td>
                <td className="py-4 px-6 text-[#0F243DCC] border-l border-t">
                  {row.degree}
                </td>
                <td className="py-4 px-6 border-t border-l  text-[#0F243DCC]">
                  {row.ourBootcamp}
                </td>
                {/* <td className="py-4 px-6 border-t border-l text-[#0F243DCC]">
                  {row.otherBootcamp}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const PricingTable = () => {
  return (
    <section
      id="comparison-section"
      className="py-12 max-w-[1300px] mx-auto px-4 lg:px-0"
    >
      <div className="text-start mb-8 ">
        <h2 className="text-primary text-4xl font-bold">
          Zez Academy vs <br /> University
        </h2>
        <p className="text-gray-500 mt-2">Compare the differences</p>
      </div>

      <TableDemo />
      {/* MY CUSTOM TABLE */}
      {/* <div className="overflow-x-auto px-4 md:px-8">
        <div className="rounded-lg shadow-md overflow-hidden">
          <table className="w-full mx-auto p-[12rem] px-4 lg:px-0 bg-white rounded-lg border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 border-b border-r border-l text-left font-medium text-gray-700"></th>
                <th className="py-4 px-6 border-b border-r border-l text-left font-medium text-white bg-secondary">
                  Degree / Master&apos;s
                </th>
                <th className="py-4 px-6 border-b border-r border-l text-left font-medium text-gray-700">
                  Our Bootcamp
                </th>
                <th className="py-4 px-6 border-b border-r border-l text-left font-medium text-gray-700">
                  Other Bootcamp
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  Coding Hours
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  450+
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  600+
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  450+
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  Total Cost
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  USD 80-150K
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  USD 1.15-1.6K
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  USD 3-20K
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  Cost if Unemployed
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  USD 80-150K
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  0
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  USD 3-20K
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  Time Commitment
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  4 years
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  3 months
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  3 months
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  Number of Students per Cohort
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  100+
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  Max of 6
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  15-40
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  Practical Skills
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-secondary">
                  <span className="text-secondary">&#10003;</span>
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-secondary">
                  <span className="text-secondary">&#10003;</span>
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-secondary">
                  <span className="text-secondary">&#10003;</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  Career Prep
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-secondary">
                  <span className="text-secondary">&#10003;</span>
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-secondary">
                  <span className="text-secondary">&#10003;</span>
                </td>
                <td className="py-4 px-6 border-b border-r border-l text-secondary">
                  <span className="text-secondary">&#10003;</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-r border-l text-gray-700">
                  Real-life Project for a Real Business
                </td>
                <td className="py-4 px-6 border-b border-r text-secondary">
                  <span className="text-secondary">&#10003;</span>
                </td>
                <td className="py-4 px-6 border-b border-r text-secondary">
                  <span className="text-secondary">&#10003;</span>
                </td>
                <td className="py-4 px-6 border-b border-r text-secondary">
                  <span className="text-secondary">&#10003;</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </section>
  );
};

export default PricingTable;

const CurriculumTable = () => {
  return (
    <div className="bg-[#F7F8F9]">
      <section className="max-w-[1300px] mx-auto py-12">
        <div className="px-8 text-start mb-8">
          <h2 className=" text-4xl font-bold text-primary">
            Full-Time vs Part-Time <br /> Curriculum
          </h2>
          <p className="text-gray-500 mt-2">
            Our bootcamp is only $500, a 90% discount from the regular price of
            $5,000. <br /> And, if you don’t land a job after completing our
            program, you get a full refund. <br /> 100% risk-free.
          </p>
        </div>

        <div className="overflow-x-auto px-4 md:px-8">
          <div className="rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <table className="w-full border border-gray-200 bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="text-left">
                  <th className="py-4 px-6 border-b border-r border-gray-200"></th>
                  <th className="py-4 px-6 border-b border-r border-gray-200 bg-gray-800 text-white">
                    Full-Time
                  </th>
                  <th className="py-4 px-6 border-b border-gray-200 bg-blue-500 text-white">
                    Part-Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    Duration
                  </td>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    3-4 months
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    6-8 months
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    Access to All Coding Projects
                  </td>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    <span className="text-blue-500">&#10003;</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <span className="text-blue-500">&#10003;</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    Cost
                  </td>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    USD 1.15-1.6K
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    USD 1.15-1.6K
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    Career Coaching
                  </td>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    <span className="text-blue-500">&#10003;</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <span className="text-blue-500">&#10003;</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    Career Prep
                  </td>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    <span className="text-blue-500">&#10003;</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <span className="text-blue-500">&#10003;</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    Real-life Project for Business
                  </td>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    <span className="text-blue-500">&#10003;</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <span className="text-blue-500">&#10003;</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    Build capstone projects (AI chatbot, e-commerce marketplace)
                  </td>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    <span className="text-blue-500">&#10003;</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <span className="text-blue-500">&#10003;</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    Build AI projects
                  </td>
                  <td className="py-4 px-6 border-b border-r border-gray-200">
                    <span className="text-blue-500">&#10003;</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <span className="text-blue-500">&#10003;</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurriculumTable;

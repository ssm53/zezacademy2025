const PricingTable = () => {
  return (
    <section className="py-12 max-w-[1440px] mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Why It Makes Sense To Join Us?</h2>
        <p className="text-gray-500 mt-2">Compare the difference by yourself</p>
      </div>

      <div className="overflow-x-auto px-4 md:px-8">
        {" "}
        <div className="rounded-lg shadow-lg border border-gray-300 overflow-hidden">
          <table className="min-w-full bg-white rounded-lg border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 border-b text-left font-medium text-gray-700">
                  Degree / Master's
                </th>
                <th className="py-4 px-6 border-b text-left font-medium text-gray-700 bg-blue-100">
                  Our Bootcamp
                </th>
                <th className="py-4 px-6 border-b text-left font-medium text-gray-700">
                  Other Bootcamp
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-6 border-b text-gray-700">
                  Coding Hours
                </td>
                <td className="py-4 px-6 border-b text-gray-700">600+</td>
                <td className="py-4 px-6 border-b text-gray-700">450+</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b text-gray-700">Total Cost</td>
                <td className="py-4 px-6 border-b text-gray-700">
                  USD 1.15-1.6K
                </td>
                <td className="py-4 px-6 border-b text-gray-700">USD 3-20K</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b text-gray-700">
                  Cost if Unemployed
                </td>
                <td className="py-4 px-6 border-b text-gray-700">0</td>
                <td className="py-4 px-6 border-b text-gray-700">USD 3-20K</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b text-gray-700">
                  Time Commitment
                </td>
                <td className="py-4 px-6 border-b text-gray-700">3 months</td>
                <td className="py-4 px-6 border-b text-gray-700">3 months</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b text-gray-700">
                  Number of Students per Cohort
                </td>
                <td className="py-4 px-6 border-b text-gray-700">Max of 6</td>
                <td className="py-4 px-6 border-b text-gray-700">15-40</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b text-gray-700">
                  Practical Skills
                </td>
                <td className="py-4 px-6 border-b text-gray-700">
                  <span className="text-blue-500">&#10003;</span>
                </td>
                <td className="py-4 px-6 border-b text-gray-700">
                  <span className="text-blue-500">&#10003;</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b text-gray-700">
                  Career Prep
                </td>
                <td className="py-4 px-6 border-b text-gray-700">
                  <span className="text-blue-500">&#10003;</span>
                </td>
                <td className="py-4 px-6 border-b text-gray-700">
                  <span className="text-blue-500">&#10003;</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700">
                  Real-life Project for a Real Business
                </td>
                <td className="py-4 px-6 text-gray-700">
                  <span className="text-blue-500">&#10003;</span>
                </td>
                <td className="py-4 px-6 text-gray-700">
                  <span className="text-blue-500">&#10003;</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;

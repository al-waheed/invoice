

function CreateInvoice() {
  return (
    <div className="flex flex-col h-screen overflow-y-auto w-full">
      <h2 className="lg:text-3xl md:text-2xl text-xl">CreateInvoice</h2>

      <div className="md:flex md:space-x-8 py-6">
        <div className="flex flex-col rounded-md border md:w-[400px] w-[250px] h-[150px] md:p-8 p-4 justify-center">
          <h2>Yatharth Verma</h2>
          <p className="text-gray-500 mt-3">Your Expenses: Rs10000</p>
        </div>
        <div className="flex flex-col rounded-md border md:w-[400px] w-[250px] h-[150px] md:p-8 p-4 justify-center md:mt-0 mt-4">
          <h2>Yatharth Verma</h2>
          <p className="text-gray-500 mt-3">Your Savings: Rs100000</p>
        </div>
      </div>
    </div>
  );
}

export default CreateInvoice;

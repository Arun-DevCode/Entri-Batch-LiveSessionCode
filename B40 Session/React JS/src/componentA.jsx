import ComponentB from "./componentB";

function ComponentA() {
  const message = "You eb bill generated";
  const price = 300;
  const thisYear = new Date();

  let status; // declare

  function updateEBBillStatus(message) {
    console.log(message);
  }

  return (
    <div>
      <h1>{message}</h1>
      <ComponentB
        ebBill={price}
        month={thisYear.getMonth()}
        updateStatus={updateEBBillStatus}
      />
      <p>{status}</p>
    </div>
  );
}

export default ComponentA;

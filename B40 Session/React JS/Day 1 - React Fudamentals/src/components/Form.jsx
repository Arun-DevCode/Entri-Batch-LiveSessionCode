function Form() {
  function getValueFromInput(event) {
    if (event) {
      const inputValue = event.target.value;
      console.log("Input triggered for :", inputValue);
    }
    console.log("input triggered with manual");
  }

  return (
    <>
      <h1>Welcome To Form</h1>
      <input
        type="text"
        placeholder="Enter your amount"
        id="input"
        onChange={getValueFromInput}
      />
    </>
  );
}

export default Form;

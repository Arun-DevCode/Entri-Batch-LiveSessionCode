function ComponentB(props) {
  const monthOfYear = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const status = "Eb Bill Paid for";
  props.updateStatus(status);
  return (
    <div>
      <p>Child : Component B </p>
      <span>{monthOfYear[props.month]}</span>
      <h3>Price: {props.ebBill}</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/RP24azXeyHY?si=5PaYnGasr-W-xCOh"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default ComponentB;

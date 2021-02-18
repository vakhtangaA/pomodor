function TimeControl(props) {
  var style;

  if (props.id === "break-label") {
    style = {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      textAlign: "center",
      fontSize: "2em",
      height: "140px",
      marginBottom: "20px",
      color: "white",
      padding: "10px",
    };
  } else {
    style = {
      textAlign: "center",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "2em",
      height: "140px",
      marginBottom: "20px",
      color: "white",
      padding: "10px",
    };
  }

  return (
    <div style={style}>
      <p id={props.id} style={{ width: "100%" }}>
        {props.name}
      </p>
      <span id={props.lengthId} style={{ width: "100%" }}>
        {props.defaultLength}
      </span>
      <button
        id={props.decrementId}
        style={{
          margin: "5px",
          padding: "10px",
          borderRadius: "30px",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
        className="fas fa-arrow-down"
        onClick={props.handleDecrement}
      ></button>

      <button
        style={{
          margin: "5px",
          padding: "10px",
          borderRadius: "30px",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
        id={props.incrementId}
        className="fas fa-arrow-up"
        onClick={props.handleIncrement}
      ></button>
    </div>
  );
}

export default TimeControl;

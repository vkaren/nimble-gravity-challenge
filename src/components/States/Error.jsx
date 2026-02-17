const Error = ({ message }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <p
        style={{
          color: "#e91515",
          fontSize: "1.5rem",
        }}
      >
        {message} 😞
      </p>
    </div>
  );
};

export default Error;

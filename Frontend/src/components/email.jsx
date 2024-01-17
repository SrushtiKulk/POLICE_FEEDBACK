import "./email.css"

function xyz() {
  return (
    <div className="emails">
      <div className="lorem1">
        <p>For regular updates share your Email address. We will keep you updated.</p>
      </div>

      <div className="form">
        <input
          type="text"
          placeholder="Your email address"
          value=""
        />
        <button className="normal" >
          Submit
        </button>
      </div>
    </div>

  );
};

export default xyz;
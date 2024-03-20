import "./Form.css";

export const Form = () => {
  return (
    <div className="form">
      <div className="form-container">
        <p className="form-heders">Contact</p>
        <form className="form-block">
          <input type="text" placeholder="Your name" />
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="Your email"
          />
          <input type="text" id="subject" placeholder="Subject" />
          <input type="textarea" id="message" placeholder="Message" />
          <input type="submit" value="Send" className="button-submit" />
        </form>
      </div>
    </div>
  );
};

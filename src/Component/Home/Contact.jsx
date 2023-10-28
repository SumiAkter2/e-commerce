import img from "../../assets/contact/contact.jpg";

const Contact = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <img src={img} className="lg:max-w-2xl rounded-lg " />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-primary font-mono lg:text-4xl text-3xl font-bold lg:text-start mb-6">
              Contact Us
            </h1>
            <form>
              <div className="grid  gap-2 mb-6">
                <input
                  type="text"
                  placeholder=" Name"
                  className="input  input-primary w-full max-w-sm"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="input  input-primary w-full max-w-sm"
                />
                <input
                  type="text"
                  placeholder="Text here"
                  className="input  input-primary w-full max-w-sm"
                />
                <textarea
                  type="text"
                  placeholder="Message"
                  className="textarea  textarea-primary w-full max-w-sm"
                />
                <input
                  type="Submit"
                  defaultValue="Send Message"
                  className="btn btn-primary w-full max-w-sm text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

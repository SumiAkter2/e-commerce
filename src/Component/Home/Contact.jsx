import img from "../../assets/contact/contact.png";

const Contact = () => {
  return (
    <div className="my-12">
      <div className="md:flex justify-center items-center ">
        <img src={img} className=" rounded-lg mb-12 px-6" />

        <div className="md:w-1/2 mx-auto text-center text-black px-6 ">
          <h1 className="md:text-5xl text-4xl font-bold  my-6 uppercase text-cyan-700">
            Get In Touch
          </h1>
          <p className="my-8 font-bold">
            Fill out the form and we will get back to you within 24 hours, or
            scroll down for more way to get in touch.
          </p>

          <form>
            <div className="grid md:grid-cols-2  gap-2 mb-6">
              <input
                type="text"
                placeholder="Type Name"
                className="input  input-primary w-full max-w-sm"
              />
              <input
                type="text"
                placeholder="abcd@abc.com"
                className="input  input-primary w-full max-w-sm"
              />
              <input
                type="text"
                placeholder="Text here"
                className="input  input-primary w-full max-w-sm"
              />
              <input
                type="Submit"
                defaultValue="Contact Us"
                className="btn btn-primary w-full max-w-sm text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

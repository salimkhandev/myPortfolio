

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold text-center">Contact Me</h2>
        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border px-3 py-2"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

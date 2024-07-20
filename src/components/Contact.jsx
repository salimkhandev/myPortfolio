const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
      <div className="relative z-10 max-w-md w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Contact Me</h2>
        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border px-3 py-2 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border px-3 py-2 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-700">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border px-3 py-2 rounded-md"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

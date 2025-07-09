// src/app/components/Contact.tsx

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-4 flex flex-col items-center"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Send me a message!</h2>
        <p className="text-lg text-gray-300">
          Do you have any questions or a project proposal? Go ahead{" "}
          <span className="text-xl">😊</span>
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-[#0d0f13] w-full max-w-xl rounded-2xl p-10 shadow-xl">
        <form
          action="https://formspree.io/f/xpwrbvzb"
          method="POST"
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message here..."
              required
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full border border-yellow-400 text-yellow-400 font-bold py-3 rounded-md hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
}

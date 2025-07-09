// src/app/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-8 mt-20">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Alon Iliagouev. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Nolahuhu" // 🔁 Update with your actual GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alon-iliagouev-8b4868369/" // 🔁 Update with your actual LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:alono@live.de" // 🔁 Replace with your actual email
            className="hover:text-gray-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

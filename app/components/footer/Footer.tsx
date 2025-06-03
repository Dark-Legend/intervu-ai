import { Mail, Phone, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            <span className="text-emerald-400">Intervu</span>AI
          </h2>
          <p className="text-sm text-gray-400">
            AI-powered interviewer that simplifies and streamlines the hiring
            process with auto-generated interview flows and smart assessments.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                How it Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Demo Interview
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <Mail className="mr-2" size={16} />
              <a
                href="mailto:contact@intervuai.com"
                className="hover:text-white"
              >
                contact@intervuai.com
              </a>
            </li>
            <li className="flex items-center">
              <Phone className="mr-2" size={16} />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center space-x-4 mt-4">
              <a href="#" className="hover:text-white">
                <Github size={18} />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} IntervuAI. All rights reserved.
      </div>
    </footer>
  );
};

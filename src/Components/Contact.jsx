import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        robot: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all required fields.");
            return;
        }
        if (!formData.robot) {
            alert("Please confirm you're not a robot.");
            return;
        }

        setFormData({ name: "", email: "", subject: "", message: "", robot: false });
        alert("Message sent successfully!");
    };

    return (
        <div id="contact" className="bg-black min-h-screen text-white md:py-16 px-4">
            <h1 className="[font-family:'Syne'] text-6xl md:text-9xl font-bold mb-10">Get In Touch</h1>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">

                <form onSubmit={handleSubmit} className="flex-1 bg-gray-900 p-6 rounded-lg shadow-md space-y-4 border border-gray-600">
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Full Name"
                            className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email Address"
                            className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us a bit about your project or inquiry"
                        className="bg-gray-800 border border-gray-700 rounded-md p-2 w-full h-32 resize-none"
                        required
                    >
                    </textarea>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" name="robot" checked={formData.robot} onChange={handleChange} />
                        <span>I'm not a robot</span>
                    </div>
                    <button type="submit" className="bg-white text-black w-full py-2 rounded-md font-semibold hover:bg-gray-200 transition">Send Message</button>
                </form>

                <div className="flex-1 flex flex-col space-y-6">
                    <img src="/Contact.jpg" alt="Workspace" className="rounded-lg w-full object-cover border border-gray-600" />
                    <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-4">
                        <span className="text-white text-lg">📧</span>
                        <div>
                            <p className="font-semibold">Email Me</p>
                            <p className="text-gray-400">anktisainibkbiet2022@gmail.com</p>
                        </div>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-4">
                        <span className="text-white text-lg">📞</span>
                        <div>
                            <p className="font-semibold">Call Me</p>
                            <p className="text-gray-400">+91 7340472175</p>
                        </div>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-4">
                        <span className="text-white text-lg">⏱️</span>
                        <div>
                            <p className="font-semibold">Response Time</p>
                            <p className="text-gray-400">Fast replies are my thing, usually within 24 hours.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;

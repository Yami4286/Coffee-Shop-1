import { useState } from "react";

function Contact() {
    const locations = [
  {
    id: 1,
    name: "Coffee Shop - Mall Road",
    address: "123 Mall Road, Lahore",
    description: "Our flagship store with cozy vibes and strong espresso.",
  },
  {
    id: 2,
    name: "Coffee Shop - DHA",
    address: "45 Phase 6, DHA, Lahore",
    description: "Modern café setup, perfect for working and meetings.",
  },
  {
    id: 3,
    name: "Coffee Shop - Islamabad",
    address: "Blue Area, Islamabad",
    description: "Quiet, aesthetic spot with mountain air vibes.",
  }
];

     const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // for now just log it (no backend yet)
    console.log("Form Data:", form);

    alert("Message sent (fake send, but emotionally real)");

    setForm({ name: "", email: "", message: "" });
  };
  
  const image = "https://images.unsplash.com/photo-1607681034540-2c46cc71896d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

 return(<div className="min-h-[40vh] flex flex-col">
    <div className="min-h-[40vh] bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${image}}` }}>
        <div className="bg-black/60 min-h-[40vh] text-white text-center text-2xl md:text-4xl font-bold p-6">
        <div className="">
            Get In Touch </div> 
            <div className="font-light text-2xl p-2 text-amber-400 ">
                We will love to hear out from you
            </div>
            </div>
    </div>
   <div className="flex flex-col lg:flex-row w-full">
     
     <div className="w-full lg:w-1/2 bg-amber-50 pt-16 pb-16 px-4">
  <div className="max-w-4xl mx-auto space-y-6">

    <h2 className="text-3xl font-bold text-zinc-950 mb-10 pl-2">
      Where to Find Us
    </h2>

    {locations.map((place) => (
      <div
        key={place.id}
        className="flex items-start gap-6 bg-white p-8 rounded-xl shadow-sm border border-zinc-100 transition hover:shadow-lg hover:-translate-y-1"
      >

        {/* ICON */}
        <div className="flex-shrink-0 bg-amber-100 rounded-full p-6 text-amber-900 shadow-inner">
          📍
        </div>

        {/* CONTENT */}
        <div className="flex-grow pt-1">

          <p className="text-lg font-bold text-zinc-950">
            {place.name}
          </p>

          <p className="text-sm font-semibold text-amber-900 mt-1">
            {place.address}
          </p>

          <p className="text-zinc-600 mt-3 leading-relaxed max-w-xl">
            {place.description}
          </p>

        </div>

      </div>
    ))}

  </div>
</div>

    
     <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-6 sm:p-10 rounded-2xl shadow-lg flex flex-col gap-4"
      >
        <h1 className="text-2xl sm:text-3xl font-bold">
          Contact Us
        </h1>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-amber-500"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-amber-500"
          required
        />

        {/* Message */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-amber-500 resize-none"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
   </div>
 </div>);
}
export default Contact
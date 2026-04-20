import Me from "./Images/me.jpeg"
import Son from "./Images/son.jpeg"
function Story() {

    const teamMembers = [
  {
    id: 1,
    name: "The Barista",
    relation: "Son",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61qQF-swSbjsxK1VThRikS3xNujsIsGNJqQ&snpo" , // Update with your actual path
    description: "My son, the barista—I'm very proud of him. He truly makes the customers happy with every cup he serves."
  },
  {
    id: 2,
    name: "The Chef",
    relation: "Son",
    image: "https://img.freepik.com/free-photo/young-man-with-charming-smile-blue-eyes-posing_176420-15602.jpg?semt=ais_hybrid&w=740&q=80" , // Update with your actual path
    description: "My other son, and I'm really proud of him too. He has become the best chef in town, bringing incredible flavor to our kitchen."
  },
  {
    id: 3,
    name: "The Owner",
    relation: "Father",
    image:  "https://img.freepik.com/free-photo/portrait-wise-person_52683-100915.jpg?semt=ais_hybrid&w=740&q=80", // Update with your actual path
    description: "As the father and owner, I've seen exactly how far our business has come. It’s been an incredible journey for our family."
  }
];

    const image = "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (<div >
        <div className="min-h-[40vh]  w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image}}` }}>
            <div className=" min-h-[40vh] w-full bg-black/60">
                <div className="text-center pt-10 text-2xl text-amber-400 md:text-4xl lg:text-6xl font-bold flex flex-col gap-3" >
                    <div >
                        Our Journey
                    </div>
                    <div className="font-light text-2xl md:text-3xl p-2">
                        Started as a small coffee shop in 2020
                    </div>
                </div>
            </div>
        </div>
     <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 overflow-hidden rounded-xl  backdrop-blur-md border border-white/10 p-10">
  
  {/* Image Side - Now takes up half and covers the area */}
  <div className="md:w-1/2 min-h-[300px] rounded-b-lg">
    <img 
      src={image} 
      alt="Our Coffee Journey" 
      className="h-full w-full object-cover rounded-3xl" 
    />
  </div>

  {/* Text Side - Vertically centered next to the image */}
  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
  <h1 className="text-4xl text-amber-400 font-bold p-3">Since 2020</h1>
    <p className="text-lg md:text-xl text-black leading-relaxed font-light italic">
      "What started as a single vintage roaster in a quiet garage has grown into a destination 
      for those who seek the perfect pour. We believe that great coffee is an art form, 
      which is why we meticulously track every harvest from soil to steam. By prioritizing 
      direct-trade relationships, we ensure that every bean honors the hands that grew 
      it and the craft of the roast."
    </p>
  </div>

</div>
<div className="text-center font-bold text-amber-400 text-4xl p-10">Meet our Family</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
  {teamMembers.map((member) => (
    <div key={member.id} className="bg-white backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200 shadow-2xl transition-transform hover:scale-105">
      {/* Card Image */}
    <div className="h-72 w-full overflow-hidden">
  <img 
    src={member.image} 
    alt={member.name} 
  className="w-full h-full object-cover object-[center_14%]"
  />
</div>

      {/* Card Content */}
      <div className="p-6">
        <span className="text-xs font-bold uppercase tracking-widest text-black">
          {member.relation}
        </span>
        <h3 className="text-xl font-semibold text-black mt-2">
          {member.name}
        </h3>
        <p className="text-black mt-4 leading-relaxed italic">
          "{member.description}"
        </p>
      </div>
    </div>
  ))}
</div>
    </div>);
}

export default Story
import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Home() {


    const reasons = [
        {
            id: 1,
            title: "Ethically Sourced Beans",
            description: "Premium beans from sustainable local farms."
        },
        {
            id: 2,
            title: "Master Roasters",
            description: "Daily in-house roasting for peak aroma."
        },
        {
            id: 3,
            title: "Expert Baristas",
            description: "Certified artists crafting every single cup."
        },
        {
            id: 4,
            title: "Cozy Atmosphere",
            description: "The perfect space for creative inspiration."
        }
    ];

    const reviews = [
        {
            id: 1,
            name: "Ali Khan",
            description: "Best coffee I’ve had in years. Rich, smooth, no bitterness at all.",
            stars: 5
        },
        {
            id: 2,
            name: "Sara Ahmed",
            description: "Lovely atmosphere. Coffee is great, desserts even better.",
            stars: 4
        },
        {
            id: 3,
            name: "Usman Tariq",
            description: "Cold brew was strong and clean. Exactly what I wanted.",
            stars: 5
        }
    ];

    const menuItems = [
        {
            id: 1,
            name: "Golden Croissant",
            price: "$3.75",
            image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500",
            description: "Flaky buttery layers baked fresh."
        },
        {
            id: 2,
            name: "Velvet Cupcake",
            price: "$4.25",
            image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=500",
            description: "Rich cream frosting on chocolate."
        },
        {
            id: 3,
            name: "Vanilla Latte",
            price: "$4.50",
            image: "https://plus.unsplash.com/premium_photo-1723759448747-1d174225e61f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Smooth espresso with sweet vanilla."
        },
        {
            id: 4,
            name: "Cold Brew",
            price: "$5.00",
            image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500",
            description: "Bold coffee steeped sixteen hours."
        }
    ];

    const [Image, SetImage] = useState(menuItems[0].image);

    const image = "https://images.unsplash.com/photo-1548051072-b34898021f8b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <>
            {/* // this is hero section */}
            <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }}>
                <div className=" mx-auto scale-z-100 h-full bg-black/70 transition-transform duration-75">
                    <div className="text-center text-amber-400 font-bold pt-32 md:pt-40 px-4">

                        <div className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
                            The Coffee
                        </div>

                        <div className="text-white text-4xl sm:text-5xl lg:text-6xl">
                            Shop
                        </div>

                        <div className="p-4 font-light text-lg sm:text-xl lg:text-2xl text-white max-w-2xl mx-auto">
                            The taste your tongue craves
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white mt-6">

                            <button className="bg-amber-400 text-black px-6 py-2 rounded-3xl hover:bg-amber-600 hover:shadow-xl transition">
                                Explore Menu
                            </button>

                            <button className="border-2 border-amber-400 px-6 py-2 rounded-3xl hover:bg-amber-700 transition">
                                Our Story
                            </button>

                        </div>

                    </div>

                </div>
            </div>
            {/* This is after hero section */}
            <div className="bg-amber-100">
                <div className="text-center p-12 font-bold text-amber-700 text-4xl">
                    Why Choose Coffee Shop
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-20 lg:justify-center gap-6 px-6 justify-items-center">
                    {reasons.map((reason, index) => (
                        <div key={index} className="Reasons"> <div className="text-amber-700 font-bold"> {reason.title} </div>
                            <div className="font-light"> {reason.description}</div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center text-center p-10 text-4xl font-bold text-amber-700 gap-3 ">
                    <div>
                        Tongue Cravers
                    </div>
                    <div className="font-light text-3xl">Something Your tongue will crave for</div>
                </div>

                <div className="flex flex-col   md:flex-row gap-10 justify-center items-center p-6">
                    <div>
                        <img
                            src={Image}
                            alt="Selected item"
                            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-lg transition-all duration-300 m-6 "
                        />
                    </div>

                    <div className="flex flex-col gap-6 w-100 mt-8npm">
                        {menuItems.map((menu, index) => (
                            <div key={index} onClick={() => SetImage(menu.image)}
                                className="menu">
                                <div>  <div>{menu.name}</div>
                                    <div> {menu.description}</div>
                                </div>
                                <div>{menu.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex gap-6 justify-center flex-wrap p-10 bg-amber-700">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="w-80 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                    >
                        {/* NAME */}
                        <div className="font-bold text-lg text-amber-700">
                            {review.name}
                        </div>

                        {/* DESCRIPTION */}
                        <div className="text-gray-600 text-sm mt-2">
                            {review.description}
                        </div>

                        {/* STARS */}
                        <div className="flex text-amber-500 mt-3 gap-1">
                            {Array.from({ length: review.stars }, (_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
           <div
  className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600')",
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* CONTENT */}
  <div className="relative bg-black/60 p-10 rounded-2xl text-white flex flex-col gap-6 w-[80%] max-w-4xl">

    <div>
      <h1 className="text-4xl font-bold">Coffee Experience</h1>
      <p className="text-sm text-gray-300">
        Smooth, rich, and brewed like tradition intended.
      </p>
    </div>

    <div className="flex flex-col gap-2">
      <p>Freshly roasted beans</p>
      <p>Perfect latte art</p>
    </div>

    <div className="flex justify-end">
      <button className="px-6 py-2 bg-amber-500 hover:bg-amber-600 rounded-full transition">
        Find Us
      </button>
    </div>

  </div>
</div>

        </>
    )
}

export default Home
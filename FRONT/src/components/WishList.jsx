import { useState, useEffect } from "react";

function WishList() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    try {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlist(storedWishlist);
    } catch (error) {
      console.error("Erreur lors de la récupération de la wishlist:", error);
      setWishlist([]);
    }
  }, []);

  const clearWishlist = () => {
    if (window.confirm("Êtes-vous sûr de vouloir vider votre wishlist ?")) {
      setWishlist([]);
      localStorage.setItem("wishlist", JSON.stringify([]));
    }
  };

  if (wishlist.length === 0) {
    return (
      <div className="grow">
        <p className="text-center mt-10 text-lg">Vos favoris sont vide.</p>
      </div>
    );
  }

  return (
    <div className="grow p-4">
      <h1 className="text-2xl font-bold mb-4">Mes favoris</h1>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
        onClick={clearWishlist}
      >
        Vider la wishlist
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="border rounded p-4 shadow hover:shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.price} €</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                if (
                  window.confirm(
                    "Êtes-vous sûr de vouloir retirer cet article de votre wishlist ?"
                  )
                ) {
                  const updatedWishlist = wishlist.filter(
                    (item) => item.id !== product.id
                  );
                  setWishlist(updatedWishlist);
                  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
                }
              }}
            >
              Retirer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishList;

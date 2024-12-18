import { useState } from "react";


function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
 
      const data = await response.json();
      if (response.ok) {
        console.log("Inscription réussie :", data);
        alert("Inscription réussie !");
      } else {
        console.error("Erreur :", data);
        alert("Erreur : " + data.error.message);
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      alert("Erreur réseau : " + error.message);
    }
  };

  return (
  
    <div className="grow flex justify-center items-center ">
      <div className="">
        <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded-2xl shadow-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-700">Créer un compte</h2>
        <div>
          <label htmlFor="username" className="block text-sm text-gray-600">
            Nom d'utilisateur
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-red-400"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-red-400"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm text-gray-600">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-red-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-400 text-white py-2 rounded  transition"
          >
          Créer mon compte
        </button>
      </form>
      </div>
    </div>
  )
}

export default Register
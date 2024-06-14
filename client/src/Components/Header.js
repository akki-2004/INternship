
import * as React from "react";

export default function MyComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5ea7b7986be93adfb4390d859ec99d82b4fd2406a606dae1bc5906670b94bec2?apiKey=2a2e623823b0415fbd05deed2eac8bf5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ea7b7986be93adfb4390d859ec99d82b4fd2406a606dae1bc5906670b94bec2?apiKey=2a2e623823b0415fbd05deed2eac8bf5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ea7b7986be93adfb4390d859ec99d82b4fd2406a606dae1bc5906670b94bec2?apiKey=2a2e623823b0415fbd05deed2eac8bf5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ea7b7986be93adfb4390d859ec99d82b4fd2406a606dae1bc5906670b94bec2?apiKey=2a2e623823b0415fbd05deed2eac8bf5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ea7b7986be93adfb4390d859ec99d82b4fd2406a606dae1bc5906670b94bec2?apiKey=2a2e623823b0415fbd05deed2eac8bf5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ea7b7986be93adfb4390d859ec99d82b4fd2406a606dae1bc5906670b94bec2?apiKey=2a2e623823b0415fbd05deed2eac8bf5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ea7b7986be93adfb4390d859ec99d82b4fd2406a606dae1bc5906670b94bec2?apiKey=2a2e623823b0415fbd05deed2eac8bf5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ea7b7986be93adfb4390d859ec99d82b4fd2406a606dae1bc5906670b94bec2?apiKey=2a2e623823b0415fbd05deed2eac8bf5&"
          className="img"
        />
        <div className={`div-2 ${isMenuOpen ? "open" : ""}`}>
          <div className="div-3">Home</div>
          <div className="div-4">Store</div>
          <div className="div-5">Contact</div>
          <div className="div-6">Seller</div>
          <div className="div-7">Avatar</div>

        </div>
         <button className="div-9">SignUp / LogIn</button>
         <button className="div-10">LogIn</button>

        <button className="menu-toggle" onClick={toggleMenu}>
          Menu
        </button>
      </div>
      <style jsx>{`
      .div-10{
      display:none;
      }
        .div {
          border-radius: 4px;
          background-color: #fff;
          display: flex;
          align-items: center;
          gap: 20px;
          font-weight: 400;
          justify-content: space-between;
          padding: 0 33px 7px;
        }
       
        .img {
          aspect-ratio: 4.17;
          object-fit: auto;
          object-position: center;
          width: 200px;
          align-self: stretch;
          margin-top: 4px;
          max-width: 100%;
        }
        .div-2 {
          cursor: pointer;
          align-self: stretch;
          display: flex;
          align-items: center;
          gap: 13px;
          font-size: 20px;
          color: var(--Wireframe, #313131);
          white-space: nowrap;
          justify-content: space-between;
          margin: auto 0;
        }
        @media (max-width: 1032px) {
        .div {
            flex-wrap: wrap;
            padding: 0 20px;
          }
          .div-2 {
            display: none;
            flex-direction: column;
            width: 100%;
            background-color: #fff;
          }
          .div-2.open {
            display: flex;
          }
             .div-3,
            .div-4,
        .div-5,
        .div-6 , 
        .div-7 {
            width: 100%;
            text-align: center;
          }
          .div-10{
             border-radius: 4px;
          background-color: #f8444f;
          color: #fff;
          font-family: Poppins, sans-serif;
          padding: 12px 16px;
          // white-space: nowrap;
          display:inline;
          }
          .div-9{
          display:none;
          }
          
        }
        .div-3 {
          font-family: Poppins, sans-serif;
          border-radius: 4px;
          background-color: #f8444f;
          align-self: stretch;
          color: #fff;
          justify-content: center;
          padding: 8px 12px;
        }
        
        .div-4,
        .div-5,
        .div-6 , 
        .div-7 {
          font-family: Poppins, sans-serif;
          align-self: stretch;
          justify-content: center;
          padding: 8px 12px;
        }
      
        .div-7 {
          align-self: stretch;
        }
        .img-2 {
          aspect-ratio: 1.5;
          object-fit: cover;
          width: 40px;
          align-self: stretch;
          max-width: 100%;
        }
        .div-8 {
          align-items: center;
          display: flex;
          gap: 20px;
        }
       
        .div-9 {
          border-radius: 4px;
          background-color: #f8444f;
          color: #fff;
          font-family: Poppins, sans-serif;
          padding: 12px 16px;
          white-space: nowrap;
        }
       
        .menu-toggle {
          display: none;
        }
        @media (max-width: 1032px) {
         
          .menu-toggle {
            display: inline;
            border-radius: 4px;
            background-color: #f8444f;
            color: #fff;
            font-family: Poppins, sans-serif;
            padding: 12px 16px;
            white-space: nowrap;  
          }
        }
      `}</style>
    </>
  );
}

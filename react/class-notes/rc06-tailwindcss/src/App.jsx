import Typography from "./components/Typography";
import SpacingAndSizing from "./components/SpacingAndSizing";
import HoverFocus from "./components/HoverFocus";
import FlexAndResponsive from "./components/FlexAndResponsive";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";

// 1) terminalde vite kur
// npm create vite@latest


// 2)projeye gir 
// cd my-project


// 3)tailwind yükle
// npm install -D tailwindcss@3 postcss autoprefixer
// npx tailwindcss init -p





// 4) tailwind in hareketli hallerini kullanmak için bunu yükle
// npm install @headlessui/react @heroicons/react

// 5)index.css e bunları ekle
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
function App() {
  return (
    <>
      <Navbar />
     
      {/* <Typography /> */}
      {/* <SpacingAndSizing /> */}
      {/* <HoverFocus /> */}
      {/* <FlexAndResponsive /> */}
      <ProfileCard />
    </>
  );
}

export default App;

import "./index.css"; // Tailwind + shadcn theme. Must load before brand.css
import "@/styles/brand.css";
import "@/styles/tailwind.generated.css";
import HomePage from "@/pages/HomePage";

export default function App() {
  return <HomePage />;
}
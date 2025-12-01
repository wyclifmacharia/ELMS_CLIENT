import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";

 export const HeroSection = () => {
  const Employe = useSelector((state: RootState) => state.Employe.Employe); 
  const firstName=Employe?.first_name
  return (
    <section className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-6xl font-extrabold mb-4">
  {firstName ? (
    <span>Welcome Back, {firstName}!</span>
  ) : 
    <span>Streamline Your Leave Management</span>
  
  
  }
</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
          ELMS empowers organizations to manage employee leave requests, approvals,
          and balances with efficiency, transparency, and ease.
        </p>
        <div className="flex justify-center gap-6">
          <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion as Motion } from "framer-motion";
import Dashboard from "./dashboard/dashboard";

function App() {
  return (
    <div className="mx-[10px] my-[20px] md:mx-[60px] md:my-[40px] font-sans ">
      <Motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="text-[20px] md:text-3xl font-bold">
          Admin Monitoring Dashboard
        </h1>
        <span className="md:text-[18px] text-gray-600">
          Monitor parking status
        </span>
      </Motion.div>

      <div className="mt-[20px]">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

import { motion } from "framer-motion";
export default function Parking_layout() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="border rounded-[6px] border-gray-400 px-[15px] py-[25px] md:px-[25px] md:py-[30px] shadow my-[20px]">
        <div>
          <h1 className="text-[20px] md:text-2xl font-semibold">
            Parking Layout
          </h1>
          <span className="md:text-[18px]">Visualize the parking layout</span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-[10px] mt-[20px]">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <div
                key={item}
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] flex justify-center font-semibold text-[20px] items-center rounded-[6px] text-white odd:bg-green-500 odd:hover:bg-green-600 even:bg-red-500 even:hover:bg-red-600 transition-all ease-in-out duration-300 "
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

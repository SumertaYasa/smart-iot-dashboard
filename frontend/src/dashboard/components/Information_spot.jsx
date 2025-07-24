import { motion } from "framer-motion";
import { MapPin, Car, Users } from "lucide-react";

export default function Information_spot() {
  return (
    <div className="flex flex-col md:flex-row gap-[10px]">
      {/* Total spots */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full border flex flex-col gap-[40px] border-gray-400 px-[15px] py-[10px] rounded-[6px]  shadow"
      >
        <div className="flex justify-between items-center">
          <span className="text-[20px] md:text-2xl font-medium">
            Total Spots
          </span>
          <MapPin className="text-[20px]" />
        </div>
        <span className="text-[24px] md:text-4xl font-semibold">6</span>
      </motion.div>
      {/* Occupied */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full border flex flex-col gap-[40px] border-gray-400 px-[15px] py-[10px] rounded-[6px]  shadow"
      >
        <div className="flex justify-between items-center">
          <span className="text-[20px] md:text-2xl font-medium">Occupied</span>
          <Car className="text-[20px] text-red-500" />
        </div>
        <span className="text-[24px] md:text-4xl font-semibold text-red-500">
          3
        </span>
      </motion.div>
      {/* Available */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="w-full border flex flex-col gap-[40px] border-gray-400 px-[15px] py-[10px] rounded-[6px]  shadow "
      >
        <div className="flex justify-between items-center">
          <span className="text-[20px] md:text-2xl font-medium">Available</span>
          <Users className="text-[20px] text-green-500" />
        </div>
        <span className="text-[24px] md:text-4xl font-semibold text-green-500">
          3
        </span>
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";
import { fadeInOnScoll, fadeInUpSpring } from "@/motion/motionVariants";
import ButtonTertiary from "./ButtonTertiary"

const Trial = () => {
    return (
        <section className="xl:mb-32 w-full">
            <motion.div
              variants={fadeInOnScoll(0.2,0.6)}
              initial="hidden"
              whileInView="visible"
              className="py-24 w-full xl:max-w-[1140px] mx-auto min-h-[300px] bg-gradient-to-r from-accent via-accent_secondry to-accent h-full flex items-center xl:rounded-2xl">
                <div className="flex flex-col xl:flex-row items-center justify-between w-full xl:px-24">
                    <div>
                        {/* text */}
                        <div className="text-center mb-12 xl:mb-0 xl:text-left">
                            <h2 className="text-[40px] leading-tight font-bold mb-2">Start your 30-day free trial</h2>
                            <p className="lead max-w-[400px] xl:max-w-[560] mx-auto xl:mx-0">
                               Experience the full power of our platform with a 30-day free trial. No creadit card required.
                            </p>
                        </div>
                    </div>
                        {/* btn */}
                        <div>
                           <ButtonTertiary btnText="Ger started"/> 
                        </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Trial;
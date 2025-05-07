import { motion } from "framer-motion";
import { fadeInOnScoll, fadeInUpSpring } from "@/motion/motionVariants";
import ButtonTertiary from "./ButtonTertiary"
import ButtonSecondary from "./ButtonSecondary";

const Trial = () => {
    return (
        <section className="xl:mb-7 w-full">
            <motion.div
              variants={fadeInOnScoll(0.2,0.6)}
              initial="hidden"
              whileInView="visible"
              className="py-24 w-full xl:max-w-[1140px] mx-auto min-h-[300px] bg-[#ceaf67] h-full flex items-center xl:rounded-2xl">
                <div className="flex flex-col xl:flex-row items-center justify-between w-full xl:px-24">
                    {/* btn */}
                    <div className="mb-8">
                           <ButtonSecondary btnText="تواصل معنا"/> 
                    </div>
                    
                    <div>
                        {/* text */}
                        <div className="text-end mb-12 xl:mb-0 xl:text-right">
                            <h2 className="text-[40px] text-black leading-tight font-bold mb-2 mx-8">نحن هنا لضمان تجربة لا تنسى</h2>
                            <p className="lead max-w-[530px] xl:max-w-[560] mx-2 xl:mx-0">
                            شركتنا التي تتميز بفريق عمل يتمتع بالاحترافية والتخصص، إلى جانب شراكات استراتيجية قوية مع الشركات والجهات الحكومية. نسعى جاهدين لتحقيق تنظيم متميز وجودة عالية، متجاوزين توقعات العملاء بأفضل السبل الممكنة. نتفانى في تحقيق رؤى عملائنا ونسعى دوماً لتحقيق التميز في كل تفاصيل خدماتنا
                            </p>
                        </div>
                    </div>
                        
                </div>
            </motion.div>
        </section>
    )
}

export default Trial;
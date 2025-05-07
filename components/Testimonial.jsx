import { fadeInOnScoll } from "@/motion/motionVariants";
import {BiSolidQuoteLeft} from "react-icons/bi";
import { motion } from "framer-motion";

const testimonial = [
    {
        name: "مهمتنا",
        message: " توفير حلول شاملة لإدارة سلامة الحشود مصمصة خصيصاً للعملاء مدعومة بالعلم والتكنولوجيا، والتي تضمن سلامة الأحداث والاستمتاع بها، مما يجعلها لا تنسى لجميع الضيوف وتساهم في مجتمع آمن وحيوي.",
    },
    {
        name: "رؤيتنا",
        message: " تطمح شركتنا إلى أن تكون الرائدة في السوق الإقليمي في مجال تخطيط سلامة الأحداث وإدارة سلامة الحشود، من خلال تقديم حلول عالية الجودة ومبتكرة تتجاوز توقعات عملائنا، وتعزز الشراكات الطويلة الأمد، وتحدد معايير التميز في المجال.",
    },
    {
        name: "قيمنا",
        message: " الابتكار، الاحتراف، الشفافية، النزاهة، تحقيق رضا العملاء ، التطوير المهني.",
    },
    {
        name: "شغفنا",
        message: " نسعى لتحقيق التميز والإلهام، من خلال التزامنا الدائم بتعزيز الوعي والسلامة خلال الفعاليات، لضمان تجارب لا تنسى ملينة بالسعادة والرضا للجميع.",
    }

]

const Testimonial = () => {
    return (
        <section className="w-full xl:mb-32 flex justify-center items-center my-8">
            <div className="overflow-hidden">
                {/* text */}
                <motion.div
                  variants={fadeInOnScoll(0.2,0.4)}
                  initial="hidden"
                  whileInView="visible"
                  >
                    <h2 className="h2 mb-6 text-center text-black">لماذا نحن؟

                    </h2>
                    <p className="lead text-center mb-24">
                    ببساطة لأننا الخبراء المحترفين
                    </p>
                </motion.div>
                {/* card list */}
                <motion.div
                variants={fadeInOnScoll(0.2,0.6)}
                initial="hidden"
                whileInView="visible"
                className="flex">
                    <motion.div
                    initial={{x:0}}
                    animate={{x:"-100%"}}
                    transition= {{duration: 30, repeat: Infinity, ease: "linear"}}
                    className="flex"

                    >
                        {testimonial.map((item, index) => {
                            return (
                                <div key={index} className="relative text-right w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14">
                                    <BiSolidQuoteLeft className="text-green-800 mb-3 text-3xl"/>
                                    <p className="text-xl">{item.name}</p>
                                    <p className="mb-4 text-lg text-white/80">{item.message}</p>
                                </div>
                            )
                        })}
                    </motion.div>
                    {/* duplicat div */}
                    <motion.div
                    initial={{x:0}}
                    animate={{x:"-100%"}}
                    transition= {{duration: 30, repeat: Infinity, ease: "linear"}}
                    className="flex"

                    >
                        {testimonial.map((item, index) => {
                            return (
                                <div key={index} className="relative text-right w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14">
                                    <BiSolidQuoteLeft className="text-green-800 mb-3 text-3xl"/>
                                    <p className="text-xl">{item.name}</p>
                                    <p className="mb-4 text-lg text-white/80">{item.message}</p>
                                </div>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonial;
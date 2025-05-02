"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import { fadeInOnScoll, fadeInUpSpring } from "@/motion/motionVariants";

const icons = [
    {
        src: "/integrations/img1.png"
    },
    {
        src: "/integrations/img2.png"
    },
    {
        src: "/integrations/img3.png"
    },
    {
        src: "/integrations/img4.png"
    },
    {
        src: "/integrations/img5.png"
    },
    {
        src: "/integrations/img6.png"
    },
    {
        src: "/integrations/img7.png"
    },
    {
        src: "/integrations/img8.png"
    },
    {
        src: "/integrations/img9.png"
    },
    {
        src: "/integrations/img10.png"
    },
    {
        src: "/integrations/img11.png"
    },
    {
        src: "/integrations/img12.png"
    },

]

const iconAnimation = {
    initial: {
        opacity: 0,
        y: 60,
    },
    animate: (index) => ({
        opacity:1,
        y:0,
        transition: {
            delay: 0.05 * index,
        }
    })
}

const Integrations = () => {
    return (
        <section className="py-24 xl:py-32 min-h-[720px] xl:mt-32">
            <div className="container mx-auto flex flex-col justify-center items-center gap-8 xl:gap-16">
                {/* text */}
                <motion.div
                  variants={fadeInOnScoll(0.2, 0.6)}
                  initial="hidden"
                  whileInView="visible"
                  className="text-center">
                    <h2 className="h2 mb-3 text-black">خدماتنا</h2>
                    <h2 className="lead text-black">نحن نتخصص في تنظيم الفعاليات المبتكرة وتقديم تجارب فريدة ومميزة. يقوم فريقنا المؤهل وذو الخبرة بتحويل أي
                        مناسبة إلى لحظات لا تنسى. يدير الحدث الخاص بك خبراء محترفون ملتزمون بأدق التفاصيل، لذا استمتع بتجربة رائعة وممتعة دون قلق.</h2>
                </motion.div>
                {/* icon list */}
                <div className=" flex flex-wrap gap-8 w-full max-w-[1024px] mx-auto place-content-center mb-8">
                    {icons.map((icon, index) => {
                        return (
                            <motion.div
                             variants={iconAnimation}
                             initial="initial"
                             whileInView="animate"
                             custom={index}
                             className="relative w-[120px] h-[120px]" key={index}>
                                <Image src={icon.src} fill alt=""/>
                            </motion.div>
                        )
                    })}
                </div>
                {/* btn */}
                <motion.div
                 variants={fadeInUpSpring(0.6,0.8)}
                 initial="hidden"
                 whileInView="visible"
                 >
                    <Button btnText="تواصل معنا"/>
                </motion.div>
            </div>
        </section>
    )
}

export default Integrations;
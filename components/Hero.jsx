"use client";
import {motion, useScroll, useTransform } from "framer-motion";
import Header from "./Header";
import Button from "./Button";

const Hero = () => {
    const { scrollY } = useScroll()
    const imgTopPosition = useTransform(scrollY, [0,400], ["480px","240px"]);
    const imgScale = useTransform(scrollY,[0,200,1300],[1,1.4,1])
    const textOpacity = useTransform(scrollY, [0,200], [1,0])
    const textScale = useTransform(scrollY,[0,200],[1,0.8])
    const textDisplay = useTransform(scrollY, [0,800],["flex","none"])
    return (
        
      <section className="h-screen xl:h-[1600px] overflow-x-clip relative">
        <Header/>
        <div className="container mx-auto h-full flex items-center xl:items-start">
            {/* text */}
            <motion.div className="flex flex-col justify-center items-center gap-6 text-center fixed left-0 right-0 mt-24 xl:mt-[160px]"
             style={{
                opacity: textOpacity,
                scale: textScale,
                display: textDisplay
              }}>
              <h1 className="text-[60px] font-bold text-black tracking-[-0.5px] leading-none max-w-[800px] xl:max-w-max">رؤيتنا</h1>
              <p className="max-w-[680px] text-[20px] text-black/80 font-light px-8 xl:px-0 mb-2">تطمح شركتنا إلى أن تكون الرائدة في السوق الإقليمي في مجال تخطيط سلامة الأحداث وإدارة سلامة الحشود، من
                خلال تقديم حلول عالية الجودة ومبتكرة تتجاوز توقعات عملائنا، وتعزز الشراكات الطويلة الأمد، وتحدد معايير التميز في المجال.
              </p>
              <Button btnText="تواصل معنا"/>
            </motion.div>
            {/* img */}
            <motion.div className="hidden xl:flex w-full max-m-[960px] mx-auto h-[520px] bg-no-repeat sticky left-0 right-0"
                style={{
                    backgroundImage: "url('/hero/hero.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    top: imgTopPosition,
                    scale: imgScale
                }}
            >

            </motion.div>
        </div>
        

      </section>
    );
}
  
export default Hero
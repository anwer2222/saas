"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import {FaRegCheckCircle} from "react-icons/fa"

const featuresData = [
    {
        imgSrc: "/foc/img-1.png",
        title: "كاميرات المراقبة",
        description: "يتم ترتيب الكاميرات بشكل استراتيجي في مواقع محددة حول المكان لتغطية جميع الزوايا والتأكد من التقاط أي حدث غير مرغوب فيه أو نشاط مشبوه",
        highlights:[
            " توجيه الكاميرات نحو المداخل الرئيسية",
            "والمناطق ذات الحركة المرورية العالية",
            "لتوفير تغطية شاملة للأماكن الحيوية",
        ]
    },
    {
        imgSrc: "/foc/img-2.png",
        title: "إدارة المواصلات",
        description: "لضمان وصول الضيوف والمشاركين إلى الموقع بسهولة وأمان، هذا يتضمن",
        highlights:[
            "توفير حافلات مكوكية أو سيارات فان لنقل الحضور",
            "توفير وسائل نقل مريحة وفعالة من وإلى المطارات",
            "توفير سيارات فاخرة (بي إم دبليو، مرسيدس)",
        ]
    },
    {
        imgSrc: "/foc/img-3.png",
        title: "إدارة المواقف",
        description: "تهدف إدارة المواقف إلى توفير أماكن آمنة ومرتبة لوقوف السيارات",
        highlights:[
            "ويشمل ذلك توجيه السائقين إلى الأماكن المخصصة",
            "وتنظيم الأماكن بشكل فعال",
            "لاستيعاب عدد كبير من المركبات",
        ]
    },
    {
        imgSrc: "/foc/img-4.png",
        title: "إدارة المرور",
        description: "يقوم فريق متخصص للسلامة على الطرق بمتابعة الوضع بشكل دوري",
        highlights:[
            "وتقديم الإرشادات اللازمة للتأكد من الالتزام بمعايير السلامة",
            "وتعتبر هذه الخدمة حلقة أساسية في سلسلة الإجراءات الآمنة ",
            "والوقائية التي يجب اتباعها لضمان نجاح وسلامة الفعاليات",
        ]
    }

]


const Features = () => {
    const [index, setIndex] = useState(0);
    const [imgIndex, setImgIndex] = useState(0)
    
    useEffect(() => {setImgIndex(index);},[index])

    return (
        <section className="text-black pt-32 relative">
            <div className="container mx-auto">
                <div className="flex gap-16">
                    {/* img */}
                    <motion.div 
                      key={featuresData[index].imgSrc}
                      initial={{opacity:0}}
                      animate={{opacity:1}}
                      transition={{
                          duration: 0.4,
                          ease:[0.6, -0.05, 0.01,0.99],
                          delay: 0.2
                      }}
                      className="hidden xl:flex justify-center flex-1 w-full h-[420px] sticky top-[calc(50%-240px)]"
                    >
                        <div className="relative w-full h-full">
                            <Image
                              src={featuresData[imgIndex].imgSrc} 
                              fill
                              alt=""
                              className="h-full object-contain"
                            />
                        </div>
                    </motion.div>
                    {/* text */}
                    <div className="flex-1 flex flex-col gap-24">
                        {featuresData.map((item,itemIndex) => {
                            return (
                                <motion.div
                                  onViewportEnter={() => setIndex(itemIndex)}
                                  initial={{opacity:0}}
                                  whileInView={{opacity:1}}
                                  viewport={{amount:"all"}}
                                  key={itemIndex} className="w-full h-auto xl:h-[480px] flex items-center text-right pr-20">
                                    <div className="w-[80vw] xl:w-auto mx-auto xl:mx-0">
                                        <h2 className="h2 mb-4 text-black">{item.title}</h2>
                                        <p className="lead mb-9 text-black">{item.description}</p>
                                        {/* highlight */}
                                        <div className="flex flex-col gap-5 items-end">
                                            {item.highlights.map((highlight, index) => {
                                                return (
                                                    <div key={index} className="flex items-center gap-4 text-right">
                                                        <p>{highlight}</p>
                                                        <FaRegCheckCircle className="text-[#1a4f42] text-2xl"/>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </motion.div>

                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;
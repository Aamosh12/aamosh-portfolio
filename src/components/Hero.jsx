import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { TextAnimate } from '@/components/magicui/text-animate';

const HeroSection = ({ words }) => {
    return (
        <div className="flex items-center justify-center flex-grow">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4 py-12 max-w-4xl mx-auto"
            >
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center gap-2">
                    <TypewriterEffectSmooth words={words} />
                </div>

                <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
            
                    <TextAnimate animation="blurInUp" by='character' >
                        Developer and QA enthusiast crafting seamless digital     experiences.
                    </TextAnimate>
                </div>
            </motion.div>
        </div>
    );
}

export default HeroSection;
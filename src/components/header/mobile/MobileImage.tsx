import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React from 'react';

interface MobileImageProps {
    isMobileMenuOpen: boolean;
}

const MobileImage: React.FC<MobileImageProps> = ({ isMobileMenuOpen }) => {
    useGSAP(
        () => {
            gsap.from('.mobile-img', { duration: 0.5, opacity: 0, ease: 'power1.in' });
            gsap.to('.mobile-img', { duration: 0.5, opacity: 1, ease: 'power1.in' });
        },
        { dependencies: [isMobileMenuOpen] }
    );

    return (
        <>
            <Image
                width={500}
                height={500}
                src="/portfolio-img-bg-light.jpg"
                alt="Picture of me, Dido"
                className={`mobile-img rounded-full w-10 h-10 drop-shadow-2xl dark:block md:dark:hidden hidden ${
                    isMobileMenuOpen ? 'hidden' : 'block'
                }`}
            />
            <Image
                width={500}
                height={500}
                src="/portfolio-img-bg-dark.jpg"
                alt="Picture of me, Dido"
                className={`mobile-img rounded-full w-10 h-10 drop-shadow-2xl block dark:hidden sm:hidden ${
                    isMobileMenuOpen ? 'hidden' : 'block'
                }`}
            />
        </>
    );
};

export default MobileImage;

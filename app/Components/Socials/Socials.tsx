import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';

import React from 'react';

const Socials = React.forwardRef<HTMLUListElement>((props, ref) => {
    return (
        <ul
            ref={ref}
            className="opacity-0 flex flex-col absolute top-4 left-8 md:justify-center gap-6 text-raisin-black dark:text-silver">
            <li>
                <a href="#" className="text-silver dark:text-raisin-black">
                    <AiFillGithub size={34} />
                </a>
            </li>
            <li>
                <a href="#" className="text-silver dark:text-raisin-black">
                    <AiFillLinkedin size={34} />
                </a>
            </li>
            <li>
                <a href="#" className="text-silver dark:text-raisin-black">
                    <IoIosPaper size={34} />
                </a>
            </li>
        </ul>
    );
});

Socials.displayName = 'Socials';

export default Socials;
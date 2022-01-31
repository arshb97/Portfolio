import React from 'react';
import Design from '../img/computer.svg';
import MobileApp from '../img/mobile-app.svg';
import WebApp from '../img/development.svg';

const About = () => {
    const description =
        "I'm a developer, designer and a tech enthusiast from Vancouver. I created this website to document everything I learn and share a bit about myself to the world. My site has no ads, affiliates, sponsored posts or paywalls.";

    const renderBreakdowns = () => {
        const breakdowns = [
            {
                img: Design,
                title: 'Frontend dev / design',
                description:
                    'I have experience developing frontend applications using modern javascript frameworks.',
                subTitle: 'Things I love designing',
                subDesc: 'Websites, Wireframes, Prototypes',
                listTitle: 'Design Tools + Languages',
                list: [
                    'ReactJS',
                    'ExpressJS',
                    'HTML',
                    'CSS',
                    'Javascript'
                ]
            },
            {
                img: WebApp,
                title: 'Backend Development',
                description:
                    'I also love to get down to build websocket servers, and generally full-fledged backend apps.',
                subTitle: 'Things I love building',
                subDesc: 'Web applications, DevOps',
                listTitle: 'Dev tools + languages',
                list: [
                    'NodeJS',
                    'Docker',
                    'Kubernetes',
                    'Raspberry Pi',
                    'C++',
                    'Python',
                    'Java',
                    'VHDL',
                    'PostgreSQL',
                ]
            },
            {
                img: MobileApp,
                title: 'Mobile App Development',
                description:
                    'I have experience designing and developing Native iOS applications using swift and Xcode.',
                subTitle: 'Types I love developing',
                subDesc: 'iOS',
                listTitle: 'Development tools',
                list: [
                    'Swift',
                    'Objective-C',
                    'Xcode'
                ]
            }
        ];

        return breakdowns.map(breakdown => (
            <div className="about__breakdown col" key={breakdown.title.toLowerCase()}>
                <img src={breakdown.img} alt={breakdown.title} className="about__breakdown-img" />

                <h3 className="about__breakdown-title">{breakdown.title}</h3>
                <p className="about__breakdown-desc">{breakdown.description}</p>

                <p className="about__breakdown-subtitle">{breakdown.subTitle}</p>
                <p className="about__breakdown-subdesc">{breakdown.subDesc}</p>

                <p className="about__breakdown-subtitle">{breakdown.listTitle}</p>
                <ul className="about__breakdown-list">
                    {breakdown.list.map(elem => (
                        <li key={elem} className="about__breakdown-elem">
                            {elem}
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <div className="about">
            <div className="about__inner">
                <h2 className="about__title">Hello, I&apos;m Arshdeep. Nice to meet you 👋🏼</h2>

                <p className="about__text">{description}</p>

                {/* <a href="https://drive.google.com/file/d/1l7pllgtMDx5BFNsvk6nQgGeFOl24tKRH/view?usp=sharing" target="_blank" className="about__cv">
                    Resume &nbsp;
                    <i className="ti-file" />
                </a> */}
            </div>

            <div className="about__breakdowns grid grid--padded">{renderBreakdowns()}</div>
        </div>
    );
};

export default React.memo(About);

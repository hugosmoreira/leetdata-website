import React from 'react';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div className='w-full bg-black text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div>
          <h1 className='py-4'>A Growing Protocol Ecosystem</h1>
          <p className='py-4 text-xl'>
            The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>

          {/* Card Container */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

            {/* Card */}
            <AboutCard icon={<SiHiveBlockchain size={40} />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and
        cryptographic proofs to connect highly accurate and available
        data/APIs to any smart contract.' />

            <AboutCard icon={<SiFsecure size={40} />} heading='Team Augmentation' text='You might already have an internal core team that needs to tackle more than they can implement until certain deadlines. The best thing to do in this case is to divide and conquer. We will work within your agile processes together with your team.' />
            <AboutCard icon={<SiStrapi size={40} />} heading='Technical Assessment' text='The idea is give you enough information so  you understand your life cycle, productivity levels and quality levels of the software being produced. With this, you will also get advice on how to improve.' />
            <AboutCard icon={<VscServerProcess size={40} />} heading='Outsourcing' text='You will have a predictable cost and an expected delivery date and we will manage the implementation using agile best practices. The scope is variable and we frequently reassess what`s to be built, so you have the software you really need at the end.' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
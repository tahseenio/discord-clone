import React from 'react'
import Download from '../components/Download';
import InfoGeneral from '../components/InfoGeneral';
import ReliableTech from '../components/ReliableTech';

import study from '../assets/study-group.svg'
import coach from '../assets/coach.svg'
import hangingOut from '../assets/hanging-out.svg'

export default function Home() {
  return (
    <>
      {/* <img src={clouds} alt="" /> */}
      <Download />
      <InfoGeneral
        identifier={'study'}
        title={'Create an invite-only place where you belong'}
        para={'Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.'}
        image={study}
        bgColor={'white'}
      />
      <InfoGeneral
        identifier={'hangingOut'}
        title={'Where hanging out is easy'}
        para={`Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.`}
        image={hangingOut}
        bgColor={'#f6f6f6'}
        // row={'row'}
      />
      <InfoGeneral
        identifier={'coach'}
        title={'From few to a fandom'}
        para={'Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.'}
        image={coach}
        bgColor={'white'}
        // row={'row-reverse'}
      />
      <ReliableTech />
    </>
  )
}

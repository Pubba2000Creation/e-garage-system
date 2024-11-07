import team_01 from '@/public/team/1.png'
import team_02 from '@/public/team/2.png'
import team_03 from '@/public/team/3.png'
import team_04 from '@/public/team/4.png'
import team_05 from '@/public/team/5.png'
import team_06 from '@/public/team/6.png'
import team_07 from '@/public/team/7.png'

import TeamCard from '@/components/user/teamCard'

export default function OurTeam() {
  return (
    <>
      <section id="ourTeam" className="my-5">
        <h1 className="text-black my-8 text-2xl font-bold mb-10 text-center">
          Meet Our Team
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          
          <TeamCard 
            image={team_01.src} 
            position={'Founder'} 
            name={'Sandaruwan Kathri Arachchi'} 
          />

          <TeamCard
            image={team_02.src}
            position={'Business Analysts'}
            name={'Vishmi Edirimanna'}
          />
          <TeamCard
            image={team_03.src}
            position={'UI designer'}
            name={'GT Lakshan'}
          />
          <TeamCard
            image={team_04.src}
            position={'Front-End Developer'}
            name={'Hasitha Dhananjaya'}
          />
          <TeamCard
            image={team_05.src}
            position={'Back-End Developer'}
            name={'Probod Pubudu'}
          />
          <TeamCard
            image={team_06.src}
            position={'Mobile app developer'}
            name={'Vimukthi Jayasanka'}
          />
          <TeamCard
            image={team_07.src}
            position={'Mobile app developer'}
            name={'Senesh Hansana'}
          />
        </div>
      </section>
    </>
  )
}

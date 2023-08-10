import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { SiAmazonaws, SiReact, SiNodedotjs, SiTypescript, SiRuby, SiDocker } from 'react-icons/si'

export default function Home() {
  return (
    <div
      className='
        max-w-4xl
        flex
        flex-col
        justify-between
        m-auto
        p-4
        h-full
      '
    >
      <div
        className='
          flex
          flex-col
        '
      >
        <header
          className='
            w-full
            flex
            justify-between
            pt-2
            pb-8
          '
        >
          {/* <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}> */}
          {/* </IconContext.Provider> */}
          <div
            className='flex items-center gap-x-2'
          >
            <HiOutlineEnvelope />
            <span
              className='
                text-md
                text-slate-200
              '
            >lucasfilipeb@gmail.com</span>
          </div>
          <Link
            href="https://www.linkedin.com/in/lucasbittencurt/"
            target='_blank'
            className='
              hover:text-blue-400
              transition
              text-md
              text-slate-200
            '
          >LinkedIn</Link>
        </header>
        <main
          className='
            flex
            flex-col
            items-center
            justify-center
            py-6
          '
        >
          <Image
            src="https://pub-ba6b0506e0b84a5aba44020e756a6feb.r2.dev/me.jpeg"
            alt="Lucas Bittencurt photo"
            className="
              rounded-full
              border-none
              align-middle
            "
            width={140}
            height={24}
            priority
          />
          <span
            className='text-sm text-slate-400 pt-2'
          >{`Hey, I'm Lucas `}👋</span>
          <p
            className='text-2xl max-w-sm text-center pt-2 text-slate-200'
          >Crafting seamless experiences with code quality</p>
        </main>
        <section
          className='
            flex
            items-center
            justify-center
            py-8
          '
        >
          <span
            className='
              text-md
              text-slate-200
            '
          >Stack</span>
          <div className='w-[1px] h-[20px] bg-slate-600 mx-4' />
          <div
            className='
              flex
              gap-x-5
            '
          >
            <SiReact size={22} alt="React icon" ariaLabel="React" />
            <SiNodedotjs size={22} alt="Node.js icon" ariaLabel="Node.js" />
            <SiTypescript size={22} alt="Typescript icon" ariaLabel="Typescript" />
            <SiRuby size={22} alt="Ruby icon" ariaLabel="Ruby" />
            <SiAmazonaws size={22} alt="AWS icon" ariaLabel="AWS" />
            <SiDocker size={22} alt="Docker icon" ariaLabel="Docker" />
          </div>
        </section>
        <section
          className='
            flex
            justify-center
            md:justify-between
            w-full
            pt-6
            flex-wrap
            gap-4
          '
        >
          <div
            className='
              flex
              flex-col
            '
          >
            <span
              className='
                text-lg
                text-slate-200
                font-medium
                text-center
                md:text-left
              '
            >Professional</span>
            <div
              className='
                border
              border-slate-600
              bg-slate-900/80
                text-sm
                text-slate-200
                p-5
                rounded-md
                mt-2
                max-w-[400px]
              '
            >
              {`
                Experienced software engineer specialized in project and application development for a decade. Proficient in Cloud (AWS, Azure), Startup culture, DevOps, scalability, and small team management. Worked with monolithic apps and microservices in diverse settings. A constant learner, intrigued by technology choices and committed to sharing insights.
              `}
            </div>
          </div>
          <div
            className='
              flex
              flex-col
            '
          >
            <span
              className='
                text-lg
                text-slate-200
                font-medium
                text-center
                md:text-left
              '
            >Contracts with</span>
            <div className='flex gap-3'>
              <div
                className='
                  flex
                  items-center
                  justify-center
                  border
                border-slate-600
                bg-slate-900/80
                  p-5
                  rounded-md
                  mt-2
                  min-w-[168px]
                '
              >
                <Image
                  src="https://pub-ba6b0506e0b84a5aba44020e756a6feb.r2.dev/nearform_logo.png"
                  alt="NearForm logo"
                  width={130}
                  height={25}
                  priority
                />
              </div>
              <div
                className='
                  flex
                  items-center
                  justify-center
                  border
                border-slate-600
                bg-slate-900/80
                  p-5
                  rounded-md
                  mt-2
                  min-w-[168px]
                  opacity-50
                '
              >
                <Image
                  src="https://pub-ba6b0506e0b84a5aba44020e756a6feb.r2.dev/upwork_logo.png"
                  alt="Upwork logo"
                  width={90}
                  height={20}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer
        className='
          flex
          flex-col
          items-center
          justify-center
          w-full
          text-slate-300
          py-4
        '
      >
        <span>...</span>
        <span className='text-xs'>All rights reserved to Bittencurt Software Consultancy LTDA</span>
      </footer>
    </div>
  )
}

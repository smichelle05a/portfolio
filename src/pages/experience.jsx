/* eslint-disable @next/next/no-img-element */
import Layout from '../layout/Layout'
import ExperienceItem from '../blocks/ExperienceItem'
import xp from '../styles/experience.module.scss'

function Experience() {
  const experience = [
    {
      company: 'Araujo Espinoza & Asociados',
      logo: 'araujo',
      job: [
        {
          occupation: 'Accounting and Audit Assistant',
          from: '09/2014',
          to: '12/2015',
          description: [
            'Process the accounting of SMEs in the commercial branch',
            'Analyze and reconcile ledger accounts, perform taxes calculations',
            'Verify compliance with accounting, tax and internal control regulations'
        ],
        },
      ],
    },
    {
      company: 'Freelance',
      logo: 'freelance',
      job: [
        {
          occupation: 'Public Accountant',
          from: '01/2016',
          to: '05/2016',
          description: [
            'Process the accounting of SMEs in the commercial branch',
            'Analyze and reconcile ledger accounts, perform taxes calculations',
            'Guide those responsible for SMEs in fiscal and tax information'
        ],
        },
      ],
    },
    {
      company: 'Deloitte',
      logo: 'deloitte2',
      job: [
        {
          occupation: 'Audit Assistant',
          from: '08/2016',
          to: '11/2017',
          description: [
            'Document and evaluate the main cycles for the economic activity of the company',
            'Write reports on the audit work and its conclusions',
            'Document and analyze audit evidence'
        ],
        },
      ],
    },
    {
      company: 'Acciona IT',
      logo: 'acciona',
      job: [
        {
          occupation: 'Treasury Analyst at Citibank',
          from: '12/2017',
          to: '05/2018',
          description: [
            'Perform policy compliance indicators periodically',
            'Verify compliance with internal policies and their adequate documentation'
        ],
        },
      ],
    },
    {
      company: 'Deloitte',
      logo: 'deloitte2',
      job: [
        {
          occupation: 'Audit Assistant',
          from: '05/2018',
          to: '06/2019',
          description: [
            'Document and evaluate the main cycles for the economic activity of the company',
            'Write reports on the audit work and its conclusions',
            'Document and analyze audit evidence'
          ],
        },
        {
          occupation: 'Audit Senior',
          from: '07/2019',
          to: '01/2021',
          description: ['Manage audit team time and tasks', 'Supervise and guide the team in the tasks to be carried out', 'Communicate with the client and manage the exchange of information'],
        },
      ],
    },
    {
      company: 'Freelance',
      logo: 'freelance',
      job: [
        {
          occupation: 'Frontend Web Developer',
          from: '09/2021',
          to: 'Present',
          description: [
            'Design pages and components for a web page',
            'Use SCSS, Vue CLI and Axios to fetch data from the API and develop the web page',
            'Make code deliveries every two weeks to obtain feedback and make changes if they are needed'
          ],
        },
      ],
    },
    {
      company: 'Rooftop',
      logo: 'rooftop',
      job: [
        {
          occupation: 'Community Builder',
          from: '12/2021',
          to: 'Present',
          description: [
            'Find talented programmers and motivate them to connect through our community',
            'Help to build a space with people that share the same interests and values'
          ],
        },
      ],
    },
  ]
  const reverseExperience = experience.reverse()
  return (
    <Layout>
      <h2 className='fs-36 py-3 txt-center'>Work Experience</h2>
      <div className={`${xp.timeline} d-flex fw-wrap fs-14 p-3 grow-1`}>
      {reverseExperience.map((exp, index) => {
            return (
              <div className={`${xp.timeline__item} w-100 d-flex jc-center ${index % 2 == 0 ? "" : `${xp.timeline__itemFlipped}`}`} key={index}>
                <div className={`${xp.timeline__item__hidden}`}></div>
                <div className={`${xp.timeline__item__arrow} ${xp.timeline__item__arrowHidden}`}></div>
                <div className={`jc-center ai-center d-flex ${xp.timeline__item__logo}`}>
                  <img src={`./assets/company-logos/${exp.logo}.png`} alt={exp.company} className={`bg-light circle`} />
                </div>
                <ExperienceItem exp={exp}/>
                <div className={`${xp.timeline__item__arrow} as-center`}></div>
              </div>
            )
          })}
      </div>
    </Layout>
  )
}

export default Experience

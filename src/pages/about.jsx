/* eslint-disable @next/next/no-img-element */
import Layout from '../layout/Layout'
import Icon from '../components/Icon';
import about from '../styles/about.module.scss'

function About() {

  let technologies = [
    {
      icon: 'html',
      description: 'HTML5'
    },
    {
      icon: 'css',
      description: 'CSS3'
    },
    {
      icon: 'sass',
      description: 'SASS'
    },
    {
      icon: 'javascript',
      description: 'JavaScript'
    },
    {
      icon: 'typescript',
      description: 'Typescript'
    },
    {
      icon: 'react',
      description: 'React.Js'
    },
    {
      icon: 'vue',
      description: 'Vue.Js'
    },
    {
      icon: 'git',
      description: 'Git'
    },
  ]

  let skills = [
    {
      icon: 'creativity',
      description: 'Creativity'
    },
    {
      icon: 'leadership',
      description: 'Leadership'
    },
    {
      icon: 'teamwork',
      description: 'Teamwork'
    },
  ]
  return (
    <Layout>
      <h2 className='fs-36 py-3 txt-center'>About me</h2>
      <div className='container d-flex fw-wrap jc-center'>
        <div className={`p-3 row jc-center ai-center ${about.container}`}>
          <div className={`col col-12 fs-16 gap-2 d-flex fd-col`}>
            <p> I&apos;m a Web Developer with knowledge in HTML, CSS, Bootstrap, JavaScript, Vue Js and React. </p>
            <p> I&apos;m a really curious person and love to learn about tech subjects, programming languages, frameworks and web development tools. </p>
            <p> Currently I&apos;m still studying to continue evolving in my career as a Frontend Developer. </p>
          </div>
        </div>
        <div className={`row p-3 jc-center ai-center grow-1 fw-wrap ${about.containerIcons}`}>
              <div className={`${about.container} ${about.containerIcons__section}`}>
                <div className={`col col-12 fs-14 gap-2 d-flex fd-col`}>
                  <h3 className={`txt-center fs-18 fw-800 border-bottom pb-1`}> TECNOLOGIES I WORK WITH </h3>
                  <div className={`d-flex fw-wrap gap-2 jc-around`}>
                    {technologies.map((tech, index) => {
                      return(
                        <div key={index} className={`fs-36 d-flex fd-col jc-center ai-center p-1`}>
                          <Icon props={tech.icon}/>
                          <p className={`txt-center fs-14 p-1`}> {tech.description} </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className={`${about.container} ${about.containerIcons__section}`}>
                <div className={`col col-12 fs-14 gap-2 d-flex fd-col`}>
                  <h3 className={`txt-center fs-18 fw-800 border-bottom pb-1`}> MY SKILLS </h3>
                  <div className={`d-flex fw-wrap gap-2 jc-around`}>
                    {skills.map((skill, index) => {
                      return(
                        <div key={index} className={`fs-36 d-flex fd-col jc-center ai-center p-1`}>
                          <Icon props={skill.icon}/>
                          <p className={`txt-center fs-14 p-1`}> {skill.description} </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
        </div>
    </Layout>
  );
}

export default About;

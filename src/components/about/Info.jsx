import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className='bx bx-briefcase-alt-2'></i>

            <h3 className="about__title">Web migrations</h3>
                <span className="about__subtitle">40+ client websites</span>
        </div>

        <div className="about__box">
        <i className='bx bx-git-branch'></i>

            <h3 className="about__title">Lead workflows</h3>
                <span className="about__subtitle">17+ implementations</span>
        </div>

        <div className="about__box">
        <i className='bx bx-message-rounded-dots' ></i>

            <h3 className="about__title">Languages</h3>
                <span className="about__subtitle">Spanish + English C1</span>
        </div>

    </div>
  )
}

export default Info

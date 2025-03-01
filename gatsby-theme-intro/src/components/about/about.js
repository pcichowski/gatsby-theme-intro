import React from "react"
import { ProfileType } from "../../types"

const About = ({ about }) => (
  <>
    <h5 className="font-header font-semibold text-front dark:text-front-dark text-sm uppercase mt-12 mb-4">
      About
    </h5>
    <div className="font-text text-sm pb-12 leading-normal whitespace-pre-line">
      {about}
    </div>
  </>
)

About.propTypes = {
  about: ProfileType.about,
}

export default About

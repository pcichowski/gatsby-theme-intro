import React from "react"
import { FaCompass } from "react-icons/fa"
import { shape, ProfileType } from "../../types"

const Summary = ({ profile }) => (
  <div className="flex pb-8">
    <div className="w-1/2 pr-4 lg:pr-12 border-r border-line dark:border-line-dark">
      <h5 className="font-header font-semibold text-front dark:text-front-dark text-sm uppercase mb-1">
        Employment
      </h5>
      <h3 className="font-header font-light text-2xl text-front dark:text-front-dark leading-tight">
        {profile.company}
      </h3>
      {profile.for_hire && (
        <div className="font-header font-semibold text-xs uppercase pt-2">
          <span className="inline-block w-2 h-2 rounded-full mr-1 bg-green-500"></span>
          Available for hire
        </div>
      )}
    </div>
    <div className="w-1/2 pl-4 lg:pl-12">
      <h5 className="font-header font-semibold text-front dark:text-front-dark text-sm uppercase mb-1">
        Education
      </h5>
      <div className="font-header font-light text-2xl text-front dark:text-front-dark leading-tight">
        {profile.education}
      </div>
      <div className="font-header font-light text-xl text-front dark:text-front-dark leading-tight mt-1">
        {profile.education_description}
      </div>
    </div>
  </div>
)

Summary.propTypes = {
  profile: shape(ProfileType),
}

export default Summary

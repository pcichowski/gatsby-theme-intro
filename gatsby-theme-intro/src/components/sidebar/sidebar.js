import React from "react"
import Location from "./location"
import ProfileImage from "./profile-image"
import { arrayOf, shape, ProfileType, SocialType } from "../../types"
import SocialLinks from "../social-links/social-links"
import About from "../about/about";

const Sidebar = ({ profile, social }) => (
  <aside className="w-full lg:w-1/3 lg:border-r border-line dark:border-line-dark lg:px-6 xl:px-4">
    <div className="flex flex-col h-full">
      <div>
        <h2 className="font-header font-light text-front dark:text-front-dark text-2xl leading-none mb-4">
          {profile.profession}
        </h2>
        <h1 className="font-header font-black text-front dark:text-front-dark text-5xl leading-none break-words mb-6">
          {profile.name}
        </h1>
        {profile.image && (
          <ProfileImage image={profile.image} name={profile.name} />
        )}
        <br />
        {profile.location && (
          <Location
            location={profile.location}
            relocation={profile.relocation}
          />
        )}
      </div>

      <div className="pt-8 pb-12 lg:py-0 mt-12">
        <h5 className="font-header font-semibold text-front dark:text-front-dark text-sm uppercase mb-4">
          Socials
        </h5>
        <SocialLinks social={social} />
      </div>

      {profile.about && <About about={profile.about} />}
    </div>
  </aside>
)

Sidebar.propTypes = {
  profile: shape(ProfileType),
  social: arrayOf(shape(SocialType)),
}

export default Sidebar

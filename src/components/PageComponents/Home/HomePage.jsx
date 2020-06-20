import React from 'react'

import Hero from './Hero'
import NewPatient from './NewPatient'
import MeetDoctor from './MeetDoctor'
import Specialize from './Specialize'
import Testimonial from './Testimonial'
import DetailsTimeTable from './DetailsTimeTable'
import DetailsTimeTableMobile from './DetailsTimeTableMobile'
import Affiliates from './Affiliates'

import HeroMobileCTA from './HeroMobileCTA'

const HomePage = () => (
<>
<Hero />
<HeroMobileCTA />
<DetailsTimeTableMobile />
<NewPatient />
<MeetDoctor />
<Specialize />
<Testimonial />
<Affiliates />
<DetailsTimeTable />
</>
)

export default HomePage
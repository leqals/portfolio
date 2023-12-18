import React from 'react'

const SectionTitle = ({title='Projects', description='Here is the frankenstain shit he be doing.😂😂', direction='flex-row'}) => {
  return (
    <div className={`w-full flex-between flex-col md:flex-row ${direction}`}>
        <h3 className="text-[3rem] md:text-[8rem] font-osw text-white-trans font-semibold ">{title}</h3>
        <p className="content text-white-100 max-w-[13rem]">{description}</p>
    </div>
  )
}

export default SectionTitle
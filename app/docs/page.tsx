import BrowseByCategory from '@/components/OnlyDocs/BrowseByCategory'
import CTADocs from '@/components/OnlyDocs/CTADocs'
import DocsBTNTag from '@/components/OnlyDocs/DocsBTNTag'
import DocsTagLine from '@/components/OnlyDocs/DocsTagLine'
import FindComponents from '@/components/OnlyDocs/FindComponents'
import HowItWorks from '@/components/OnlyDocs/HowItWorks'
import USPSteps from '@/components/OnlyDocs/USPSteps'
import WhatsInside from '@/components/OnlyDocs/WhatsInside'
import React from 'react'

function DocsPage() {
  return (
    <div className='px-2 max-w-3xl lg:max-w-xl xl:max-w-4xl 2xl:max-w-7xl mx-auto space-y-5 pt-3'>
      <DocsBTNTag />
      <DocsTagLine />
      <USPSteps />
      <FindComponents />
      <WhatsInside />
      <BrowseByCategory />
      <div id='howitworks'>
        <HowItWorks />
      </div>
      <CTADocs />
    </div>
  )
}

export default DocsPage
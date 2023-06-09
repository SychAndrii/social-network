import Image from 'next/image'
import PageBlock from './components/elements/PageBlock'
import Cover from './Cover'
import Avatar from './Avatar'
import ProfileBasicInfo from './ProfileBasicInfo'

export default function Home() {
  return (
    <>
      <PageBlock>
        <Cover />
      </PageBlock>
      <PageBlock>
        <ProfileBasicInfo />
      </PageBlock>
    </>
  )
}

import PageBlock from './components/elements/PageBlock'
import Cover from './Cover'
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

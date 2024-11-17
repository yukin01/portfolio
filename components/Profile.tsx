import { FC } from 'react'
import Image from 'next/image'
import profile from '../public/profile.png'

type Site = {
  name: string
  url: string
}

const Profile: FC = () => {
  const sites: Site[] = [
    { name: 'GitHub', url: 'https://github.com/yukin01' },
    { name: 'X (Twitter)', url: 'https://x.com/_yukin01' },
    { name: 'SpeakerDeck', url: 'https://speakerdeck.com/yukin01' },
    { name: 'Zenn', url: 'https://zenn.dev/yukin01' },
    { name: 'Qiita', url: 'https://qiita.com/yukin01' }
  ]
  return (
    <div>
      <Image src={profile} alt="Profile image" width={240} height={240} style={{ borderRadius: '120px' }} />
      <h2>Kinjo Yuji - @yukin01</h2>
      <ul>
        {sites.map((site) => (
          <li key={site.name} style={{ marginBottom: '5px' }}>
            <a href={site.url} target="_blank" rel="noreferrer noopener">
              {site.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Profile

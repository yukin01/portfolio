import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import profile from '../public/profile.png'

import x from '../public/icons/x.png'
import github from '../public/icons/github.png'
import speakerDeck from '../public/icons/speaker-deck.png'
import zenn from '../public/icons/zenn.svg'
import qiita from '../public/icons/qiita.png'

type Site = {
  name: string
  url: string
  icon: StaticImageData
  size: number
}

const Profile: FC = () => {
  const sites: Site[] = [
    { name: 'GitHub', url: 'https://github.com/yukin01', icon: github, size: 24 },
    { name: 'X (Twitter)', url: 'https://x.com/_yukin01', icon: x, size: 24 },
    { name: 'SpeakerDeck', url: 'https://speakerdeck.com/yukin01', icon: speakerDeck, size: 32 },
    { name: 'Zenn', url: 'https://zenn.dev/yukin01', icon: zenn, size: 24 },
    { name: 'Qiita', url: 'https://qiita.com/yukin01', icon: qiita, size: 24 }
  ]
  return (
    <div>
      <Image src={profile} alt="Profile image" width={240} height={240} style={{ borderRadius: '120px' }} />
      <h2 style={{ textAlign: 'center' }}>Kinjo Yuji - @yukin01</h2>
      <p style={{ textAlign: 'center' }}>SRE / Platform Engineer</p>
      <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', paddingLeft: 0 }}>
        {sites.map((site) => (
          <li
            key={site.name}
            style={{
              width: '32px',
              height: '32px',
              margin: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <a href={site.url} target="_blank" rel="noreferrer noopener">
              <Image src={site.icon} alt={site.name} width={site.size} height={site.size} unoptimized />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Profile

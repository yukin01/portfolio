import React, { FC } from 'react'

type Site = {
  name: string
  url: string
}

const Profile: FC = () => {
  const sites: Site[] = [
    { name: 'GitHub', url: 'https://github.com/yukin01' },
    { name: 'Twitter', url: 'https://twitter.com/_yukin01' },
    { name: 'SpeakerDeck', url: 'https://speakerdeck.com/yukin01' },
    { name: 'Qiita', url: 'https://qiita.com/yukin01' }
  ]
  return (
    <div>
      <img src="/profile.png" alt="Profile image" />
      <p>Kinjo Yuji (yukin01)</p>
      {sites.map((site) => (
        <div key={site.name}>
          <a href={site.url} target="_blank" rel="noreferrer noopener">
            {site.name}
          </a>
        </div>
      ))}
    </div>
  )
}

export default Profile

import faker from 'faker'
import React, { useEffect, useState } from 'react'
import Story from './Story'

function Stories() {
  const [suggestions, setSuggestions] = useState([]);


   {/* FAKE DATA */}
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
    console.log(suggestions);
  }, [])

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 broder-gray-200 border 
    rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {suggestions.map(profile => (
        <Story key={profile.id} 
        img='https://s.yimg.com/ny/api/res/1.2/vkZ20B2QZ6guE8CnXVcZSg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ0NA--/https://s.yimg.com/uu/api/res/1.2/XamaQNMsNc5X.PufnA4acw--~B/aD01MDQ7dz03MjY7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en-US/homerun/hello_giggles_454/49a08573f6a8083dc13fe9af47fcec8f' 
        username={profile.username} />
      ))}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  )
}

export default Stories

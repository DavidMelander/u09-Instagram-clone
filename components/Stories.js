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
        img={'https://media.gq.com/photos/599db9f8021601733ff6a5f6/master/pass/the-joker-movie.jpg'} 
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

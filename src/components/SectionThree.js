import React from 'react';
import News from './News';
import'../styles/SectionThree.css';

function SectionFour() {
  return (
    <div className='sectionThree'>
      <h3>News</h3>
      <div className='newsArticle'>
        <News 
          src='https://images.unsplash.com/photo-1510936723039-063b76afd29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRodW5kZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
          headline='Thunder Strikes Delhi'
        />
        <News 
          src='https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNsb3VkJTIwc3Rvcm18ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
          headline='Cloudstorms in Manipur'
        />
        <News 
          src='https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3VkcyUyMGJlc2lkZSUyMHN1bnxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60'
          headline="It's Summer season in Mumbai"
        />
      </div>
    </div>
  )
}

export default SectionFour
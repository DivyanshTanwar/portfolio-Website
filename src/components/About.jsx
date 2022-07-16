import React from 'react'

const About = () => {
  return (
    <div name="about" className='w=full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Hey!!! I am Junior in Netaji Subhas University of Technology currently pursuing Electronics and Communication Engineering.
            I am a Tech Enthusiast and likes working on new technologies.</p>

            <br />

            <p className='text-xl'> I have developed a few projects like Blogging website, portfolio website and have implemented some Machine Learning Models like Face Recognition,Helmet and Number Plate Detection and Volume Control Using Hand Gesture etc.</p>
        </div>
    </div>
  )
}

export default About
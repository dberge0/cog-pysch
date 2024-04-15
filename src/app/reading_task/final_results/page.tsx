'use client'
import React from 'react';
import { useRouter } from 'next/navigation'

const InstructionsPage: React.FC = () => {
    const router = useRouter();
  
    // Function to handle navigation
    const redirectToPage = () => {
      router.push('/finish'); // Replace '/target-page' with your desired path
    };

    return (
        <div className="flex items-center justify-center h-screen bg-white">
    <div className="flex p-[10%] items-center justify-center h-screen">
      <div className=" m p-12  rounded-2xl bg-white prounded-xl shadow-2xl flex items-center space-x-4">
        <div>
          <p className="text-lg font-medium text-black pb-4 h-100vm leading-7">
          How did you do? You likely found that trying to multitask was difficult. In this lab of the Museum of Cognitive Psychology, you participated in a <b>divided attention task</b>, where you participated in two tests. One of the tests involved paying attention to things that require more similar cognitive resources, such as reading and writing, while the other one involved concurrent tasks requiring mostly different cognitive resources, such as reading and bouncing a ball.
          <br/>
          <br/>
          The most common result is that, if multitasking,  paying attention to the primary task is easier while performing another task that you are comfortable doing and which requires different cognitive resources. Attention is limited, and multitasking requires dividing attention. When multiple tasks pull from the same finite pool of mental resources, they compete. This phenomenon is often called interference, where one task interferes with the other due to resource competition. Dividing attention is easier if the concurrent tasks differ in the required cognitive resources (and don’t interfere), and harder if the concurrent tasks do compete for cognitive resources. As such, if you read, you most likely found your reading comprehension when bouncing the ball to be better than your performance when writing. If you watched the video or played the game, it is less clear which secondary task will compete more- this is part of what we are researching.
          <br/>
          <br/>
          Even when tasks are very different, it is still difficult to multitask. If you tried a new, similar primary task without one of the secondary tasks, you would likely find that you would perform better. In the next room, you will see how this is especially the case when tasks require executive control.
          <br/><br/>
          Understanding these principles can be helpful in your life. Next time you start watching Netflix while working, consider that you might not be multitasking as well as you think you are. Whenever you would like to multitask, know that it will be much easier if the tasks require different cognitive resources. If you are writing a paper, consider listening to classical music instead of music with language that requires processing. Knowing one’s limited cognitive resources when performing tasks is essential. It highlights the importance of prioritizing tasks and minimizing distractions to enhance productivity and performance.         </p>
          <div className="pb-5">
        </div>
          <div className="px-44"> 
          <div className="pb-2">
          <button
            onClick={redirectToPage}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            Finish
          </button>
          </div>
          
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  };
  
  export default InstructionsPage;
  
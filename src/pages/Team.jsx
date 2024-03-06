import React from 'react';
import img from '../assets/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg'

const Team = () => {
  return (
    <div className="teamContainer bg-white p-8">
      <h1 className="text-2xl font-bold mb-4">Team</h1>
      <p className="mb-6 text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus temporibus eligendi esse inventore sapiente fugit explicabo dolores, a aut saepe.
      </p>
      <div className="membercards flex flex-col space-y-6">
        {/* Member Card 1 */}
        <div className="memcard bgb p-4 rounded-md flex items-center">
          <div>
            <img src={img} alt="" className="w-32 h-32 rounded-sm mr-4" />
          <h3 className='font-semibold'>Name here</h3>
          <p className='text text-gray-500'>Designation</p>
          </div>
          
            <div className="ml-10 description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, qui unde! Optio voluptatibus tempore rem consequuntur quibusdam hic natus, ullam ipsa repudiandae beatae!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sapiente quod libero inventore repudiandae pariatur suscipit commodi aliquam est quaerat?
          </div>
        </div>

        {/* Member Card 2 */}
        <div className="memcard bgb p-4 rounded-md flex items-center">
          <div>
            <img src={img} alt="" className="w-32 h-32 rounded-sm mr-4" />
          <h3 className='font-semibold'>Name here</h3>
          <p className='text text-gray-500'>Designation</p>
          </div>
          
            <div className="ml-10 description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, qui unde! Optio voluptatibus tempore rem consequuntur quibusdam hic natus, ullam ipsa repudiandae beatae!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sapiente quod libero inventore repudiandae pariatur suscipit commodi aliquam est quaerat?
          </div>
        </div>

        {/* Member Card 3 */}
        <div className="memcard bgb p-4 rounded-md flex items-center">
          <div>
            <img src={img} alt="" className="w-32 h-32 rounded-sm mr-4" />
          <h3 className='font-semibold'>Name here</h3>
          <p className='text text-gray-500'>Designation</p>
          </div>
          
            <div className="ml-10 description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, qui unde! Optio voluptatibus tempore rem consequuntur quibusdam hic natus, ullam ipsa repudiandae beatae!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sapiente quod libero inventore repudiandae pariatur suscipit commodi aliquam est quaerat?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

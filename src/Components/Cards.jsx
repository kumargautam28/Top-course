import React, { useState } from 'react'
import Card from'./Card'
const Cards = (props) => {
  let courses=props.courses;
  let category=props.category;
  const [likedCourses,setLikedCourses]=useState([]);
  
  function getCourses(){
    if(category==="All"){
    let allCourses=[];
    //taking all the values from Courses array
    //traversing ForEachloop two times ---> one for each array & other for traversing each element of single array
    Object.values(courses).forEach(array=>{
      array.forEach(courseData=>{
        allCourses.push(courseData);//pushing all values in allCourse array
      })
    
    })
    return allCourses;
  }
  else{
    //only specific category pass krunga
    return courses[category];
  }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4" >
      {
        getCourses().map((courses)=>(
          <Card key={courses.id} 
          courses={courses} 
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}/>
        ))
      }
        
    </div>
  )
}

export default Cards

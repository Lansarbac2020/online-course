const {gql, default: request} = require("graphql-request")
const MASTER_URL="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getAllCourseList=async(search ='')=>{
  const query=gql`
  query Courses {
    courses  (first: 20, orderBy: createdAt_DESC) {
     author
      name
      id
      free
      description
      demoUrl
      banner {
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      totalChapters
      sourceCode
      tag
      slug
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result
}

const getSideBanner=async()=>{
  const query=gql`
  query GetSideBanner {
    sideBanners {
      id
      name
      banner {
        id
        url
      }
      url
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result
}


const getCourseById=async(courseId)=>{
  const query=gql`
  query MyQuery {
    courseList(where: {slug: "`+courseId+`"}) {
      author
      banner {
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      demoUrl
      sourceCode
      description
      free
      name
      slug
      tag
      totalChapters
    }
  }
  
  `
  const result = await request(MASTER_URL, query);
  return result
}

const enrollToCourse=async(courseId, email)=>{
  const query =gql`
  mutation MyMutation {
    createUserEnrollCourse(
      data: {courseId: "`+courseId+`", userEmail: "`+email+`", courseList: {connect: {slug: "`+courseId+`"}}}
    ) {
      id

    }
    publishManyUserEnrollCoursesConnection {
      edges {
        node {
          id
        }
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result
}

const checkeUserEnrolledToCourse= async (courseId, email)=>{
  const query = gql`
  query MyQuery {
    userEnrollCourses(where: {courseId: "`+courseId+`", userEmail: "`+email+`"}) {
      id
    }
  }
  
  `
  const result = await request(MASTER_URL, query);
  return result
}

const getUserEnrolledCourseDetails=async(id, email)=>{
  const query=gql`
  query MyQuery {
    userEnrollCourses(where: {id: "`+id+`", userEmail: "`+email+`"}) {
      courseId
      id
      userEmail
      completedCahpter {
        ... on CompletedChapter {
          id
          chapterId
        }
      }
      courseList {
        author
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            shortDesc
            video {
              url
            }
          }
        }
        demoUrl
        description
        free
        id
        name
        slug
        sourceCode
        totalChapters
      }
    }
  }
  
  `
  const result = await request(MASTER_URL, query);
  return result
}

const markChapterCompleted=async(enrollId, chapterId)=>{
  const query =gql`
  mutation MyMutation {
    updateUserEnrollCourse(
      data: {
      isCompleted: true
      completedCahpter: {create: {CompletedChapter: {data: {chapterId: "`+chapterId+`"}}}}}
      where: {id: "`+enrollId+`"}
    )
    {
      id
      isCompleted
    }
    publishUserEnrollCourse(where: {id: "`+enrollId+`"}
    ) {
      id
    }
  } 
  
  `
  const result = await request(MASTER_URL, query);
  return result
}


const getUserAllEnrolledCourseList =async(email)=>{
  const query =gql`
  query MyQuery {
    userEnrollCourses(where: {userEmail: "`+email+`"}) {
      completedCahpter {
        ... on CompletedChapter {
          id
          chapterId
        }
      }
      courseId
      courseList {
        id
        name
        totalChapters
        slug
        sourceCode
        free
        description
        demoUrl
        chapter(first: 50)  {
          ... on Chapter {
            id
            name
          }
        }
        author
        banner {
          url
        }
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result
} 

const AddNewMember=async(email ,paymentId)=>{
  const query=gql`
  mutation MyMutation {
    createMembership(data: {active: true, email: "`+email+`", paymentId: "`+paymentId+`"}) {
      id
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result


}
// searchbar
const SEARCH_COURSES = async (searchTerm) => {
  const query = gql`
    query SearchCourses($searchTerm: String!) {
  courses(where: {
    OR: [
      { name_contains: $searchTerm },
      { description_contains: $searchTerm }
    ]
  }) {
    id
    name
    author
    description
  }
}
  `;

  try {
    // Pass the variable in the third argument of the `request` function
    const variables = { searchTerm }; // Equivalent to { "searchTerm": "React" }
    const result = await request(MASTER_URL, query, variables); 
    return result;
  } catch (error) {
    console.error("GraphQL Error:", error.response || error);
    throw error;
  }
};
//get completedCoursesList
const getCompletedCourses = async (email) => {
  const query = gql`
    query GetCompletedCourses {
      userEnrollCourses(
        where: { userEmail: "` + email + `", isCompleted: true }
      ) {
        id
        courseId
        courseList {
          id
          name
          slug
          author
          banner {
            url
          }
          description
          totalChapters
        }
      }
    }
  `;
  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching completed courses:", error.response || error);
    throw error;
  }
};


// Example Usage
SEARCH_COURSES("React")
  .then((data) => console.log("Courses:", data))
  .catch((err) => console.error("Error:", err));

 

export default{
    getAllCourseList,
    getSideBanner,
    getCourseById,
    enrollToCourse,
    checkeUserEnrolledToCourse,
    getUserEnrolledCourseDetails,
    markChapterCompleted,
    getUserAllEnrolledCourseList,
    AddNewMember,
    SEARCH_COURSES,
    getCompletedCourses
    

}
const evaluations = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 70
  },
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 60
  },
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 50
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 60
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 50
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 40
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 45
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 35
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 25
  }
 ];
function courses() {
  let courseName = evaluations[0].courseName ;
  let courseName2 = evaluations[1].courseName ;
  let Course1 =[];
  let course2 = [];
  let course3 = [];
  for (let i = 0; i < evaluations.length; i++) {
    if (courseName == evaluations[i].courseName) {
      Course1.push(evaluations[i])
    } else if(courseName2 == evaluations[i].courseName) {
      course2.push(evaluations[i])
    } else {
      course3.push(evaluations[i])
    }
  }
  let sum1=0;
  for (let i = 0; i < Course1.length; i++) {
    sum1 = sum1 + Course1[i].score;
  }
  let average1 = sum1 / Course1.length;
  let result1= [Course1[0].courseName,average1];
  result1.push()
  let sum2=0;
  for (let i = 0; i < course2.length; i++) {
    sum2 = sum2 + course2[i].score;
  }
  let average2 = sum2 / course2.length;
  let result2 = [course2[0].courseName,average2];
  result2.push()
  let sum3=0;
  for (let i = 0; i < course3.length; i++) {
    sum3 = sum3 + course3[i].score;
  }
  let average3 = sum3 / course3.length;
  let result3= [course3[0].courseName,average3];
  result3.push()
console.log(result1)
console.log(result2)
console.log(result3)
} 
courses()
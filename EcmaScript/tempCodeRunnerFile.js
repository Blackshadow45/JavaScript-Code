const student = Object.create(null);
  console.log(typeof student);
  student.name = "vinod";
  // console.log(student.hasOwnProperty("name"));
  console.log(Object.hasOwn(student, "name"));
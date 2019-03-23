import axios from "axios";

export const register = newUser => {
  return axios
    .post("students/register", {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
    })
    .then(res => {
      console.log("Registerd Successfully");
      return res.data;
    });
};

export const update = newUser => {
  return axios
    .post("students/update", {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      phoneNumber: newUser.phoneNumber,
      about_me: newUser.about_me,
      city: newUser.city,
      country: newUser.country,
      company: newUser.company,
      school: newUser.school,
      hometown: newUser.hometown,
      language: newUser.language,
      gender: newUser.gender
    })
    .then(res => {
      console.log("Updated Successfully");
      return res.data;
    });
};

export const login = user => {
  return axios
    .post("students/login", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const addCourse = course => {
  return axios
    .post("faculty/addCourse", {
      course_ID: course.course_ID,
      course_name: course.course_name,
      course_dept: course.course_dept,
      course_description: course.course_description,
      course_room: course.course_room,
      course_capacity: course.course_capacity,
      faculty_email: course.faculty_email
    })
    .then(res => {
      console.log("Course Added Succesfully");
    });
};

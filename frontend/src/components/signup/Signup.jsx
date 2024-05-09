import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from "yup";
import classes from './signup.module.css';
import img from '../../assets/images/womaneating.jpg';

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const schema = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(3).max(50).required("Please enter your password"),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log(values);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <div className={classes.signUpContainer}>
      <div className={classes.signUpWrapper}>
        <div className={classes.signUpLeftSide}>
          <img src={img} alt='regimage' className={classes.leftImg} />
        </div>
        <div className={classes.signUpRightSide}>
          <h2 className={classes.title}>Register</h2>

          <form onSubmit={handleSubmit} className={classes.signUpForm}>
            <input
              type='text'
              placeholder='Enter your name'
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name ? <div>{formik.errors.name}</div> : null}

            <input
              type='email'
              placeholder='Enter your email'
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <input
              type='password'
              placeholder='Enter your password'
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}

            <button type='submit' className={classes.submitBtn}>
              Sign Up
            </button>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;





















// import React, { useState } from "react";
// import classes from "./signup.module.css";
// import img from "../../assets/images/womaneating.jpg";
// import { Link, useNavigate,  } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from 'react-redux'
// import { register } from '../../redux/authSlice'

// const Signup = () => {
//   const navigate = useNavigate();
//   const [error, setError] = useState(false);
//   const dispatch = useDispatch()

//   const schema = Yup.object().shape({
//     name: Yup.string().required("Please enter your name"),
//     email: Yup.string().email("Invalid Email!").required("Please enter your email"),
//     password: Yup.string().required("Please enter your password!").min(6),
//   });

//   const formik = useFormik({
//     initialValues: { name: "", email: "", password: "" },
//     validationSchema: schema,
//     onSubmit: async (values) => {
//       try {
//         const res = await fetch(`http://localhost:4000/api/user/register`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//         });
//         const data = await res.json();

//         dispatch(register(data))
      
//         navigate("/"); 
//       } catch (error) {
//         setError(true);
  
//         setTimeout(() => {
//           setError(false);
//         }, 3000);
//       }
//     },
//   });

//   const { errors, touched, values, handleChange, handleSubmit } = formik;

//   return (
//     <div className={classes.signUpContainer}>
//       <div className={classes.signUpWrapper}>
//         <div className={classes.signUpLeftSide}>
//           <img src={img} className={classes.leftImg} alt="Woman Eating" />
//         </div>
//         <div className={classes.signUpRightSide}>
//           <h2 className={classes.title}>Sign Up</h2>
//           <form className={classes.signUpForm} onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Type name"
//               name="name"
//               value={values.name}
//               onChange={handleChange}
//             />
//             {errors.name && touched.name && <div className={classes.error}>{errors.name}</div>}
//             <input
//               type="email"
//               placeholder="Type email"
//               name="email"
//               value={values.email}
//               onChange={handleChange}
//             />
//             {errors.email && touched.email && <div className={classes.error}>{errors.email}</div>}
//             <input
//               type="password"
//               placeholder="Type password"
//               name="password"
//               value={values.password}
//               onChange={handleChange}
//             />
//             {errors.password && touched.password && (
//               <div className={classes.error}>{errors.password}</div>
//             )}
//             <button type="submit" className={classes.submitBtn}>
//               Sign Up
//             </button>
//             <p>
//               Already have an account? <Link to="/login">Login</Link>
//             </p>
//           </form>
//           {error && (
//             <div className={classes.errorMessage}>Wrong credentials! Try different ones.</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

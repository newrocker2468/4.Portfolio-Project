import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../components/Loader";
import { useTheme } from "../components/useTheme";
import { useLenis } from "lenis/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { cn } from "@/lib/utils";

interface HomeProps {
  className?: string;
  loading?: boolean;
}


const ContactMe = React.forwardRef<HTMLDivElement, HomeProps>(() => {
  const { effectiveTheme } = useTheme();
  const [Loading, setLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const lenis = useLenis();
  const handleLoad = React.useCallback(() => {
    lenis?.scrollTo("top"); // Scroll to the top of the page

    document.body.style.overflow = "hidden"; // standard no-scroll implementation
    document.body.setAttribute("data-lenis-prevent", "true");

    setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.style.transition = "opacity 0.5s ease-out";
        loaderRef.current.style.opacity = "0";
      }

      setTimeout(() => {
        setLoading(false);
        document.body.removeAttribute("data-lenis-prevent");
        document.body.style.overflow = "auto";
      }, 500); // Duration of the fade-out effect
    }, 2000); // Delay before the fade-out effect starts
  }, [lenis]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // Add your form submission logic here
      axios
        .post(`${import.meta.env.VITE_SERVER_URL}/sendmail`, values)
        .then((res) => {
          if (res.status === 200) {
            alert("Message Sent Successfully");
            formik.resetForm();
          }
        })
        .catch((error) => {
          console.error("There was an error sending the message!", error);
        });
    },
  });

  return (
    <div className='min-h-[70dvh]'>
      {Loading && (
        <Loader
          ref={loaderRef}
          className={effectiveTheme === "dark" ? "bg-black" : "bg-white"}
        />
      )}
      <h1 className='text-center text-3xl'>Wanna Get In Touch ? </h1>
      <p className='text-center text-lg mt-4'>
        Fill the form below to get in touch with me.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-[3rem]'>
          <div className='flex md:justify-end justify-center col-span-2 md:col-span-1'>
            <div className='w-4/5 md:w-1/2 grid grid-cols-1 relative'>
              <span className='w-full text-start my-[0.3rem]'>Name :</span>
              <Input
                type='text'
                name='name'
                placeholder="Enter yours or company's name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={cn({
                  "border-red-500": formik.touched.name && formik.errors.name,
                })}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className='text-red-500 absolute bottom-[-20px]'>
                  {formik.errors.name}
                </div>
              ) : null}
            </div>
          </div>
          <div className='flex md:justify-start justify-center col-span-2 md:col-span-1'>
            <div className='w-4/5 md:w-1/2 grid grid-cols-1 relative'>
              <span className='w-full text-start my-[0.3rem]'>Email :</span>
              <Input
                type='email'
                name='email'
                placeholder='Your Mail ID'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={cn({
                  "border-red-500": formik.touched.email && formik.errors.email,
                })}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className='text-red-500 absolute bottom-[-25px]'>
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>
          <div className='flex justify-center col-span-2'>
            <div className='w-4/5 md:w-1/2 grid grid-cols-1'>
              <span className='w-full text-start my-[0.3rem]'>Subject :</span>
              <Input
                type='text'
                name='subject'
                placeholder='Subject'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                className={cn({
                  "border-red-500":
                    formik.touched.subject && formik.errors.subject,
                })}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className='text-red-500'>{formik.errors.subject}</div>
              ) : null}
            </div>
          </div>
          <div className='flex justify-center col-span-2'>
            <div className='w-4/5 md:w-1/2 grid grid-cols-1'>
              <span className='w-full text-start my-[0.3rem]'>Message :</span>
              <Textarea
                className={cn("w-full", {
                  "border-red-500":
                    formik.touched.message && formik.errors.message,
                })}
                name='message'
                placeholder='Enter your message here'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className='text-red-500'>{formik.errors.message}</div>
              ) : null}
            </div>
          </div>

          <div className='flex justify-center col-span-2'>
            <button
              type='submit'
              className={`px-4 py-2 ${
                effectiveTheme === "dark"
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }  rounded-lg w-4/5 md:w-1/2 dark:hover:bg-slate-200 hover:bg-[#515151]`}
            >
              Send
            </button>
          </div>
        </div>
      </form>
      <div>
        <h2 className='text-center my-4'>
          If you prefer not to fill out the form, no problem at all. You can
          reach me directly via email at hello@jaskaran.dev.
        </h2>
      </div>
    </div>
  );
});

export default ContactMe;

import { useState } from 'react';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import PhoneInput, {
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from 'react-phone-number-input';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { TitleLabel } from '../components';
import { BsCheckAll } from 'react-icons/bs';

type ContactFormType = {
  fullname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const SERVICE_ID = import.meta.env.VITE_APP_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_TEMPLATE_ID;
const USER_KEY = import.meta.env.VITE_APP_USER_KEY;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [phonenumber, setPhonenumber] = useState('');
  const [phoneError, setPhoneError] = useState(false);

  const form = useForm<ContactFormType>({
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = (data: ContactFormType) => {
    console.log('form data -----', data);
    if (phonenumber) {
      if (isValidPhoneNumber(phonenumber)) {
        setPhoneError(false);
        data.phone = phonenumber;

        processSubmission(data);
      } else {
        setPhoneError(true);
      }
    } else {
      setPhoneError(false);
      processSubmission(data);
    }
  };

  const processSubmission = (data: ContactFormType) => {
    setLoading(true);
    const form = document.createElement('form');
    form.style.display = 'none';
    const emailBody: any = {
      from_name: data.fullname + ` <${data.email}> <${data.phone}>`,
      to_name: 'Damilare Adepoju',
      message: data.message,
      reply_to: data.email,
    };
    for (const key in emailBody) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = emailBody[key];
      form.appendChild(input);
    }
    document.body.appendChild(form);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_KEY).then(
      () => {
        reset();
        setPhonenumber('');
        setPhoneError(false);
        notify();
        setLoading(false);
      },
      (error) => {
        console.log(error.text);
        setLoading(false);
      },
    );
  };

  const updatePhonenumber = (value: string) => {
    if (value) {
      setPhonenumber(formatPhoneNumberIntl(value));
    }
  };

  const errorBorder = (field: keyof ContactFormType) => {
    if (errors && errors[field]) {
      return 'p-invalid';
    }
  };

  const errorMessage = (field: keyof ContactFormType) => {
    if (errors && errors[field]) {
      return (
        <span className="block text-red-600 text-sm mt-1">
          {errors[field]?.message}
        </span>
      );
    }
  };

  const notify = () =>
    toast.custom(
      (t: any) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full custom-toast shadow-lg rounded-lg pointer-events-auto flex ring-1`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <div className="h-10 w-10 rounded-full flex items-center justify-center toast-icon-container">
                  <BsCheckAll className="text-lg" />
                </div>
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium">
                  Your message has been sent!
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  I will get in touch as soon as possible
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ),
      {
        duration: 4000,
      },
    );

  return (
    <div className="my-16 lg:my-40 services-section" id="contact">
      <TitleLabel>
        <HiOutlineEnvelope className="text-lg" /> CONTACT
      </TitleLabel>

      <h1 className="mt-10 text-4xl lg:text-5xl w-full lg:w-[80%] font-light leading-10 lg:leading-[60px]">
        Drop me a message{' '}
      </h1>
      <div className="w-full mt-6">
        <p className="text-2xl">adamilarej@gmail.com</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        >
          <div className="form-group">
            <label htmlFor="fullname">
              FULL NAME <span className="text-red-600">*</span>
            </label>
            <InputText
              placeholder="Your Full Name"
              id="fullname"
              className={`${errorBorder('fullname')}`}
              {...register('fullname', {
                required: 'Enter your full name',
              })}
            />
            {errorMessage('fullname')}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              EMAIL <span className="text-red-600">*</span>
            </label>
            <InputText
              placeholder="Your Email Address"
              id="email"
              className={`${errorBorder('fullname')}`}
              {...register('email', {
                required: 'Enter your email address',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errorMessage('email')}
          </div>

          <div className="form-group">
            <label htmlFor="phone">PHONE (OPTIONAL)</label>
            <PhoneInput
              country="gh"
              placeholder="Enter Phone Number"
              value={phonenumber}
              onChange={updatePhonenumber}
            />
            {phoneError && (
              <span className="block text-red-600 text-sm mt-1">
                Phone number entered is invalid
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="subject">
              SUBJECT <span className="text-red-600">*</span>
            </label>
            <InputText
              placeholder="Your message subject/title"
              className={`${errorBorder('fullname')}`}
              id="subject"
              {...register('subject', {
                required: 'Enter your message subject',
              })}
            />
            {errorMessage('email')}
          </div>

          <div className="col-span-1 md:col-span-2 form-group">
            <label htmlFor="message">
              MESSAGE <span className="text-red-600">*</span>
            </label>
            <InputTextarea
              placeholder="Write your message here..."
              rows={2}
              cols={20}
              className={`${errorBorder('fullname')}`}
              {...register('message', {
                required: 'Enter your message',
              })}
            />
            {errorMessage('message')}
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-[90%] lg:w-[70%] py-5 text-md text-white rounded-full linear-gradient"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span className="animate-pulse">SENDING...</span>
              </div>
            ) : (
              'SEND MESSAGE'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import { useRef, useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import SectionHeading from './ui/SectionHeading';
import { EMAIL_CONFIG } from '../config/email';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaValue) {
      setFormStatus('error');
      return;
    }
    
    setFormStatus('submitting');

    if (!formRef.current) return;

    try {
      const formData = new FormData(formRef.current);
      const currentTime = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

      const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        time: currentTime
      };

      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      setFormStatus('success');
      formRef.current.reset();
      setCaptchaValue(null);
      recaptchaRef.current?.reset();
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    if (formStatus === 'error') {
      setFormStatus('idle');
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Let's discuss your project or opportunities" 
        />
        
        <div className="max-w-5xl mx-auto mt-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact information */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Have a project in mind or want to discuss opportunities? Feel free to reach out. 
                I'm always open to new challenges and collaborations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                      Email
                    </h4>
                    <a href={`mailto:${EMAIL_CONFIG.RECIPIENT_EMAIL}`} className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {EMAIL_CONFIG.RECIPIENT_EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                      Location
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Helsinki, Finland
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Availability
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  I'm currently available for:
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Freelance projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    Contract work (part-time)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Full-time positions (not available)
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact form */}
            <div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Send Me a Message
                </h3>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      disabled={formStatus === 'submitting'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      disabled={formStatus === 'submitting'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      disabled={formStatus === 'submitting'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white resize-none"
                      disabled={formStatus === 'submitting'}
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6Lcr6ywrAAAAANtt4vXSP_UkKMkjY4ijJmRs_48m"
                      onChange={handleCaptchaChange}
                      theme="light"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting' || formStatus === 'success' || !captchaValue}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-colors ${
                      formStatus === 'submitting'
                        ? 'bg-primary-500 cursor-not-allowed'
                        : formStatus === 'success'
                        ? 'bg-green-600 cursor-not-allowed'
                        : !captchaValue
                        ? 'bg-slate-400 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600'
                    }`}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : formStatus === 'success' ? (
                      'Message Sent!'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                  
                  {formStatus === 'error' && (
                    <p className="text-red-600 text-sm mt-2">
                      {!captchaValue 
                        ? 'Please complete the captcha verification.'
                        : 'There was an error sending your message. Please try again.'}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
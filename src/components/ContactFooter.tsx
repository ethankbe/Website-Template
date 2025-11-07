import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SendIcon } from 'lucide-react';

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-1">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-3xl mx-auto animate-section">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-white text-center mb-12 leading-relaxed">
            Have questions about our research or interested in collaboration? We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 lg:p-12 rounded-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background text-foreground border-border"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background text-foreground border-border"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full min-h-[150px] bg-background text-foreground border-border"
                placeholder="Tell us about your inquiry..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-destructive">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-normal text-base"
            >
              SendIcon Message
              <SendIcon className="ml-3 w-5 h-5" strokeWidth={2} />
            </Button>
          </form>
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t border-white/20">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center text-white">
            <p className="text-sm">
              © {new Date().getFullYear()} Research Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

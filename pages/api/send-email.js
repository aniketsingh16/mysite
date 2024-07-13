import { Resend } from 'resend';
import { render } from '@react-email/render';
import KoalaWelcomeEmail from '~/emails/email-template';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email } = req.body;
        
        const resend = new Resend("re_9UWqHsNe_tmuNiUBNbjAA5fUyTJ3Gio4A");
        const emailContent = render(<KoalaWelcomeEmail userFirstname={ name } />);
        try {
            const { error } = await resend.emails.send({
              from: 'Healthfirst Medicorp <onboarding@healthfirstmedicorp.site>',
              to: `${email}`,
              subject: "Welcome to Healthfirst Medicorp",
              html: emailContent
            //   react: <KoalaWelcomeEmail userFirstname={name} />
            });
        
            if (error) {
              return res.json({ error }, { status: 500 });
            }
            res.status(200).json({ message: 'Email sent successfully!' });
        }
        catch (error) {
            return res.json({ error: error.message }, { status: 500 });
            
          }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
}
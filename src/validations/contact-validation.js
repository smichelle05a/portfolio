import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  from_name: yup.string().required(" ! Name can't be empty").min(3," ! Name must have at least 3 characters"),
  reply_to: yup.string().required(" ! Email can't be empty").email(" ! You must enter a valid email to continue"),
  subject: yup.string().required(" ! Subject can't be empty").min(4, " ! Subject must have at least 4 characters"),
  message: yup.string().required(" ! Message can't be empty").min(4, " ! Message must have at least 4 characters")
});

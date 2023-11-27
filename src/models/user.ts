import mongoose from 'mongoose';

// an interface that describes properties required to create a new user
interface UserAttrs {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<UserAttrs>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<UserAttrs>('User', userSchema);

// const buildUser = (attrs: UserAttrs) => {
//     return new User(attrs)
// };

new User<UserAttrs>({
  email: 'skjansdjf',
  password: '121212',
});

export { User, UserAttrs };

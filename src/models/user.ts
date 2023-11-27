import mongoose from 'mongoose';

// an interface that describes properties required to create a new user
interface UserAttrs {
  email: string;
  password: string;
}

// interface that describes build function on User model
interface UserModal extends mongoose.Model<any> {
  build(attrs: UserAttrs): any;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<any, UserModal>('User', userSchema);

export { User };

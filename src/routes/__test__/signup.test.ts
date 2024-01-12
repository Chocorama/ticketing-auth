import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
});

it('returns 400 with invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@',
      password: 'password',
    })
    .expect(400);
});

it('returns 400 with invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@',
      password: '1',
    })
    .expect(400);
});

it('returns 400 with missing email or password password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: '', password: '1' })
    .expect(400);
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: '' })
    .expect(400);
});

const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    status:[
        Joi.string(),
        Joi.valid('active','unverified','banned')
        ],
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
    .with('username', 'status')
    .xor('password', 'access_token')


schema.validate({ username: 'abc', status: 'active' });
// -> { value: { username: 'abc', status: 'active' } }

schema.validate({});
// -> { value: {}, error: '"username" is required' }

// Also -

try {
    const value = await schema.validateAsync({ username: 'abc', status: 'active' });
}
catch (err) { }
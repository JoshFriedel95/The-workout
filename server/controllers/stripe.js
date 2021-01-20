const uuid = require('uuid')
const {SECRET_KEY} = process.env
const stripe = require('stripe')(SECRET_KEY)
module.exports = {
    payment: (req,res) => {
            const {product, token} = req.body
            const idempontencyKey = uuid()
        
            return stripe.customers.create({
                email: token.email,
                source: token.id
            }).then(customer => {
                stripe.charges.create({
                    amount: product.price * 1000,
                    currency: 'usd',
                    customer: customer.id,
                    receipt_email: token.email,
                    description: `Purchase of ${product.name}`,
                    shipping: {
                        name: token.card.name,
                        address: {
                            country: token.card.address_country
                        }
                    }
                }, {idempontencyKey})
            }).then(res => res.status(200).json(result))
                .catch(err => console.log(err));
        }
    }

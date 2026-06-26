# Set Up Razorpay Standard Checkout

**Product:** Razorpay  
**Content type:** How-to guide  
**Author:** Madhurima Chowdhury

---

## Before you begin

Make sure you have:
- A Razorpay account with API access
- Your Key ID and Key Secret from the Razorpay Dashboard
- A website with server-side code (Node.js, Python, PHP, or Java)

---

## Step 1: Get your API keys

1. Log in to your [Razorpay Dashboard](https://dashboard.razorpay.com).
2. Go to **Settings** → **API Keys**.
3. Click **Generate Test Key**.
4. Copy your **Key ID** and **Key Secret** and store them securely.

> **Note:** Never expose your Key Secret in client-side code.

---

## Step 2: Add the Razorpay script to your website

Add the following script tag to your HTML file before the closing `</body>` tag:

```html

```

---

## Step 3: Create a payment order

On your server, create an order using the Razorpay Orders API:

```javascript
const Razorpay = require('razorpay');

const instance = new Razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET',
});

const order = await instance.orders.create({
  amount: 50000, // Amount in paise (50000 = ₹500)
  currency: 'INR',
  receipt: 'order_receipt_1',
});
```

---

## Step 4: Configure the checkout form

Add the following JavaScript to your client-side code:

```javascript
const options = {
  key: 'YOUR_KEY_ID',
  amount: '50000',
  currency: 'INR',
  name: 'Your Business Name',
  description: 'Product Description',
  order_id: 'ORDER_ID_FROM_SERVER',
  handler: function (response) {
    // Handle successful payment
    console.log(response.razorpay_payment_id);
  },
};

const rzp = new Razorpay(options);
rzp.open();
```

---

## Step 5: Verify the payment on your server

After a successful payment, verify the signature to confirm authenticity:

```javascript
const crypto = require('crypto');

const generatedSignature = crypto
  .createHmac('sha256', 'YOUR_KEY_SECRET')
  .update(order_id + '|' + razorpay_payment_id)
  .digest('hex');

if (generatedSignature === razorpay_signature) {
  console.log('Payment verified successfully');
}
```

---

## Related articles

- [Razorpay API Reference](https://razorpay.com/docs/api/)
- [Test payments with Razorpay](https://razorpay.com/docs/payments/payments/test-card-details/)
- [Handle payment failures](./razorpay-troubleshooting.md)

---

*Writer's note: This guide separates server-side and client-side steps deliberately — 
developers working on integrations need to know which code runs where. 
The prerequisite section prevents the most common setup errors before they happen.*

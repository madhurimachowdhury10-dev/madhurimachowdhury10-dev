# Fix Common Razorpay Payment Errors

**Product:** Razorpay
**Content type:** Troubleshooting guide
**Author:** Madhurima Chowdhury

---

## Before you start

Check the Razorpay System Status page to rule out any active incidents before troubleshooting on your end.

---

## Error: BAD_REQUEST_ERROR

**Cause:** The request is missing required parameters or contains invalid values.

**Fix:**

1. Check that amount is in paise, not rupees. Rs 500 equals 50000 paise.
2. Confirm currency is set to INR.
3. Verify your key_id is correct and active in the Razorpay Dashboard.

---

## Error: Signature verification failed

**Cause:** The payment signature does not match because the Key Secret used for verification is incorrect.

**Fix:**

1. Go to Settings, then API Keys in your Razorpay Dashboard.
2. Confirm you are using the correct Key Secret for your environment.
3. Test keys and live keys are different — do not mix them.
4. Make sure you are not exposing the Key Secret in client-side code.

**Warning:** Regenerating your Key Secret invalidates the existing one immediately. Update all server-side references before regenerating.

---

## Error: Payment captured but order not updated

**Cause:** The payment success webhook was not received or processed by your server.

**Fix:**

1. Go to Settings, then Webhooks in your Razorpay Dashboard.
2. Confirm your webhook URL is active and publicly accessible.
3. Check your server logs for any failed webhook deliveries.
4. Use the Retry option in the Dashboard to resend failed webhooks.

---

## Error: Checkout not loading

**Cause:** The Razorpay checkout script is blocked or loading after the payment button is triggered.

**Fix:**

1. Confirm the Razorpay script tag appears before the closing body tag in your HTML.
2. Check your browser console for Content Security Policy errors.
3. Disable browser extensions temporarily to rule out interference.

---

## Error: Wrong payment amount

**Cause:** The amount in your order creation request does not match the displayed price.

**Fix:**

1. Confirm the amount passed to the Orders API matches the amount shown in your checkout UI.
2. Check for rounding errors in your currency conversion logic.
3. Always calculate amount server-side — never rely on client-side values.

---

## Still not resolved?

1. Collect your Payment ID or Order ID from the Razorpay Dashboard.
2. Check the Razorpay Developer Forum.
3. Contact Razorpay Support with your Payment ID and a description of the issue.

---

Writer's note: Each error block follows a strict Cause and Fix structure so developers can scan quickly. The escalation path at the end ensures users always have a next step even when self-service fails.

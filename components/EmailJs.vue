<template>
    <!-- Vue template section -->
    <div class=" mt-5">
        <h2>Email-js</h2>
        <!-- Form for sending email -->
        <form @submit.prevent="sendEmail">
            <div class="d-flex justify-center items-center">
                <label for="toName">To Name:</label>
                <input type="text" id="toName" v-model="toName" required>
            </div>
            <div class="d-flex justify-center items-center">
                <label for="fromName">From Name:</label>
                <input type="text" id="fromName" v-model="fromName" required>
            </div>
            <div class="d-flex justify-center items-center">
                <label for="message">Message:</label>
                <textarea id="message" v-model="message" required></textarea>
            </div>
            <button type="submit">Send Email</button>
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com'; // Import the emailjs library

export default {
    // Vue component script section
    data() {
        return {
            // Data variables to store input values
            toName: '',
            fromName: '',
            message: ''
        };
    },
    methods: {
        async sendEmail() {
            try {
                // Initialize EmailJS with your user ID
                emailjs.init("oArx2lVZgtPsQAWnW");

                // Send email using EmailJS
                const response = await emailjs.send('service_wysi0vc', 'template_8chg14e', {
                    to_name: this.toName,
                    from_name: this.fromName,
                    message: this.message
                });

                // Check response status and display appropriate message
                if (response.status === 200) {
                    alert('Email sent successfully!');
                    // Optionally, you can reset the form fields
                    this.toName = '';
                    this.fromName = '';
                    this.message = '';
                } else {
                    throw new Error('Failed to send email');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                alert('Error sending email. Please try again later.');
            }
        }
    }
};
</script>

<style scoped>
/* Scoped styles for this Vue component */
input,
textarea {
    width: 50%;
    border: 1px solid black;
    outline: none;
    margin-top: 8px;
    border-radius: 10px;
    padding: 10px 20px;
    margin-left: 10px;
}

label {
    display: block;
    margin-top: 16px;
    margin-left: 10px;
}

button {
    border: 2px solid black;
    border-radius: 10px;
    color: black;
    margin: 16px;
    transition: all 300ms ease-in-out;
    padding: 12px 28px;
}

button:hover {
    color: wheat;
    background-color: black;
}
</style>

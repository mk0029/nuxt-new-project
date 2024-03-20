
import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  if (process.client) {
    app.AOS = new AOS.init({
      // Global settings
      offset: 100, // Offset (in px) from the original trigger point
      duration: 800, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing type
      delay: 100, // Delay (in ms) for animation to start
      once: true, // Whether animation should only happen once
      
      // You can override these settings for specific elements by using data-aos-* attributes
      // For example:
      // data-aos-offset="50" // Override offset for a specific element
      
      // Add any additional options here
    })
  }
}
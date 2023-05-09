window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};

/* customize formbutton below*/     
formbutton("create", {
  action: "https://formspree.io/f/xyylwjvz",
  title: "How can I help you?",
  fields: [
    { 
      type: "text", 
      label: "Name:", 
      name: "name",
      required: true,
      placeholder: "Your Name"
    },
    { 
      type: "email", 
      label: "Email:", 
      name: "email",
      required: true,
      placeholder: "your@email.com"
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    { type: "submit" }      
  ],
  styles: {
    title: {
      backgroundColor: "#3279bb"
    },
    button: {
      backgroundColor: "#3279bb"
    }
  }
});
